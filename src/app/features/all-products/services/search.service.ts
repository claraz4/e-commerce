import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchSubject = new BehaviorSubject<string>("");
  search$ = this.searchSubject.asObservable();

  setSearch(search: string) {
    this.searchSubject.next(search);
  }

  constructor() { }
}
