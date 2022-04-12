import { EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  @Input() isDialog = false;
  @Output() deleteItemEvent = new EventEmitter();
  @Output() cancelEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  confirm(event: Event) {
    (document.getElementById('overlay') as HTMLElement).style.display = 'block';
    this.deleteItemEvent.emit(event);
  }

  cancel(event: any) {
    this.cancelEvent.emit(event);
  }
}
