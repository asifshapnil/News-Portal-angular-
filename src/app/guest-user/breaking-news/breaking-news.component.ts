import { Component, OnInit } from '@angular/core';
import { BreakingNewsService } from '../services/breaking-news.service';

@Component({
  selector: 'app-breaking-news',
  templateUrl: './breaking-news.component.html',
  styleUrls: ['./breaking-news.component.css']
})
export class BreakingNewsComponent implements OnInit {

  public posts;

  constructor(private service: BreakingNewsService) { }

  ngOnInit() {
      this.getPosts();
  }

 getPosts() {
    this.service.getBreakingNews().subscribe(res => {
      this.posts = res.data;
    });
 }

}
