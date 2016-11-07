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
  styles: [`

.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 2;
}

.modalDialog {
  max-width: 400px;
  position: relative;
  margin: 10% auto;
  padding: 5px 20px 25px;
  background: #fff;
}

.full-width { width: 100%; }

.center { text-align: center; }
`]
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

  log(text){
    console.log(text)
  }

}
