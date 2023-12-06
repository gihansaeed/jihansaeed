import { Component } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dhok';
  userData = {
    name: '',
    email: '',
    languages: [],
    experience: '',
    projectDescription: '',
    successMessage:''
  };

  submitForm(form:NgForm) {
    if (form.valid) {
      
      console.log('Form submitted:', this.userData);
    
      form.resetForm();
    } else {
    
      console.log('Form is invalid. Please check the fields.');
    }
    
   
    
  }
  
}
  
