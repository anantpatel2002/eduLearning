import { Component } from '@angular/core';
import { JumbotronComponent } from "./jumbotron/jumbotron.component";
import { BenefitCardsComponent } from "./benefit-cards/benefit-cards.component";
import { ExploreComponent } from "./explore/explore.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { AchievementsComponent } from "./achievements/achievements.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [JumbotronComponent, BenefitCardsComponent, ExploreComponent, TestimonialsComponent, AchievementsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
