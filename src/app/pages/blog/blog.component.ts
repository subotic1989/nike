import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Subject, takeUntil } from 'rxjs';

import { BlogInterface } from '../types/blog.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit, OnDestroy {
  blogs: BlogInterface[] = [];
  onDestroy$ = new Subject();

  constructor(private afs: AngularFirestore) {}

  ngOnInit(): void {
    this.initValues();
  }

  initValues() {
    this.afs
      .collection('blog')
      .valueChanges()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((blogs: any[]) => (this.blogs = blogs));
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(null);
    this.onDestroy$.complete();
  }
}
