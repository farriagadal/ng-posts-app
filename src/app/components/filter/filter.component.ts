import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setFilter } from '../../store/post/post.actions';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  filterName = '';

  constructor(private store: Store) {}

  ngOnInit(): void {}

  onApplyFilter(): void {
    this.store.dispatch(setFilter({ filter: this.filterName }));
  }
}
