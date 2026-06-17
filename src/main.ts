import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component'; // Update this line

bootstrapApplication(AppComponent, appConfig) // Update this line
  .catch((err) => console.error(err));