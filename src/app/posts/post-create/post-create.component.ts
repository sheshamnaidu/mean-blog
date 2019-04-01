import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  
  newpost = 'no post ';
  enteredcontent = '';
  enteredtitle = '';
  
  
   onAddPost(form: NgForm){
     if(form.invalid){
       return;
     }
      this.postsService.addPost( form.value.title,form.value.content);
      form.resetForm();
   }

  constructor(public postsService: PostsService) { }

  ngOnInit() {
  }

}
