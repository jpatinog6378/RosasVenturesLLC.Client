import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { GenericPageService } from 'src/app/services/generic.service';

interface ErrorMessage {
  type: string;
  message: string;
}

@Component({
  selector: 'app-contact-form-home',
  templateUrl: './contact-form-home.component.html',
  styleUrls: ['./contact-form-home.component.scss']
})
export class ContactFormHomeComponent implements OnInit {
  contactForm: FormGroup;
  formSubmitted = false;
  errorMessages: { [key: string]: ErrorMessage[] } = {
    name: [
      { type: 'required', message: 'Name is required *' },
    ],
    email: [
      { type: 'required', message: 'Email is required *' },
      { type: 'email', message: 'Enter a valid email' },
    ],
    phone: [
      { type: 'required', message: 'Phone number is required *' },
    ],
    subject: [
      { type: 'required', message: 'Subject is required *' },
    ],
    message: [
      { type: 'required', message: 'Message is required *' },
    ],
  };

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private genericService : GenericPageService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  getErrorMessage(fieldName: string) {
    const field = this.contactForm.get(fieldName);
    if (field && field.errors) {
      const error = Object.keys(field.errors)[0];
      const errorMessage = this.errorMessages[fieldName].find((message) => message.type === error);
      if (errorMessage) {
        return errorMessage.message;
      }
    }
    return '';
  }

  async onSubmit() {
    this.formSubmitted = true;
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      const response: any | HttpResponse<any> = await this.http.post('https://formspree.io/f/mqkvnkdb', formData).toPromise();
  
      if (response.ok) {
        // El formulario se envió correctamente
        this.genericService.showMessage("Great!, The name of book it is updated. Thank you.", "success");
        this.contactForm.reset();
        this.formSubmitted = false;
      } else {
        this.genericService.showAutoCloseMessage("Upsss!", "We have a problem, Sorry. Try aganin please", 2000);
      }
    } else {
      // El formulario no es válido, puedes acceder a los errores de cada campo con this.contactForm.get('nombreDelCampo').errors
    }
  }
  
}
