import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  careers: any[] = [];
  loading = true;
  error = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCareers().subscribe({
      next: (data) => {
        this.careers = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load careers.';
        this.loading = false;
      }
    });
  }
}