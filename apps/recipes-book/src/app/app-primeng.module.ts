import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { NgModule } from '@angular/core';

const modules = [DataViewModule, ButtonModule];

@NgModule({
  exports: [...modules],
})
export class AppPrimengModule {}
