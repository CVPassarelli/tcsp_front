import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './side-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {
  toggle: boolean = true;
  tootleSubmenu: boolean = false;
  faCircleArrowRight = faCircleArrowRight;

  toggleMenu() {
    this.toggle = !this.toggle;
  }

  toggleSubmenu() {
    this.tootleSubmenu = !this.tootleSubmenu;
  }
}
