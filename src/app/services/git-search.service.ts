import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RepoSearchResult } from '../models/repo-search-result';
import { RepoComment } from '../models/repo-comment';
const gitHubApiRepoUrl = 'https://api.github.com/search/repositories?q=';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {
  cachedSearches: Array<{
    [query: string]: RepoSearchResult
  }> = [];

  constructor(private http: HttpClient) {
  }

  public getRepos(query: string): Promise<RepoSearchResult> {
    return new Promise<RepoSearchResult>( (resolve, reject) => {
      if (this.cachedSearches[query]) {
        resolve(this.cachedSearches[query]);
      } else {
        this.http.get(gitHubApiRepoUrl + query)
        .toPromise().then(
          response => resolve(response as RepoSearchResult)
        , error => reject(error));
      }
    });
  }

  public async getRepos2(query: string): Promise<RepoSearchResult> {
    return await this.http.get(gitHubApiRepoUrl + query).toPromise() as RepoSearchResult;
  }

  public async getRepoComments(commentsUrl: string): Promise<RepoComment[]> {
    return await this.http.get(commentsUrl).toPromise() as RepoComment[];
  }

}
