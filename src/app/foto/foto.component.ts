import { Component,Input } from '@angular/core';

@Component({
    //o moduleid morreu no angular 4
  selector: 'foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent {

  @Input() url;
  @Input() titulo;

}
