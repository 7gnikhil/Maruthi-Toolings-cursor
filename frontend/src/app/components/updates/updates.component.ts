import { Component } from '@angular/core';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent {
  updates = [
    { date: '2024-04-01', content: 'New product line launched!' },
    { date: '2024-03-15', content: 'Updated website with new features.' },
    { date: '2024-02-28', content: 'Participated in Industrial Expo 2024.' }
  ];
}