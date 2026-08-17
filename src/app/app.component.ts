import { Component } from '@angular/core';
import {
  RuleCMSWidgetComponent,
  RuleCMSWidgetProviderComponent,
} from '@rulecms/widget-angular';
import * as sourceComponents from '@rulecms/source-components-angular';
import { DEMO_PUBLISHED_KEY, DEMO_RULECMS_TOKEN } from './rulecms-config';

@Component({
  selector: 'app-root',
  imports: [RuleCMSWidgetProviderComponent, RuleCMSWidgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'RuleCMS Widget Demo';
  token = DEMO_RULECMS_TOKEN;
  publishedKey = DEMO_PUBLISHED_KEY;
  /**
   * Required since @rulecms/widget-angular does not ship a concrete library.
   * Register the default Angular source components here.
   */
  libraries = { default: sourceComponents };
}
