import { Component, OnInit, Input } from '@angular/core';

import { News } from '../../model/news';

@Component({
  selector: 'card-type-b',
  templateUrl: './card-type-b.component.html',
  styleUrls: ['./card-type-b.component.scss']
})
export class CardTypeBComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() news: News = new News()
}
