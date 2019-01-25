import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { RepoComment } from 'src/app/models/repo-comment';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html'
})
export class DialogComponent {
  comments: RepoComment[];
  emptyComments: boolean;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any ) {
    this.comments = data.comments;
    this.emptyComments = false;
    if ( this.comments.length === 0) {
      this.emptyComments = true;
    }
  }
}
