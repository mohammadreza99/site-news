import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { News } from 'src/app/model/news';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  constructor(private title: Title, private route: ActivatedRoute, private dataService: DataService) { }
  hotNews: News[] = [];
  mostViewed: News[] = [];
  news: News[];
  loading: boolean;
  ngOnInit() {
    this.loading = true;
    this.title.setTitle(this.route.snapshot.data['title']);
    this.dataService.getAllNewsList().subscribe((news: News[]) => {
      this.news = news;
    });
    for (const id of this.dataService.mostViewedIds) {
      this.dataService.getNews(id).subscribe((news: News) => {
        this.mostViewed.push(news)
      })
    }
    for (const id of this.dataService.hotNewsIds) {
      this.dataService.getNews(id).subscribe((news: News) => {
        this.hotNews.push(news)
        this.loading = false;
      })
    }

  }
}
