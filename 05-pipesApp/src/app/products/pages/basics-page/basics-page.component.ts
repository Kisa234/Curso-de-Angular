import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower:string = "renzo"
  public nameUpper:string = "RENZO"
  public fullName:string = "rENZO NiColAS vIlCHeZ aSteTE"

  public customDate: Date = new Date();

}
