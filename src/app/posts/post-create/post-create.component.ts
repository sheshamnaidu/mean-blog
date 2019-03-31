import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  
  newpost = 'no post ';
  enteredValue = '';

  
  onAddPost(){
    // console.dir(textinput);
     this.newpost = this.enteredValue;
   }

  constructor() { }

  ngOnInit() {
  }

}
