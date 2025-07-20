import { Component } from '@angular/core';
import { environment } from '../environment/environment';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {
  private scriptURL = `${environment.weblink}`;
  public message = ''; 
  onSubmit(contactForm: any) {
    const formData = new FormData();
    formData.append('Name', contactForm.value.name);
    formData.append('Email', contactForm.value.email);
    formData.append('Message',contactForm.value.message);

    fetch(this.scriptURL, { method: 'POST', body: formData })
      .then(response => {
        alert('Form submitted successfully!');
        contactForm.resetForm(); 
      })
      .catch(error => console.error('Error!', error.message));
  }
}
