import { Component, OnInit } from '@angular/core';
import { GuestUserServiceService } from '../services/guest-user-service.service';

@Component({
  selector: 'app-guest-user-home',
  templateUrl: './guest-user-home.component.html',
  styleUrls: ['./guest-user-home.component.css']
})
export class GuestUserHomeComponent implements OnInit {

  posts: any[] = [];

  constructor(
    private service: GuestUserServiceService
  ) { }

  ngOnInit() {
    this.getLatestPostForCover();
  }

  getLatestPostForCover() {
      this.service.getLatestPostForCover().subscribe(res => {
          this.posts = res.data;
      });
  }

}
