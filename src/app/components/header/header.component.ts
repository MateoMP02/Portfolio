import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');

    this.translate.get('TECNOLOGIAS').subscribe((res) => {
    console.log('Traducción TECNOLOGIAS:', res);
  });
  }

  cambiarIdioma(event: Event) {
    const idioma = (event.target as HTMLSelectElement).value;
    this.translate.use(idioma);
  }
}
