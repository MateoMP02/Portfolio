import { Component } from '@angular/core';
import { PresentationCardComponent } from "../../components/presentation-card/presentation-card.component";
import { StackComponent } from "../../components/stack/stack.component";
import { AboutMeComponent } from "../../components/about-me/about-me.component";
import { ProjectsCardComponent } from "../../components/projects-card/projects-card.component";
import { ContactComponent } from "../../components/contact/contact.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [PresentationCardComponent, StackComponent, AboutMeComponent, ProjectsCardComponent, ContactComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
