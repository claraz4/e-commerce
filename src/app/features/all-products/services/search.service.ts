import {Injectable, signal} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  search = signal<string>("");

  setSearch(search: string) {
    this.search.set(search);
  }

  constructor() { }
}
