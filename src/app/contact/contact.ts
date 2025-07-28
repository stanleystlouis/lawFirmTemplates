import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // <-- Add this import

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule], // <-- Add CommonModule here
  templateUrl: './contact.html'
})
export class Contact {
  contact = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:3000/contact', this.contact)
      .subscribe(() => alert('Thank you for contacting lawFirmTemplates! Your message has been sent.'));
  }
}
