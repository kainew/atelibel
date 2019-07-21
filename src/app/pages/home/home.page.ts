import { Component, OnInit } from '@angular/core';
import { DBMeter } from '@ionic-native/db-meter/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [DBMeter]
})
export class HomePage implements OnInit {
  constructor(
    private dbMeter: DBMeter
  ) { }

  ngOnInit() {
    // Start listening
    let subscription = this.dbMeter.start().subscribe(
      data => console.log(data)
    );
  }
}
