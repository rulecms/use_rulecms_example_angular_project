import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConfigViewerComponent } from './config-viewer.component';

const routes: Routes = [{ path: '', component: ConfigViewerComponent }];

@NgModule({
  declarations: [ConfigViewerComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ConfigViewerModule {}
