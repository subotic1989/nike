import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(
      window.location.href.substring(window.location.href.indexOf('0/') + 2)
    );
    console.log(window.location.href);
    this.route.url.subscribe((data) => console.log(typeof data));
  }
}
