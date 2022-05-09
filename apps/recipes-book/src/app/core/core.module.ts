import { AppPrimengModule } from '../app-primeng.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';

const components = [HeaderComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, AppPrimengModule],
  exports: [components],
})
export class CoreModule {}
