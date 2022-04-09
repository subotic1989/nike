import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-welcome',
  templateUrl: './banner-welcome.component.html',
  styleUrls: ['./banner-welcome.component.scss'],
})
export class BannerWelcomeComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() backgroundImage: string;

  constructor() {}

  ngOnInit(): void {}
}
