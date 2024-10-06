// // import { Component, OnInit } from '@angular/core';
// // import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
// // import { CookieService } from 'ngx-cookie-service';
// // import { DataService } from '../data.service';
// // import { CommonModule } from '@angular/common';
// // import { FormBuilder, ReactiveFormsModule, Validators, FormGroup, FormsModule, FormControl } from '@angular/forms';
// // import { HttpErrorResponse } from '@angular/common/http';

// // @Component({
// //   selector: 'app-viewblog',
// //   standalone: true,
// //   imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterLinkActive, FormsModule],
// //   templateUrl: './viewblog.component.html',
// //   styleUrls: ['./viewblog.component.css']
// // })
// // export class ViewblogComponent implements OnInit {
// //   userDetails: any;
// //   userData: any = {};
// //   baseAPI: string = 'http://localhost/blog/blog-api';
// //   Blogs: any = { user: {} };
// //   studentID: any;
// //   applyForm: FormGroup;
// //   formData: FormData;
// //   comments: any[] = [];
// //   userID: any;

// //   constructor(
// //     private fb: FormBuilder,
// //     private ds: DataService,
// //     private route: Router,
// //     private aRoute: ActivatedRoute,
// //     private cookieService: CookieService
// //   ) {
// //     this.applyForm = this.fb.group({
// //       commentText: ['', Validators.required],
// //       commentAuthor: ['', Validators.required],
// //     });
// //     this.formData = new FormData();
// //   }

// //   ngOnInit(): void {
// //     this.loadBlogData();
// //   }

// //   loadBlogData(): void {
// //     this.aRoute.params.subscribe(params => {
// //       let userID = params['userID'];
// //       this.studentID = userID;

// //       this.ds.getRequestWithParams("get-blog", { id: userID }).subscribe({
// //         next: (response: any) => {
// //           this.Blogs = response;
// //           if (!this.Blogs.user) {
// //             this.Blogs.user = {};
// //           }
// //           if (this.Blogs.blogs && this.Blogs.blogs.length > 0) {
// //             this.Blogs.blogs.sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
// //             this.Blogs.blogs.forEach((blog: any) => {
// //               blog.comments = [];
// //               blog.showComments = false;
// //             });
// //           }
// //         },
// //         error: (error: HttpErrorResponse) => {
// //           console.error('Error loading blog data:', error);
// //         }
// //       });
// //     });
// //   }

// //   toggleComments(blog: any): void {
// //     blog.showComments = !blog.showComments;
// //     if (blog.showComments && (!blog.comments || blog.comments.length === 0)) {
// //       this.ds.getRequestWithParams("get-comments", { blogID: blog.blogID, userID: this.studentID }).subscribe({
// //         next: (response: any) => {
// //           blog.comments = response;
// //           console.log('Fetched Comments:', blog.comments);
// //         },
// //         error: (error: HttpErrorResponse) => {
// //           console.error('Error loading comments:', error);
// //           blog.comments = [];
// //         }
// //       });
// //     }
// //   }

// //   submitComment(blog: any) {
// //     if (this.applyForm.valid) {
// //       this.formData = new FormData();
// //       this.formData.append('commentText', this.applyForm.value.commentText);
// //       this.formData.append('commentAuthor', this.applyForm.value.commentAuthor);
// //       this.formData.append('blogID', blog.blogID.toString());
// //       this.formData.append('userID', this.studentID.toString());

// //       this.ds.sendRequestWithoutMedia('add-comment', this.formData).subscribe(
// //         (response) => {
// //           console.log('Comment submitted successfully:', response);
// //           const newComment = {
// //             author: this.applyForm.value.commentAuthor,
// //             comment: this.applyForm.value.commentText,
// //           };
// //           blog.comments.push(newComment);
// //           this.applyForm.reset();
// //         },
// //         (error) => {
// //           console.error('Error submitting comment:', error);
// //         }
// //       );
// //     }
// //   }
// // }

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
// import { CookieService } from 'ngx-cookie-service';
// import { DataService } from '../data.service';
// import { CommonModule } from '@angular/common';
// import { FormBuilder, ReactiveFormsModule, Validators, FormGroup, FormsModule, FormControl } from '@angular/forms';
// import { HttpErrorResponse } from '@angular/common/http';

// @Component({
//   selector: 'app-viewblog',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterLinkActive, FormsModule],
//   templateUrl: './viewblog.component.html',
//   styleUrls: ['./viewblog.component.css']
// })
// export class ViewblogComponent implements OnInit {
//   userDetails: any;
//   userData: any = {};
//   baseAPI: string = 'http://localhost/blog/blog-api';
//   Blogs: any = { user: {} };
//   studentID: any;
//   applyForm: FormGroup;
//   formData: FormData;
//   IDblog: any;
//   comments: any[] = [];
//   userID: any;

//   constructor(
//     private fb: FormBuilder,
//     private ds: DataService,
//     private route: Router,
//     private aRoute: ActivatedRoute,
//     private cookieService: CookieService
//   ) {
//     this.applyForm = new FormGroup({
//       commentText: new FormControl(null, Validators.required),
//       commentAuthor: new FormControl(null, Validators.required),
//     });
//     this.formData = new FormData();
//   }

//   ngOnInit(): void {
//     this.loadBlogData();
//   }

//   loadBlogData(): void {
//     this.aRoute.params.subscribe(params => {
//       let blogID = params['blogID'];
//       console.log('Blog ID from route:', blogID); // Debug: Check if blogID is correct
  
//       this.ds.getRequestWithParams("get-viewblog", { id: blogID }).subscribe({
//         next: (response: any) => {
//           console.log('Response from API:', response); // Debug: Inspect the API response
  
//           this.Blogs = response;
//           if (!this.Blogs.user) {
//             this.Blogs.user = {};
//           }
//           if (this.Blogs.blogs && this.Blogs.blogs.length > 0) {
//             this.Blogs.blogs.sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
//             this.Blogs.blogs.forEach((blog: any) => {
//               blog.comments = [];
//               blog.showComments = false;
//             });
//           }
//         },
//         error: (error: HttpErrorResponse) => {
//           console.error('Error loading blog data:', error);
//           alert('Failed to load blog data. Please try again later.'); // Optional: User feedback
//         }
//       });
//     });
//   }
  

//   toggleComments(blog: any, userID: any): void {
//     blog.showComments = !blog.showComments;
//     if (blog.showComments && (!blog.comments || blog.comments.length === 0)) {
//       this.ds.getRequestWithParams("get-comments", { blogID: blog.blogID, userID: userID }).subscribe({
//         next: (response: any) => {
//           this.comments = response;
//           console.log('Fetched Comments:', this.comments);
//         },
//         error: (error: HttpErrorResponse) => {
//           console.error('Error loading comments:', error);
//           blog.comments = [];
//         }
//       });
//     }
//   }

//   Insert(blogID: number, userID: number) {
//     this.IDblog = blogID;
//     this.userID = userID;

//     this.formData = new FormData();
//     this.formData.append('commentText', this.applyForm.value.commentText);
//     this.formData.append('commentAuthor', this.applyForm.value.commentAuthor);
//     this.formData.append('blogID', this.IDblog.toString());
//     this.formData.append('userID', this.userID.toString());

//     this.ds.sendRequestWithoutMedia('add-comment', this.formData).subscribe(
//       (response) => {
//         console.log('Comment submitted successfully:', response);

//         const newComment = {
//           author: this.applyForm.value.commentAuthor,
//           comment: this.applyForm.value.commentText,
//         };

//         this.comments.push(newComment);
//         this.applyForm.reset();
//       },
//       (error) => {
//         console.error('Error submitting comment:', error);
//       }
//     );
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
  selector: 'app-viewblog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './viewblog.component.html',
  styleUrls: ['./viewblog.component.css']
})
export class ViewblogComponent implements OnInit {
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