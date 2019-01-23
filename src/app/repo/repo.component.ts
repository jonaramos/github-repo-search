import { Component, Input } from '@angular/core';
import { ItemsEntity } from '../models/repo-search-result';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent {
  @Input() keys: ItemsEntity;
  @Input() empty: string;

  constructor() { }
}
