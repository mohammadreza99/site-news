import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

import { News } from 'src/app/model/news';
import { Writer } from 'src/app/model/writer';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'news-details-page',
  templateUrl: './news-details.page.html',
  styleUrls: ['./news-details.page.scss']
})
export class NewsDetailsPage implements OnInit {

  constructor(private title: Title, private route: ActivatedRoute, private dataService: DataService) { }
  category: Category;
  writer: Writer;
  news: News;
  mostViewed: News[] = [];
  loading: boolean;
  ngOnInit() {
    this.loading = true;
    this.title.setTitle(this.route.snapshot.data['title']);
    this.route.queryParams.subscribe((params) => {
      this.dataService.getNews(params['id']).subscribe((news: News) => {
        this.news = news;
        this.dataService.getCategory(news.category).subscribe((category: Category) => {
          this.category = category
        });
        this.dataService.getWriter(news.writer).subscribe((writer: Writer) => {
          this.writer = writer;
        });
      });
    })
    for (const id of this.dataService.mostViewedIds) {
      this.dataService.getNews(id).subscribe((news: News) => {
        this.mostViewed.push(news);
        this.loading = false;
      })
    }
  }

  onCommentSubmitted(comment: string) {

  }
}
