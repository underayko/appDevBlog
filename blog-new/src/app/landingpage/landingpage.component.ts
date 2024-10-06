// import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';
// import { RouterLink, RouterLinkActive } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-landingpage',
//   standalone: true,
//   imports: [CommonModule, RouterLink, RouterLinkActive],
//   templateUrl: './landingpage.component.html',
//   styleUrls: ['./landingpage.component.css']
// })
// export class LandingpageComponent implements OnInit {
//   allBlogs: any[] = [];

//   constructor(private ds: DataService) {}

//   ngOnInit(): void {
//     this.loadBlogs();
//   }

//   loadBlogs(): void {
//     this.ds.getRequest('get-all-blogs').subscribe(
//       (response: any) => {
//         this.allBlogs = response;
//         console.log('All blogs:', this.allBlogs);

//         // Check structure of the response
//         if (this.allBlogs.length > 0) {
//           this.allBlogs.forEach(blog => {
//             console.log('Blog:', blog);
//             console.log('Author:', blog.firstname, blog.lastname);
//           });
//         }
//       },
//       (error) => {
//         console.error('Error fetching blogs:', error);
//       }
//     );
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';
// import { RouterLink, RouterLinkActive } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { CookieService } from 'ngx-cookie-service';

// @Component({
//   selector: 'app-landingpage',
//   standalone: true,
//   imports: [CommonModule, RouterLink, RouterLinkActive, FormsModule],
//   templateUrl: './landingpage.component.html',
//   styleUrls: ['./landingpage.component.css']
// })
// export class LandingpageComponent implements OnInit {
//   allBlogs: any[] = [];
//   filteredBlogs: any[] = [];
//   searchTerm: string = '';
//   userDetails: any;

//   constructor(private ds: DataService, private cookieService: CookieService) {}

//   ngOnInit(): void {
//     this.userDetails = JSON.parse(this.cookieService.get('user_details'));
//     this.loadBlogs();
//   }

//   loadBlogs(): void {
//     // this.userDetails = JSON.parse(this.cookieService.get('user_details'));
//     this.ds.getRequest('get-all-blogs').subscribe(
//       (response: any) => {
//         this.allBlogs = response;
//         this.filteredBlogs = [...this.allBlogs];
//         console.log('All blogs:', this.allBlogs);

//         // Check structure of the response
//         if (this.allBlogs.length > 0) {
//           this.allBlogs.forEach(blog => {
//             console.log('Blog:', blog);
//             console.log('Author:', blog.firstname, blog.lastname);
//           });
//         }
//       },
//       (error) => {
//         console.error('Error fetching blogs:', error);
//       }
//     );
//   }

//   searchBlogs(): void {
//     if (!this.searchTerm.trim()) {
//       this.filteredBlogs = [...this.allBlogs];
//       return;
//     }

//     const searchTermLower = this.searchTerm.toLowerCase();
//     const matchingBlogs = this.allBlogs.filter(blog => 
//       blog.firstname.toLowerCase().includes(searchTermLower) ||
//       blog.lastname.toLowerCase().includes(searchTermLower) ||
//       `${blog.firstname} ${blog.lastname}`.toLowerCase().includes(searchTermLower)
//     );

//     const nonMatchingBlogs = this.allBlogs.filter(blog => 
//       !blog.firstname.toLowerCase().includes(searchTermLower) &&
//       !blog.lastname.toLowerCase().includes(searchTermLower) &&
//       !`${blog.firstname} ${blog.lastname}`.toLowerCase().includes(searchTermLower)
//     );

//     this.filteredBlogs = [
//       ...matchingBlogs.map(blog => ({ ...blog, highlighted: true })),
//       ...nonMatchingBlogs.map(blog => ({ ...blog, highlighted: false }))
//     ];
//   }
// }




















// import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';
// import { RouterLink, RouterLinkActive } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { CookieService } from 'ngx-cookie-service';

// @Component({
//   selector: 'app-landingpage',
//   standalone: true,
//   imports: [CommonModule, RouterLink, RouterLinkActive, FormsModule],
//   templateUrl: './landingpage.component.html',
//   styleUrls: ['./landingpage.component.css']
// })
// export class LandingpageComponent implements OnInit {
//   allBlogs: any[] = [];
//   filteredBlogs: any[] = [];
//   searchTerm: string = '';
//   userDetails: any;
//   baseAPI: string = 'http://localhost/blog/blog-api';

//   constructor(private ds: DataService, private cookieService: CookieService) {}

//   ngOnInit(): void {
//     this.userDetails = JSON.parse(this.cookieService.get('user_details'));
//     this.loadBlogs();
//   }

//   loadBlogs(): void {
//     this.ds.getRequest('get-all-blogs').subscribe(
//       (response: any) => {
//         this.allBlogs = response.map((blog: any) => ({
//           ...blog,
//           pfp: blog.pfp ? `${this.baseAPI}${blog.pfp}` : 'path/to/default/profile/image.jpg',
//           blogImg: blog.blogImg ? `${this.baseAPI}${blog.blogImg}` : null
//         }));
//         this.sortBlogsByDate(); // Sort blogs by date
//         this.filteredBlogs = [...this.allBlogs];
//         console.log('All blogs:', this.allBlogs);
//       },
//       (error) => {
//         console.error('Error fetching blogs:', error);
//       }
//     );
//   }

//   sortBlogsByDate(): void {
//     this.allBlogs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
//   }

//   searchBlogs(): void {
//     if (!this.searchTerm.trim()) {
//       this.filteredBlogs = [...this.allBlogs];
//       return;
//     }

//     const searchTermLower = this.searchTerm.toLowerCase();
//     const matchingBlogs = this.allBlogs.filter(blog => 
//       blog.firstname.toLowerCase().includes(searchTermLower) ||
//       blog.lastname.toLowerCase().includes(searchTermLower) ||
//       `${blog.firstname} ${blog.lastname}`.toLowerCase().includes(searchTermLower)
//     );

//     const nonMatchingBlogs = this.allBlogs.filter(blog => 
//       !blog.firstname.toLowerCase().includes(searchTermLower) &&
//       !blog.lastname.toLowerCase().includes(searchTermLower) &&
//       !`${blog.firstname} ${blog.lastname}`.toLowerCase().includes(searchTermLower)
//     );

//     this.filteredBlogs = [
//       ...matchingBlogs.map(blog => ({ ...blog, highlighted: true })),
//       ...nonMatchingBlogs.map(blog => ({ ...blog, highlighted: false }))
//     ];

//     this.filteredBlogs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()); // Sort filtered blogs by date
//   }
// }


























// import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';
// import { Router, RouterLink, RouterLinkActive } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { CookieService } from 'ngx-cookie-service';

// @Component({
//   selector: 'app-landingpage',
//   standalone: true,
//   imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
//   templateUrl: './landingpage.component.html',
//   styleUrls: ['./landingpage.component.css']
// })
// export class LandingpageComponent implements OnInit {
//   allBlogs: any[] = [];
//   filteredBlogs: any[] = [];
//   searchTerm: string = '';
//   userDetails: any;
//   baseAPI: string = 'http://localhost/blog/blog-api';

//   constructor(
//     private ds: DataService,
//     private cookieService: CookieService,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     const userDetailsCookie = this.cookieService.get('user_details');
//     this.userDetails = userDetailsCookie ? JSON.parse(userDetailsCookie) : null;
//     this.loadBlogs();
//   }

//   loadBlogs(): void {
//     this.ds.getRequest('get-all-blogs').subscribe(
//       (response: any) => {
//         this.allBlogs = response.map((blog: any) => ({
//           ...blog,
//           pfp: blog.pfp ? `${this.baseAPI}${blog.pfp}` : 'path/to/default/profile/image.jpg',
//           blogImg: blog.blogImg ? `${this.baseAPI}${blog.blogImg}` : null
//         }));
//         this.filteredBlogs = [...this.allBlogs].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
//         console.log('All blogs:', this.allBlogs);
//       },
//       (error) => {
//         console.error('Error fetching blogs:', error);
//       }
//     );
//   }

//   searchBlogs(): void {
//     if (!this.searchTerm.trim()) {
//       this.filteredBlogs = [...this.allBlogs];
//       return;
//     }

//     const searchTermLower = this.searchTerm.toLowerCase();
//     const matchingBlogs = this.allBlogs.filter(blog => 
//       blog.firstname.toLowerCase().includes(searchTermLower) ||
//       blog.lastname.toLowerCase().includes(searchTermLower) ||
//       `${blog.firstname} ${blog.lastname}`.toLowerCase().includes(searchTermLower)
//     );

//     const nonMatchingBlogs = this.allBlogs.filter(blog => 
//       !blog.firstname.toLowerCase().includes(searchTermLower) &&
//       !blog.lastname.toLowerCase().includes(searchTermLower) &&
//       !`${blog.firstname} ${blog.lastname}`.toLowerCase().includes(searchTermLower)
//     );

//     this.filteredBlogs = [
//       ...matchingBlogs.map(blog => ({ ...blog, highlighted: true })),
//       ...nonMatchingBlogs.map(blog => ({ ...blog, highlighted: false }))
//     ];
//   }

//   logout(): void {
//     this.cookieService.delete('user_details');
//     this.userDetails = null; 
//     this.router.navigate(['/login']);
//   }
// }







































// import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';
// import { Router, RouterLink, RouterLinkActive } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { CookieService } from 'ngx-cookie-service';

// @Component({
//   selector: 'app-landingpage',
//   standalone: true,
//   imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
//   templateUrl: './landingpage.component.html',
//   styleUrls: ['./landingpage.component.css']
// })
// export class LandingpageComponent implements OnInit {
//   allBlogs: any[] = [];
//   filteredBlogs: any[] = [];
//   searchTerm: string = '';
//   userDetails: any;
//   baseAPI: string = 'http://localhost/blog/blog-api';

//   constructor(
//     private ds: DataService,
//     private cookieService: CookieService,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     const userDetailsCookie = this.cookieService.get('user_details');
//     this.userDetails = userDetailsCookie ? JSON.parse(userDetailsCookie) : null;
//     this.loadBlogs();
//   }

//   loadBlogs(): void {
//     this.ds.getRequest('get-all-blogs').subscribe(
//       (response: any) => {
//         this.allBlogs = response.map((blog: any) => ({
//           ...blog,
//           pfp: blog.pfp ? `${this.baseAPI}${blog.pfp}` : 'path/to/default/profile/image.jpg',
//           blogImg: blog.blogImg ? `${this.baseAPI}${blog.blogImg}` : null
//         }));
//         this.filteredBlogs = [...this.allBlogs].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
//         console.log('All blogs:', this.allBlogs);
//       },
//       (error) => {
//         console.error('Error fetching blogs:', error);
//       }
//     );
//   }

//   // searchBlogs(): void {
//   //   if (!this.searchTerm.trim()) {
//   //     this.filteredBlogs = [...this.allBlogs];
//   //     return;
//   //   }

//   //   const searchTermLower = this.searchTerm.toLowerCase();
//   //   const matchingBlogs = this.allBlogs.filter(blog => 
//   //     blog.firstname.toLowerCase().includes(searchTermLower) ||
//   //     blog.lastname.toLowerCase().includes(searchTermLower) ||
//   //     `${blog.firstname} ${blog.lastname}`.toLowerCase().includes(searchTermLower)
//   //   );

//   //   const nonMatchingBlogs = this.allBlogs.filter(blog => 
//   //     !blog.firstname.toLowerCase().includes(searchTermLower) &&
//   //     !blog.lastname.toLowerCase().includes(searchTermLower) &&
//   //     !`${blog.firstname} ${blog.lastname}`.toLowerCase().includes(searchTermLower)
//   //   );

//   //   this.filteredBlogs = [
//   //     ...matchingBlogs.map(blog => ({ ...blog, highlighted: true })),
//   //     ...nonMatchingBlogs.map(blog => ({ ...blog, highlighted: false }))
//   //   ];
//   // }

  
//   searchBlogs(): void {
//     if (!this.searchTerm.trim()) {
//       // When the search term is empty, reset the filteredBlogs to the sorted allBlogs
//       this.filteredBlogs = [...this.allBlogs].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
//       return;
//     }
  
//     const searchTermLower = this.searchTerm.toLowerCase();
//     const matchingBlogs = this.allBlogs.filter(blog => 
//       blog.firstname.toLowerCase().includes(searchTermLower) ||
//       blog.lastname.toLowerCase().includes(searchTermLower) ||
//       `${blog.firstname} ${blog.lastname}`.toLowerCase().includes(searchTermLower)
//     );
  
//     this.filteredBlogs = [
//       ...matchingBlogs.map(blog => ({ ...blog, highlighted: true }))
//     ];
//   }
  

//   logout(): void {
//     this.cookieService.delete('user_details');
//     this.userDetails = null; 
//     this.router.navigate(['/login']);
//   }

//   navigateToProfile(): void {
//     if (this.userDetails && this.userDetails.userID) {
//       this.router.navigate(['/gallery', this.userDetails.userID]);
//     }
//   }


//   viewblog(blogID:number): void {
//       this.router.navigate(['/blog', blogID]);

//   }

// }



















// import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';
// import { Router, RouterLink, RouterLinkActive } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { CookieService } from 'ngx-cookie-service';

// @Component({
//   selector: 'app-landingpage',
//   standalone: true,
//   imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
//   templateUrl: './landingpage.component.html',
//   styleUrls: ['./landingpage.component.css']
// })
// export class LandingpageComponent implements OnInit {
//   allBlogs: any[] = [];
//   filteredBlogs: any[] = [];
//   searchTerm: string = '';
//   userDetails: any;
//   baseAPI: string = 'http://localhost/blog/blog-api';
//   selectedBlog: any = null;

//   constructor(
//     private ds: DataService,
//     private cookieService: CookieService,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     const userDetailsCookie = this.cookieService.get('user_details');
//     this.userDetails = userDetailsCookie ? JSON.parse(userDetailsCookie) : null;
//     this.loadBlogs();
//   }

//   loadBlogs(): void {
//     this.ds.getRequest('get-all-blogs').subscribe(
//       (response: any) => {
//         this.allBlogs = response.map((blog: any) => ({
//           ...blog,
//           pfp: blog.pfp ? `${this.baseAPI}${blog.pfp}` : 'path/to/default/profile/image.jpg',
//           blogImg: blog.blogImg ? `${this.baseAPI}${blog.blogImg}` : null
//         }));
//         this.filteredBlogs = [...this.allBlogs].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
//         console.log('All blogs:', this.allBlogs);
//       },
//       (error) => {
//         console.error('Error fetching blogs:', error);
//       }
//     );
//   }

//   searchBlogs(): void {
//     if (!this.searchTerm.trim()) {
//       this.filteredBlogs = [...this.allBlogs].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
//       return;
//     }
  
//     const searchTermLower = this.searchTerm.toLowerCase();
//     const matchingBlogs = this.allBlogs.filter(blog => 
//       blog.firstname.toLowerCase().includes(searchTermLower) ||
//       blog.lastname.toLowerCase().includes(searchTermLower) ||
//       `${blog.firstname} ${blog.lastname}`.toLowerCase().includes(searchTermLower)
//     );
  
//     this.filteredBlogs = [
//       ...matchingBlogs.map(blog => ({ ...blog, highlighted: true }))
//     ];
//   }

//   logout(): void {
//     this.cookieService.delete('user_details');
//     this.userDetails = null; 
//     this.router.navigate(['/login']);
//   }

//   navigateToProfile(): void {
//     if (this.userDetails && this.userDetails.userID) {
//       this.router.navigate(['/gallery', this.userDetails.userID]);
//     }
//   }

//   // Opens the modal with the selected blog data
//   openModal(blog: any): void {
//     this.selectedBlog = blog;
//   }

//   // Closes the modal
//   closeModal(): void {
//     this.selectedBlog = null;
//   }
// }


import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  allBlogs: any[] = [];
  filteredBlogs: any[] = [];
  searchTerm: string = '';
  userDetails: any;
  selectedBlog: any = null;
  baseAPI: string = 'http://localhost/blog/blog-api';

  constructor(
    private ds: DataService,
    private cookieService: CookieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userDetailsCookie = this.cookieService.get('user_details');
    this.userDetails = userDetailsCookie ? JSON.parse(userDetailsCookie) : null;
    this.loadBlogs();
  }

  loadBlogs(): void {
    this.ds.getRequest('get-all-blogs').subscribe(
      (response: any) => {
        this.allBlogs = response.map((blog: any) => ({
          ...blog,
          pfp: blog.pfp ? `${this.baseAPI}${blog.pfp}` : 'path/to/default/profile/image.jpg',
          blogImg: blog.blogImg ? `${this.baseAPI}${blog.blogImg}` : null
        }));
        this.filteredBlogs = [...this.allBlogs].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
        console.log('All blogs:', this.allBlogs);
      },
      (error) => {
        console.error('Error fetching blogs:', error);
      }
    );
  }

  searchBlogs(): void {
    if (!this.searchTerm.trim()) {
      this.filteredBlogs = [...this.allBlogs].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
      return;
    }

    const searchTermLower = this.searchTerm.toLowerCase();
    const matchingBlogs = this.allBlogs.filter(blog => 
      blog.firstname.toLowerCase().includes(searchTermLower) ||
      blog.lastname.toLowerCase().includes(searchTermLower) ||
      `${blog.firstname} ${blog.lastname}`.toLowerCase().includes(searchTermLower)
    );

    this.filteredBlogs = [
      ...matchingBlogs.map(blog => ({ ...blog, highlighted: true }))
    ];
  }

  logout(): void {
    this.cookieService.delete('user_details');
    this.userDetails = null; 
    this.router.navigate(['/login']);
  }

  navigateToProfile(): void {
    if (this.userDetails && this.userDetails.userID) {
      this.router.navigate(['/gallery', this.userDetails.userID]);
    }
  }

  openBlogModal(blog: any): void {
    this.selectedBlog = blog;
  }

  closeBlogModal(): void {
    this.selectedBlog = null;
  }
}


