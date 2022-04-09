import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(private afs: AngularFirestore) {}

  blogs: any[] = [];

  ngOnInit(): void {
    this.subscription = this.afs
      .collection('blog')
      .valueChanges()
      .subscribe((blogs: any) => {
        console.log(blogs);
        this.blogs = blogs;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
