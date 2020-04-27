import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'main',
  templateUrl: './main.html',
  styleUrls: ['./main.scss']
})

export class Main implements OnInit {
  constructor(private router: Router, private dataService: DataService) { }
  isCollapsed = false;
  searchTerm: string;
  categories;
  ngOnInit() {
    this.dataService.getAllCategories().subscribe((categories: Category[]) => {
      this.categories = categories
    });
  }

  @ViewChild('searchbar') searchbar: ElementRef;
  @ViewChild('searchInput') searchInput: ElementRef;
  @ViewChild('menubar') menubar: ElementRef;
  @ViewChild('navbarContainer') navbarContainer: ElementRef;

  openSerchBar() {
    this.menubar.nativeElement.classList.add('d-none');
    this.menubar.nativeElement.classList.remove('d-block');
    this.searchbar.nativeElement.classList.add('d-flex');
    this.searchbar.nativeElement.classList.remove('d-none');
    this.navbarContainer.nativeElement.classList.add('bg-light');
    this.navbarContainer.nativeElement.classList.remove('bg-dark');
    this.searchInput.nativeElement.focus();
  }

  onCloseSearchBar() {
    this.menubar.nativeElement.classList.add('d-block');
    this.menubar.nativeElement.classList.remove('d-none');
    this.searchbar.nativeElement.classList.add('d-none');
    this.searchbar.nativeElement.classList.remove('d-flex');
    this.navbarContainer.nativeElement.classList.add('bg-dark');
    this.navbarContainer.nativeElement.classList.remove('bg-light');
  }

  search(searchTerm) {
    this.router.navigate(['/search'], { queryParams: { term: searchTerm } });
    this.searchInput.nativeElement.value = '';
    this.onCloseSearchBar();
  }

  onActivate(event) {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20);
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 0);
  }
}
