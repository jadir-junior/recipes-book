import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { NgModule } from '@angular/core';
import { RatingModule } from 'primeng/rating';

const modules = [DataViewModule, ButtonModule, RatingModule];

@NgModule({
  exports: [...modules],
})
export class AppPrimengModule {}
