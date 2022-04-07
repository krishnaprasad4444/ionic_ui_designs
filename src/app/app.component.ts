import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Card', url: '/folder/ui-card', icon: 'card' },
    { title: 'Whatsapp', url: '/folder/whatsapp', icon: 'paper-plane' },
    { title: 'Slides', url: '/folder/custom-tab', icon: 'albums' },
    { title: 'Glass', url: '/folder/glass', icon: 'wine' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
