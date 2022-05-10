import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { NgModule } from '@angular/core';
import { RatingModule } from 'primeng/rating';
import { ToastModule } from 'primeng/toast';

const modules = [DataViewModule, ButtonModule, RatingModule, ToastModule];

@NgModule({
  exports: [...modules],
})
export class AppPrimengModule {}
