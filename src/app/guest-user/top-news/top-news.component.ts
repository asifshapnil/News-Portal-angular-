import { Component, OnInit } from '@angular/core';
import { PopularThisMonthService } from '../services/popular-this-month.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent implements OnInit {

  public posts;
  constructor(private service: PopularThisMonthService) { }

  ngOnInit() {
    this.getPost();
  }

  getPost() {
      this.service.getPopularThisMonth().subscribe(res => {
          this.posts = res.data;
      });
  }

}
