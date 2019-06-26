import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PostMediaService } from '../services/post-media.service';

@Component({
  selector: 'app-post-media',
  templateUrl: './post-media.component.html',
  styleUrls: ['./post-media.component.css']
})

export class PostMediaComponent implements OnInit {

  constructor(private service: PostMediaService) { }
 
  public posts;

  @ViewChild('videoPlayer', {static: true}) videoplayer: ElementRef;

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.service.getMediaPost().subscribe(res => {
        this.posts = res.data;
    });
  }

  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }
}
