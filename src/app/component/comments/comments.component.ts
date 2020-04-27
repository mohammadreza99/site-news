import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import { Comment } from 'src/app/model/comment';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(private dataService: DataService) { }
  @Input() commentIds: string[];
  comments = new Array<Comment>();
  @Output() commentSubmitted: EventEmitter<Comment> = new EventEmitter();

  ngOnInit() {
    for (const c of this.commentIds)
      this.dataService.getComment(c).subscribe((comment: Comment) => {
        this.comments.push(comment)
      })
  }
  onSubmitComment(comment) {
    this.commentSubmitted.emit(comment)
  }

  comment = new FormControl('', [
    Validators.required
  ]);
}
