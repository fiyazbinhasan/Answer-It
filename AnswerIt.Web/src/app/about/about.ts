import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  about = "This app is created using Angular and ASP.NET Core. To know more about Angular, please go to https://angular.dev/ and for ASP.NET Core, go to https://docs.microsoft.com/aspnet/core/";
}
