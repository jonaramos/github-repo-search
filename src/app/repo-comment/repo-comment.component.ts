import { Component, Input } from '@angular/core';
import { RepoComments } from '../models/repo-comments';

@Component({
  selector: 'app-repo-comment',
  templateUrl: './repo-comment.component.html',
  styleUrls: ['./repo-comment.component.css']
})
export class RepoCommentComponent {

  @Input() keys: RepoComments;
  @Input() empty: boolean;

  constructor() { }
}
