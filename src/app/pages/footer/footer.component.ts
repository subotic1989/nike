import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  toHero() {
    console.log(document.getElementById('test'));
    document.getElementById('test')?.scrollIntoView({ behavior: 'smooth' });
  }
}
