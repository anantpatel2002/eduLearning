import { Component } from '@angular/core';
import { TestimonialsComponent } from "../home-page/testimonials/testimonials.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-course-detail-page',
  standalone: true,
  imports: [TestimonialsComponent,RouterLink],
  templateUrl: './course-detail-page.component.html',
  styleUrl: './course-detail-page.component.css'
})
export class CourseDetailPageComponent {

}
