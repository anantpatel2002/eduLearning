import { Component, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { HomePageComponent } from "./home-page/home-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
}
