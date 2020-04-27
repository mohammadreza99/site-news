import { Component, OnInit, Input } from '@angular/core';

import { News } from '../../model/news';

@Component({
  selector: 'card-type-a',
  templateUrl: './card-type-a.component.html',
  styleUrls: ['./card-type-a.component.scss']
})
export class CardTypeAComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() news: News = new News()
}
