import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  successMessage = '';
  errorMessage = '';
  submitting = false;

  constructor(private apiService: ApiService) { }

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.submitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.apiService.postInquiry(form.value).subscribe({
      next: () => {
        this.successMessage = 'Inquiry sent successfully!';
        form.resetForm();
        this.submitting = false;
      },
      error: () => {
        this.errorMessage = 'Failed to send inquiry. Please try again later.';
        this.submitting = false;
      }
    });
  }
}