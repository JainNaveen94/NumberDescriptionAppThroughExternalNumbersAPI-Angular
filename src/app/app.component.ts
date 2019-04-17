import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LastClassApp';
  dataToPrint:string = '';
  inputData: string = '';

  constructor(private data: DataService){}

  getData() {
    this.data.getFact(this.inputData).subscribe((d) => {
      this.dataToPrint = d;
    }, (error) => console.log(error));
  }

}
