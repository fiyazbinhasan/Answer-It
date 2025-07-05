import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  about = "This app is created using Angular 20 and ASP.NET Core 8.0. To know more about Angular, please go to https://angular.io/ and for ASP.NET Core 8.0, go to https://docs.microsoft.com/aspnet/core/";
}
