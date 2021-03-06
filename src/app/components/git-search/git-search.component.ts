import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../../services/git-search.service';
import { SearchModel } from '../../models/search-model';
import { RepoSearchResult } from '../../models/repo-search-result';
import { RepoComment } from '../../models/repo-comment';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {
  dialogRef: MatDialogRef<DialogComponent>;
  searchQuery: string;
  displayQuery: string;
  title: string;
  searchResults: RepoSearchResult;

  model = new SearchModel('', '', '', null, null, '');
  modelKeys = Object.keys(this.model);

  constructor(private gitSearchService: GitSearchService, private dialog: MatDialog) {
    this.title = 'GitHub Repo Search';
  }

  ngOnInit() {
  }

  getRepos(): void {
    this.gitSearchService.getRepos(this.searchQuery).then( response => {
      this.searchResults = response;
    }, error => {
      alert(`Error: ${error.statusText}`);
    });
  }

  async getComments(commentsUrl: string): Promise<RepoComment[]> {
    commentsUrl = commentsUrl.substring(0, commentsUrl.lastIndexOf('comments') + 8);
    try {
      return await this.gitSearchService.getRepoComments(commentsUrl);
    } catch {
      return [];
    }
  }

  sendQuery(): void {
    this.searchResults = null;
    const search: string = this.model.q;
    let params = '';
    this.searchQuery = search;

    // generate query params from model keys
    if (params) {
      this.modelKeys.forEach(key => {
        if (key === 'q') {
          return false;
        }
        if (this.model[key]) {
          params += `${key}:${this.model[key]}`;
        }
      });
      this.searchQuery = `${search}+${params}`;
    }
    this.displayQuery = this.searchQuery;
    this.getRepos();
  }

  async openDialog(commentsUrl: string): Promise<void> {
    const comments = await this.getComments(commentsUrl);
    this.dialogRef = this.dialog.open(DialogComponent, {
      data: {
        comments: comments
      }
    });
  }

}
