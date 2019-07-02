import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'workspace-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() title: string;
  @Input() sidenav: MatSidenav;
  @Input() isAuthenticated: boolean;

  constructor(private router: Router) {}

  logOut() {
    this.router.navigate(['login']);
  }
}
