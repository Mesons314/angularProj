import { Component } from '@angular/core';
import { HeaderComponent } from './core/components/layout/header/header.component';
import { FooterComponent } from './core/components/layout/footer/footer.component';
import { LandingComponent } from './core/components/layout/landing/landing.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  appName:string = 'UserProject';
  myname:string = '';
}
