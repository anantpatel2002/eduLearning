  import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { JumbotronComponent } from "../home-page/jumbotron/jumbotron.component";

import { CourseCardComponent } from "../course-card/course-card.component";
import { PageNavComponent } from "../page-nav/page-nav.component";

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, JumbotronComponent, CourseCardComponent, PageNavComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

}
