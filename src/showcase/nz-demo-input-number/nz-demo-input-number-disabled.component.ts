import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nz-demo-input-number-disabled',
  template: `
    <nz-input-number [(ngModel)]="demoValue" [nzMin]="1" [nzMax]="10" [nzStep]="1" [nzDisabled]="isDisabled"></nz-input-number>
    <div style="margin-top:20px;">
      <button nz-button [nzType]="'primary'" (click)="toggleDisabled()">
        <span>Toggle Disabled</span>
      </button>
    </div>`,

  styles: []
})
export class NzDemoInputNumberDisabledComponent implements OnInit {
  demoValue = 3;
  isDisabled = false;
  toggleDisabled = () => {
    this.isDisabled = !this.isDisabled;
  }

  constructor() {
  }

  ngOnInit() {
  }
}

