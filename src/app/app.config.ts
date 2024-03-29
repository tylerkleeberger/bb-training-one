import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CanActivateAuthGuard } from './core/guards/authGuard';
import { AuthComponent } from './pages/auth/auth.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), CanActivateAuthGuard, AuthComponent],
};
