// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
// import { CookieService } from 'ngx-cookie-service';
// import { DataService } from '../data.service';
// import { CommonModule } from '@angular/common';
// import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-viewport',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterLinkActive],
//   templateUrl: './viewport.component.html',
//   styleUrls: ['./viewport.component.css']
// })
// export class ViewportComponent implements OnInit {
//   userDetails: any;
//   userData: any = {};
//   baseAPI: string = 'http://localhost/blog/blog-api';
//   Blogs: any = { user: {} };
//   studentID: any;

//   constructor(
//     private fb: FormBuilder,
//     private ds: DataService,
//     private route: Router,
//     private aRoute: ActivatedRoute,
//     private cookieService: CookieService
//   ) {}

//   ngOnInit(): void {

//     this.loadGallery();

//     this.aRoute.params.subscribe(params => {
//       let userID = params['userID'];
//       this.studentID = userID;

//       this.ds.getRequestWithParams("get-blog", { id: userID }).subscribe(
//         (response: any) => {
//           this.Blogs = response;
//           if (!this.Blogs.user) {
//             this.Blogs.user = {};
//           }
//           if (this.Blogs.blogs && this.Blogs.blogs.length > 0) {
//             this.Blogs.blogs.sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
//           }
//         },
//         (error) => {
//           console.error('Error :', error);
//         }
//       );
//     });
//   }

//   loadGallery(): void {
//     this.ds.getRequestWithParams("get-blog", { id: this.studentID }).subscribe(
//       (response: any) => {
//         this.Blogs = response;
//         if (!this.Blogs.user) {
//           this.Blogs.user = {};
//         }
//         if (this.Blogs.blogs && this.Blogs.blogs.length > 0) {
//           this.Blogs.blogs.sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
//         }
//       },
//       (error) => {
//         console.error('Error :', error);
//       }
//     );
//   }

// }


















// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
// import { CookieService } from 'ngx-cookie-service';
// import { DataService } from '../data.service';
// import { CommonModule } from '@angular/common';
// import { FormBuilder, ReactiveFormsModule, Validators, FormGroup, FormsModule } from '@angular/forms';
// import { HttpErrorResponse } from '@angular/common/http';

// @Component({
//   selector: 'app-viewport',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterLinkActive, FormsModule],
//   templateUrl: './viewport.component.html',
//   styleUrls: ['./viewport.component.css']
// })
// export class ViewportComponent implements OnInit {
//   userDetails: any;
//   userData: any = {};
//   baseAPI: string = 'http://localhost/blog/blog-api';
//   Blogs: any = { user: {} };
//   studentID: any;
//   newCommentAuthor: string = '';
//   newCommentContent: string = '';

//   constructor(
//     private fb: FormBuilder,
//     private ds: DataService,
//     private route: Router,
//     private aRoute: ActivatedRoute,
//     private cookieService: CookieService
//   ) {}

//   ngOnInit(): void {
//     this.loadGallery();

//     this.aRoute.params.subscribe(params => {
//       let userID = params['userID'];
//       this.studentID = userID;

//       this.ds.getRequestWithParams("get-blog", { id: userID }).subscribe({
//         next: (response: any) => {
//           this.Blogs = response;
//           if (!this.Blogs.user) {
//             this.Blogs.user = {};
//           }
//           if (this.Blogs.blogs && this.Blogs.blogs.length > 0) {
//             this.Blogs.blogs.sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
//           }
//         },
//         error: (error: HttpErrorResponse) => {
//           console.error('Error :', error);
//         }
//       });
//     });
//   }

//   loadGallery(): void {
//     this.ds.getRequestWithParams("get-blog", { id: this.studentID }).subscribe({
//       next: (response: any) => {
//         this.Blogs = response;
//         if (!this.Blogs.user) {
//           this.Blogs.user = {};
//         }
//         if (this.Blogs.blogs && this.Blogs.blogs.length > 0) {
//           this.Blogs.blogs.sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
//         }
//       },
//       error: (error: HttpErrorResponse) => {
//         console.error('Error :', error);
//       }
//     });
//   }

//   toggleComments(blog: any): void {
//     blog.showComments = !blog.showComments;
//     if (blog.showComments && !blog.comments) {
 
//       this.ds.getRequestWithParams("get-comments", { blogId: blog.id }).subscribe({
//         next: (response: any) => {
//           blog.comments = response.comments;
//         },
//         error: (error: HttpErrorResponse) => {
//           console.error('Error loading comments:', error);
//           blog.comments = [];
//         }
//       });
//     }
//   }

//   addComment(blog: any): void {
//     if (this.newCommentAuthor && this.newCommentContent) {
//       const newComment = {
//         author: this.newCommentAuthor,
//         content: this.newCommentContent,
//         timestamp: new Date()
//       };

    
//       this.ds.sendRequestWithoutMedia("add-comment", { 
//         blogId: blog.id, 
//         author: this.newCommentAuthor, 
//         content: this.newCommentContent 
//       }).subscribe({
//         next: (response: any) => {
//           if (!blog.comments) {
//             blog.comments = [];
//           }
//           blog.comments.unshift(newComment);
//           this.newCommentAuthor = '';
//           this.newCommentContent = '';
//         },
//         error: (error: HttpErrorResponse) => {
//           console.error('Error adding comment:', error);
//         }
//       });
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup, FormsModule, FormControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-viewport',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './viewport.component.html',
  styleUrls: ['./viewport.component.css']
})
export class ViewportComponent implements OnInit {
  userDetails: any;
  userData: any = {};
  baseAPI: string = 'http://localhost/blog/blog-api';
  Blogs: any = { user: {} };
  studentID: any;
  newCommentAuthor: string = '';
  newCommentContent: string = '';
  applyForm: any;
  formData!: FormData;
  IDblog: any;
  comments: any[] = [];
  userID: any;

  constructor(
    private fb: FormBuilder,
    private ds: DataService,
    private route: Router,
    private aRoute: ActivatedRoute,
    private cookieService: CookieService
  ) {}


  
  ngOnInit(): void {
    this.formData = new FormData();
    this.loadGallery();

    this.applyForm = new FormGroup({
      commentText: new FormControl(null, Validators.required),
      commentAuthor: new FormControl(null, Validators.required),
    });

    this.aRoute.params.subscribe(params => {
      let userID = params['userID'];
      this.studentID = userID;

      this.ds.getRequestWithParams("get-blog", { id: userID }).subscribe({
        next: (response: any) => {
          this.Blogs = response;
          if (!this.Blogs.user) {
            this.Blogs.user = {};
          }
          if (this.Blogs.blogs && this.Blogs.blogs.length > 0) {
            this.Blogs.blogs.sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
            // Initialize comments array for each blog
            this.Blogs.blogs.forEach((blog: any) => {
              blog.comments = [];
              blog.showComments = false;
            });
          }
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error :', error);
        }
      });
    });
  }

  loadGallery(): void {
    this.ds.getRequestWithParams("get-blog", { id: this.studentID }).subscribe({
      next: (response: any) => {
        this.Blogs = response;
        if (!this.Blogs.user) {
          this.Blogs.user = {};
        }
        if (this.Blogs.blogs && this.Blogs.blogs.length > 0) {
          this.Blogs.blogs.sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
        }
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error :', error);
      }
    });
  }

  toggleComments(blog: any, userID: any): void {
    blog.showComments = !blog.showComments;
    if (blog.showComments && (!blog.comments || blog.comments.length === 0)) {
      // Load comments from the server
      this.ds.getRequestWithParams("get-comments", { blogID: blog.blogID, userID:userID }).subscribe({
        next: (response: any) => {
          this.comments = response;
        console.log('Fetched Comments:', this.comments);
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error loading comments:', error);
          blog.comments = [];
        }
      });
    }
  }
  

  Insert(blogID:number, userID:number) {
    this.IDblog=blogID;
    this.userID=userID;

    this.formData.append('commentText', this.applyForm.value.commentText);
    this.formData.append('commentAuthor', this.applyForm.value.commentAuthor);
    this.formData.append('blogID', this.IDblog.toString());
    this.formData.append('userID', this.userID.toString());


    this.ds.sendRequestWithoutMedia('add-comment', this.formData).subscribe(
      (response) => {
        console.log('Comment submitted successfully:', response);

        const newComment = {
          author: this.applyForm.value.commentAuthor,
          comment: this.applyForm.value.commentText,

        };

        this.comments.push(newComment);
        this.applyForm.reset();

        // this.comments.push(newComment);
        this.applyForm.reset();
      },
      (error) => {
        console.error('Error submitting comment:', error);
      }
    );
  }
}