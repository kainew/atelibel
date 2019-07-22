import { Component, OnInit } from '@angular/core';
import { DBMeter } from '@ionic-native/db-meter/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [DBMeter]
})
export class HomePage implements OnInit {
  public db_meter;

  constructor(
    private dbMeter: DBMeter
  ) { }

  ngOnInit() {
    let timer = setInterval(() => {
      let subscription = this.dbMeter.start().subscribe(
          data => this.db_meter = data
      );
    }, 100);
  }
}
