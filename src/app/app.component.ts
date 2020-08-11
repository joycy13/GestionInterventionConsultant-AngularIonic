import { Component } from '@angular/core';
import { PdfMakeWrapper} from 'pdfmake-wrapper';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet';

  public generatehelloworld():void{
    const pdf: PdfMakeWrapper = new PdfMakeWrapper();
    pdf.add('helloworld');
    pdf.create().open();
  }
}
