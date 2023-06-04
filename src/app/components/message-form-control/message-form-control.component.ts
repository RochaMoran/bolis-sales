import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-form-control',
  templateUrl: './message-form-control.component.html',
  styleUrls: ['./message-form-control.component.scss'],
})
export class MessageFormControlComponent  implements OnInit {
  @Input () message: string = '';
  constructor() { }

  ngOnInit() {}

}
