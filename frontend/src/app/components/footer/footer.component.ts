import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  submitting = false;
  success = '';
  error = '';

  constructor(private api: ApiService) {}

  onSubmit(form: NgForm) {
    if (form.invalid) return;
    this.submitting = true;
    this.success = '';
    this.error = '';
    this.api.postInquiry(form.value).subscribe({
      next: () => { this.success = 'Inquiry sent!'; form.resetForm(); this.submitting = false; },
      error: () => { this.error = 'Failed to send inquiry.'; this.submitting = false; }
    });
  }
}