import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() tags: string[];
}
