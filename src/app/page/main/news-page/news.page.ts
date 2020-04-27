import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { News } from 'src/app/model/news';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'news-page',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss']
})
export class NewsPage implements OnInit {


  constructor(private title: Title, private route: ActivatedRoute, private dataService: DataService) { }
  category: string;
  news: News[] = [];
  mostViewed: News[] = [];
  loading: boolean;
  ngOnInit() {
    this.loading = true;
    this.route.queryParams.subscribe((params) => {
      this.dataService.getCategory(params['category']).subscribe((category: Category) => {
        this.news = []
        this.category = category.name;

        this.dataService.getAllNewsList().subscribe((news: News[]) => {
          console.log(news);
          for (let i = 0; i < news.length; i++)
            if (news[i].category == category.id)
              this.news[i] = news[i];
          this.loading = false;
        });
      });
    });
    this.title.setTitle(this.route.snapshot.data['title']);
    for (const id of this.dataService.mostViewedIds) {
      this.dataService.getNews(id).subscribe((news: News) => {
        this.mostViewed.push(news)
      })
    }

  }
}
