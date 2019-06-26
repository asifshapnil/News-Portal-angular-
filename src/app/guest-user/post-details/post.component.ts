import { PostServiceService } from '../services/post-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public id: string;
  public post;
  constructor(private route: ActivatedRoute, private service: PostServiceService ) {
}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getPost();
  }

  getPost() {
    this.service.getPost(this.id).subscribe(res => {
      this.post = res.data;
  });
  }

}
