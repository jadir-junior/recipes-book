import { DataViewModule } from 'primeng/dataview';
import { NgModule } from '@angular/core';

const modules = [DataViewModule];

@NgModule({
  exports: [...modules],
})
export class AppPrimengModule {}
