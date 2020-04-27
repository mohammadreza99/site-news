import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { News } from 'src/app/model/news';
import { DataService } from 'src/app/service/data.service';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnChanges {

  constructor(private dataService: DataService) { }

  @Input() news: News;
  category: string;
  ngOnInit() {
    if(this.news!=undefined)
    this.dataService.getCategory(this.news.category).subscribe((category: Category) => {
      this.category = category.name
    });
  }

  ngOnChanges() {
  }

}
