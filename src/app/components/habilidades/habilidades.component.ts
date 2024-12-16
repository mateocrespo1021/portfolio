import { Component } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss'],
})
export class HabilidadesComponent {
  habilidades = [
    'assets/img/JavaScript',
    'assets/img/TypeScript',
    'assets/img/Angular',
    'assets/img/SCSS',
    'assets/img/Tailwind',
    'assets/img/Bootstrap',
    'assets/img/PHP',
    'assets/img/Laravel',
    'assets/img/Java',
    'assets/img/SpringBoot',
    'assets/img/GitHub',
    'assets/img/DigitalOcean',
  ];

  aprendiendo = ['assets/img/nodejs'];
}
