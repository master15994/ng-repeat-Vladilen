import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  img =
    'https://icones.pro/wp-content/uploads/2022/07/icone-angulaire-bleu.png';

  constructor() {
    setTimeout(() => {
      this.img =
        'https://icones.pro/wp-content/uploads/2022/07/icone-angulaire-vert.png';
    }, 3000);
  }
}
