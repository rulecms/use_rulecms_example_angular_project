import { Component, OnInit } from '@angular/core';
import { getConfigurationByKey, initialize } from '@rulecms/client';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-config-viewer',
  templateUrl: './config-viewer.component.html',
  styleUrls: ['./config-viewer.component.css'],
  standalone: false,
})
export class ConfigViewerComponent implements OnInit {
  configKey = 'development-config-03sqva01';
  configData: any = null;
  isLoading = false;
  error: string | null = null;

  ngOnInit(): void {
    this.fetchConfiguration();
  }

  async fetchConfiguration(): Promise<void> {
    this.isLoading = true;
    this.error = null;

    try {
      this.configData = await getConfigurationByKey(this.configKey);
    } catch (err) {
      this.error =
        err instanceof Error ? err.message : 'An unknown error occurred';
      console.error('Error fetching configuration:', err);
    } finally {
      this.isLoading = false;
    }
  }

  async refreshConfiguration(): Promise<void> {
    await this.fetchConfiguration();
  }

  setConfigKey(key: string): void {
    this.configKey = key;
    this.fetchConfiguration();
  }
}

initialize({
  apiKey: environment.rulecmsApiKey,
});
