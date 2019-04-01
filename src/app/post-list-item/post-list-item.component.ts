import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIt: number;
  @Input() postCreatedAt: Date;

  constructor() { }

  ngOnInit() {
  }

  getColor() {
    if(this.postLoveIt > 0){
      return 'green'; 
    } else if (this.postLoveIt < 0) {
      return 'red';
    } else {
      return 'black';
    }
  }

  getLoveIt() {
    if(this.postLoveIt > 0){
      return true; 
    }
  }
  getDontLoveIt() {
    if(this.postLoveIt < 0){
      return true; 
    }
  }

  onLoveIt() {
    this.postLoveIt = 1;
  }

  onDontLoveIt() {
    this.postLoveIt = -1;
  }

}
