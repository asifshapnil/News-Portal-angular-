import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostServiceService } from 'src/app/guest-user/services/post-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public id: string;
  public post;
  @ViewChild('videoPlayer', {static: true}) videoplayer: ElementRef;

  constructor(private router: Router, private route: ActivatedRoute, private service: PostServiceService ) {
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.ngOnInit(); // reset and set based on new parameter this time
  });

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

  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }

}
