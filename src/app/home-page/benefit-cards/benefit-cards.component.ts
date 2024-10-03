import { Component, input } from '@angular/core';

@Component({
  selector: 'app-benefit-cards',
  standalone: true,
  imports: [],
  templateUrl: './benefit-cards.component.html',
  styleUrl: './benefit-cards.component.css'
})
export class BenefitCardsComponent {
  cardTitle = input.required<string>();
  cardContent = input.required<string>();
}
