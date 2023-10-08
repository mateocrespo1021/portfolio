import { Component } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss'],
})
export class HabilidadesComponent {
  habilidades = [
    'assets/img/html',
    'assets/img/css',
    'assets/img/scss',
    'assets/img/js',
    'assets/img/angular',
    'assets/img/php',
    'assets/img/java',
    'assets/img/spring',
  ];

  aprendiendo = ['assets/img/nodejs', 'assets/img/sql'];
}
