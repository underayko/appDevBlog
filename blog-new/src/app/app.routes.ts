import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CreategalleryComponent } from './gallery/creategallery/creategallery.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewportComponent } from './viewport/viewport.component';
import { ViewblogComponent } from './viewblog/viewblog.component';




export const routes: Routes = [

    { title: "Landingpage", path: '', component: LandingpageComponent }, 
    { title: "Login", path: 'login', component: LoginComponent },
    { title: "Signup", path: 'signup', component: SignupComponent },
    { title: "Gallery", path: 'gallery', component: GalleryComponent },
    { title: "Gallery", path: 'gallery/:userID', component: GalleryComponent },
    { title: "Gallery", path: 'creategallery', component: CreategalleryComponent },
    { title: "Galleries", path: 'galleries', component: GalleriesComponent },
    { title: "Landingpage", path: 'landingpage', component: LandingpageComponent },
    { title: "Profile", path: 'profile', component: ProfileComponent },
    { title: "Profile", path: 'viewport/:userID', component: ViewportComponent },

    

];

