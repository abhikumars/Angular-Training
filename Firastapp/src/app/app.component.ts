import { Component, ChangeDetectorRef, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Firastapp';
  counter = 0;
  constructor(private ref: ChangeDetectorRef) {
    setInterval(() => {
      this.counter++;
      // require view to be updated

      this.ref.detectChanges();
    }, 1000);
  }


  tagpClicked(data){
    console.log("Parent");
  }
  tagclicked(data){
    console.log("child");
  }
}
