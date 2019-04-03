import { Component, OnInit, OnDestroy } from '@angular/core';
import {Post} from '../post.model'
import { PostsService } from '../posts.service';
import {Subscription} from'rxjs'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {


  // posts = [
  //   {title:"first post", content: "this is the first content"},
  //   {title:"second post", content: "this is the second content"},
  //   {title:"third post", content: "this is the third content"}
  // ]

 posts: Post[] = []
 private postsSub: Subscription;


  constructor(public postsService: PostsService) {
    
   }

  ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[])=>{
       this.posts = posts;
    });
  }

  onDelete(postId: string){
      this.postsService.deletePost(postId);
  }
  
  ngOnDestroy(){
    // this.postsSub.unsubscribe();
  }

}
