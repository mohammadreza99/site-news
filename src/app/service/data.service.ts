import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

import { News } from '../model/news';
import { Writer } from '../model/writer';
import { Category } from '../model/category';
import { Role } from '../model/role';
import { Comment } from '../model/comment';

@Injectable()

export class DataService {

  constructor(private http: HttpClient) { }

  roles: Role[] = [
    {
      id: '1',
      name: 'ادمین'
    },
    {
      id: '2',
      name: 'نویسنده'
    },
  ]

  hotNewsIds: string[] = ['5c1de1f83af218300c9a0f65', '5c1de24c3af218300c9a0f67', '5c1ddccb3af218300c9a0f5c', '5c1ddfe83af218300c9a0f62', '5c1de29a3af218300c9a0f69', '5c1de3563af218300c9a0f6d'];
  mostViewedIds: string[] = ['5c1de3563af218300c9a0f6d', '5c1de2e23af218300c9a0f6b', '5c1de29a3af218300c9a0f69', '5c1ddf953af218300c9a0f61'];

  // ============================================================================== //
  //                                  News                                          //
  // ============================================================================== //
  getAllNewsList() {
    return this.http.get('http://localhost:3000/api/news');
  }

  getNews(id: string) {
    return this.http.get('http://localhost:3000/api/news/' + id)
  }

  addNewNews(news: News) {
    return this.http.post('http://localhost:3000/api/news', news)
  }

  updateNews(news: News) {
    return this.http.put('http://localhost:3000/api/news', news)
  }

  removeNews(id: string) {
    return this.http.delete('http://localhost:3000/api/news/' + id)
  }
  // ============================================================================== //
  //                                  Writer                                        //
  // ============================================================================== //

  getAllWriters() {
    return this.http.get('http://localhost:3000/api/writers')
  }

  getWriter(id: string) {
    return this.http.get('http://localhost:3000/api/writers/' + id)
  }

  addNewWriter(writer: Writer) {
    return this.http.post('http://localhost:3000/api/writers', writer)
  }

  updateWriter(writer: Writer) {
    return this.http.put('http://localhost:3000/api/writers', writer)
  }

  removeWriter(id: string) {
    return this.http.delete('http://localhost:3000/api/writers/' + id)
  }

  // ============================================================================== //
  //                                  Category                                      //
  // ============================================================================== //

  getAllCategories() {
    return this.http.get('http://localhost:3000/api/categories');
  }

  getCategory(id: string) {
    return this.http.get('http://localhost:3000/api/categories/' + id);
  }

  addNewCategory(category: Category) {
    return this.http.post('http://localhost:3000/api/categories', category);
  }

  updateCategory(category: Category) {
    return this.http.put('http://localhost:3000/api/categories', category);
  }

  removeCategory(id: string) {
    return this.http.delete('http://localhost:3000/api/categories/' + id);
  }

  // ============================================================================== //
  //                                  Role                                          //
  // ============================================================================== //
  getAllRoles(): Role[] {
    return this.roles;
  }

  getRole(id: string): Role {
    return this.roles.find((role: Role) => role.id == id);
  }


  // ============================================================================== //
  //                                  Comments                                      //
  // ============================================================================== //
  getComment(id: string) {
    return this.http.get('http://localhost:3000/api/comments/' + id);
  }

  // ============================================================================== //
  //                                  General                                       //
  // ============================================================================== //
  include(id: any, list: any[]) {
    for (let i = 0; i < list.length; i++) {
      if (list[i] === id)
        return true;
    }
    return false;
  }
}
