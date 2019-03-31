import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  
  newpost = 'no post ';
  enteredcontent = '';
  enteredtitle = '';
   @Output() postcreated = new EventEmitter(); 

  
  onAddPost(){
    // console.dir(textinput);
    //  this.newpost = this.enteredcontent;
    const post = {
      title: this.enteredtitle,
       content: this.enteredcontent
      };
      this.postcreated.emit(post)
   }

  constructor() { }

  ngOnInit() {
  }

}
