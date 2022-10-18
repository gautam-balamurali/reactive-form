import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { DependencyModulesModule } from '../dependency-modules/dependency-modules.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AppLayoutComponent, HeaderComponent, MainComponent],
  imports: [CommonModule, RouterModule, SharedModule, DependencyModulesModule],
})
export class LayoutsModule {}
