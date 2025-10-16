import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: any[] = [];
  loading = true;
  error = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getServices().subscribe({
      next: (data) => {
        this.services = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load services.';
        this.loading = false;
      }
    });
  }
}