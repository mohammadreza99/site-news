import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/model/news';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'search-page',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss']
})
export class SearchPage implements OnInit {
  constructor(private title: Title, private route: ActivatedRoute, private dataService: DataService) { }
  searchTerm: string;
  foundedNews: News[] = [];
  loading: boolean;
  ngOnInit() {
    this.loading = true;
    this.title.setTitle(this.route.snapshot.data['title']);
    this.route.queryParams.subscribe((params) => {
      this.searchTerm = params['term'];
      this.dataService.getAllNewsList().subscribe((news: News[]) => {
        for (const n of news) {
          if (n.title.includes(this.searchTerm))
            this.foundedNews.push(n)
        }
        this.loading = false;
      })
    })
  }
}
