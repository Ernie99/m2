import {NgModule, Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'dialogmaterial-component',
  template: `
<div class="overlay" *ngIf="showPrompt">
  <md-card class='modalDialog'>
    <md-toolbar>
      {{title}}
    </md-toolbar>
    <md-card-content>
      <br>{{template}}<br><br>
      <md-input class="value"
        [(ngModel)]="value"
        (keyup.enter)="emitValue(value)"
        (keyup.escape)="emitValue(null)"></md-input>
    </md-card-content>
    <md-card-actions class="center">
      <button md-button (click)="emitValue(null)" color="primary">{{cancelText}}</button>
      <button md-raised-button (click)="emitValue(value)" color="primary">{{okText}}</button>
    </md-card-actions>
  </md-card>
</div>


`,
  styleUrls: ['./app.component.css']
})
export class DialogMaterial {
  @Input() value: string;
  @Input() showPrompt: boolean;
  @Input() okText: string;
  @Input() placeholder: string;
  @Input() title: string;
  @Input() template: string;
  @Input() cancelText: string;
  @Output() valueEmitted = new EventEmitter<string>();

}
