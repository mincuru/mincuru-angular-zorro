import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [NzLayoutModule, RouterLink, RouterOutlet],
})
export class AppComponent {
  isCollapsed = false;
  title = 'mincuru-angular-zorro';
}
