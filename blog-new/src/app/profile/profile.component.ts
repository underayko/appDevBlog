import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, ReactiveFormsModule, RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent  implements OnInit {
  userDetails: any;
  userData: any = {};
  baseAPI: string = 'http://localhost/blog/blog-api';
  isModalOpen: boolean = false;
  selectedImage: any = null;
  Blogs: any = { user: {} };
  blogData: any = {};
  applyForm: FormGroup;
  formData: FormData = new FormData();
  studentID:any



  
  constructor(
    private fb: FormBuilder,
    private ds: DataService,
    private route: Router,
    private aRoute: ActivatedRoute,
    private cookieService: CookieService
  ) {
    this.applyForm = this.fb.group({
      blogTitle: [null, Validators.required],
      blogID: [null],
      blogDesc: [null, Validators.required],  
    });
  }




  ngOnInit(): void {
    this.userDetails = JSON.parse(this.cookieService.get('user_details'));
    this.loadGallery();
    console.log(this.userDetails.userID);





      this.ds.getRequestWithParams("get-blog", { id: this.userDetails.userID }).subscribe(
        (response: any) => {
          this.Blogs = response;
          if (!this.Blogs.user) {
            this.Blogs.user = {};
          }
          if (this.Blogs.blogs && this.Blogs.blogs.length > 0) {
            this.Blogs.blogs.sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
          }
          console.log('userData:', this.Blogs);
        },
        (error) => {
          console.error('Error :', error);
        }
      );
    

 
    
  }
  loadGallery(): void {
    this.ds.getRequestWithParams("get-blog", { id: this.userDetails.userID }).subscribe(
      (response: any) => {
        this.Blogs = response;
        if (!this.Blogs.user) {
          this.Blogs.user = {};
        }
        if (this.Blogs.blogs && this.Blogs.blogs.length > 0) {
          this.Blogs.blogs.sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
        }
        console.log('userData:', this.Blogs);
      },
      (error) => {
        console.error('Error :', error);
      }
    );
  }


  


  
  Edit(blogID: number): void {
    this.isModalOpen = true;

    this.ds.getRequestWithParams('get-userBlog', { blogID: blogID }).subscribe(
      (response: any) => {
        this.blogData = response;
        console.log("userBlog", this.blogData);
        this.applyForm.patchValue({
          blogID: this.blogData.blogID,
          blogTitle: this.blogData.blogTitle,
          blogDesc: this.blogData.blogDesc
        });
      },
      (error) => {
        console.error('Error fetching comments:', error);
      }
    );
  }

  editBlog(): void {
    this.formData = new FormData();
    this.formData.append('blogTitle', this.applyForm.value.blogTitle);
    this.formData.append('blogDesc', this.applyForm.value.blogDesc);
    this.formData.append('blogID', this.applyForm.value.blogID);

    this.ds.sendRequestWithMedia('edit-blog', this.formData).subscribe(
      (response) => {
        console.log('Comment submitted successfully:', response);
        this.isModalOpen = false;
        this.loadGallery();
      },
      (error) => {
        console.error('Error submitting comment:', error);
      }
    );
  }

  deleteBlog(blogID: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.ds.deleteBlog(blogID).subscribe(
          (response: any) => {
            console.log('Blog deleted successfully:', response);
            Swal.fire(
              'Deleted!',
              'Your blog has been deleted.',
              'success'
            );
            this.loadGallery();
          },
          (error) => {
            console.error('Error deleting blog:', error);
            Swal.fire(
              'Error!',
              'There was an error deleting the blog. Please try again.',
              'error'
            );
          }
        );
      }
    });
  }

  routeToCreateBLog(): void {
    this.route.navigate(['../creategallery'], { relativeTo: this.aRoute });
  }

  routeToGallery(): void {
    this.route.navigate([`../gallery`], { relativeTo: this.aRoute });
  }

  routeToGalleries(): void {
    this.route.navigate([`../galleries`], { relativeTo: this.aRoute });
  }

  openModal(img: any): void {
    this.selectedImage = img;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedImage = null;
  }

  editCoverPhoto(): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        this.uploadCoverPhoto(file);
      }
    };
    input.click();
  }

  uploadCoverPhoto(file: File): void {
    const formData = new FormData();
    formData.append('coverPhoto', file);
    formData.append('userID', this.userDetails.userID);

    this.ds.sendRequestWithMedia('insert-cover-photo', formData).subscribe(
      (response: any) => {
        console.log('Cover photo updated successfully:', response);
        this.Blogs.user.coverPhotoUrl = response.coverPhotoUrl;
        Swal.fire('Success', 'Cover photo updated successfully', 'success');
      },
      (error) => {
        console.error('Error updating cover photo:', error);
        Swal.fire('Error', 'Failed to update cover photo. Please try again.', 'error');
      }
    );
  }

  editfeaturedPicture(): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        this.uploadfeaturedPhoto(file);
      }
    };
    input.click();
  }

  uploadfeaturedPhoto(file: File): void {
    const formData = new FormData();
    formData.append('coverPhoto', file);
    formData.append('userID', this.userDetails.userID);

    this.ds.sendRequestWithMedia('insert-featured-photo', formData).subscribe(
      (response: any) => {
        console.log('Cover photo updated successfully:', response);
        this.Blogs.user.coverPhotoUrl = response.coverPhotoUrl;
        Swal.fire('Success', 'Cover photo updated successfully', 'success');
      },
      (error) => {
        console.error('Error updating cover photo:', error);
        Swal.fire('Error', 'Failed to update cover photo. Please try again.', 'error');
      }
    );
  }

  editProfilePicture(): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        this.uploadProfilePicture(file);
      }
    };
    input.click();
  }

  uploadProfilePicture(file: File): void {
    const formData = new FormData();
    formData.append('profile', file);
    formData.append('userID', this.userDetails.userID);
 

    this.ds.sendRequestWithMedia('insert-profile-picture', formData).subscribe(
        (response: any) => {
            console.log('Profile picture updated successfully:', response);
            this.Blogs.user.profilePictureUrl = response.imageUrl;
            Swal.fire('Success', 'Profile picture updated successfully', 'success');
        },
        (error) => {
            console.error('Error updating profile picture:', error);
            Swal.fire('Error', 'Failed to update profile picture. Please try again.', 'error');
        }
    );
  }
}
