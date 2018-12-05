import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponentComponent } from './view-component/view-component.component';
import {TestService} from '../test.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ViewComponentComponent],
  exports: [
      ViewComponentComponent
  ],
  // providers:[
  //     TestService,
  // ]
})
export class ViewModule { }
