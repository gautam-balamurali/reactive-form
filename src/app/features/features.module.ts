import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenderFormComponent } from './render-form/render-form.component';
import { HomeComponent } from './home/home.component';
import { DependencyModulesModule } from '../dependency-modules/dependency-modules.module';

@NgModule({
  declarations: [RenderFormComponent, HomeComponent],
  imports: [CommonModule, DependencyModulesModule],
})
export class FeaturesModule {}
