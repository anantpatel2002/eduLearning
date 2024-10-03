import { Component } from '@angular/core';
import { JumbotronComponent } from "./jumbotron/jumbotron.component";
import { BenefitCardsComponent } from "./benefit-cards/benefit-cards.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [JumbotronComponent,BenefitCardsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
