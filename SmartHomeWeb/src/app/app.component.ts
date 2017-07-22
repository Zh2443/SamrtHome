import { Component } from '@angular/core';
import { MdCheckboxModule, MdButton, MdInputContainer } from '@angular/material';


@Component({
  selector: 'my-app',
  template: `<div class="container-fluid">
  <div class="row">
      <div class="col-md-3">.col-md-3</div>
  <div class="col-md-3">.col-md-3</div>
     
     <div>
      <md-input-container>
        <label>Title</label>
        <input ng-model="user.title">
      </md-input-container>

      <md-input-container>
        <label>Email</label>
        <input ng-model="user.email" type="email">
      </md-input-container>
    </div>
  </div>
</div>`,
})
export class AppComponent { name = 'Angular'; }
