import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/app/model/news';

@Component({
  selector: 'card-type-c',
  templateUrl: './card-type-c.component.html',
  styleUrls: ['./card-type-c.component.scss']
})
export class CardTypeCComponent implements OnInit {

  constructor() { }
  @Input() news: News = new News();
  ngOnInit() {
  }

}
