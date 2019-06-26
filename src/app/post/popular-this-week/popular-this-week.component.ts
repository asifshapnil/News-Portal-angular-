import { Component, OnInit } from '@angular/core';
import { PopularPostService } from 'src/app/guest-user/services/popular-post.service';

@Component({
  selector: 'app-popular-this-week',
  templateUrl: './popular-this-week.component.html',
  styleUrls: ['./popular-this-week.component.css']
})
export class PopularThisWeekComponent implements OnInit {

  public posts;

  constructor(private service: PopularPostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.service.getPopularPost().subscribe(res => {
        this.posts = res.data;
    });
  }

}
