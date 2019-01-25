import { Component, Input } from '@angular/core';
import { RepoComment } from '../../models/repo-comment';

@Component({
  selector: 'app-repo-comment',
  templateUrl: './repo-comment.component.html',
  styleUrls: ['./repo-comment.component.css']
})
export class RepoCommentComponent {
  @Input() comment: RepoComment;
  constructor() { }
}
