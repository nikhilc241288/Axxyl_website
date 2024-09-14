import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { HttpClient } from '@angular/common/http'; // Import HttpClient

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  formSubmitted = false;
  fieldPattern = new RegExp(/^[^ ]+(?: +[^ ]+)*$/);
  emailPattern = new RegExp(
    /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
  );
  successMessage: string = '';
  errorMessage: string = '';
  successMessageFlag: boolean = false;
  errorMessageFlag: boolean = false;
  
    constructor(
      private registerService: RegisterService,
      private http: HttpClient // Inject HttpClient
    ) {}
  
  ngOnInit(): void {}
  sendEmail(form: NgForm) {
    this.formSubmitted = true;
    if (form.invalid) {
      return;
    }

    let value = form.value;
    let postBody = {
      fullname: value.contact_names,
      email: value.contact_email,
      phone: value.contact_phone,
      message: value.contact_message,
    };

     // Prepare the request payload for the API
    const apiUrl = 'https://axxyl.com/webservices_android'; // Replace with your API URL
    //const apiUrl = '/webservices_android'; // Use this URL in your HTTP requests
    const payload = {
      action: 'contactUsEmail',
      fullname: postBody.fullname,
      email: postBody.email,
      phone: postBody.phone,
      message: postBody.message
    };

    // Make the HTTP POST request to your API
    this.http.post(apiUrl, payload).subscribe(
      (data: any) => {
        console.log('API Response:', data); // Log the API response
        if (data.status == 'Success') {
          this.successMessageFlag = true;
          this.successMessage = data.msg;
          setTimeout(() => {
            this.successMessageFlag = false;
            this.successMessage = '';
          }, 8000);
        }
        else if (data.status == 1) {
          this.successMessageFlag = true;
          this.successMessage = 'Email is sent, Axxyl will contact you shortly.';
          setTimeout(() => {
            this.successMessageFlag = false;
            this.successMessage = '';
          }, 5000);
        } 
        else if (data.status == 0) {
          this.errorMessageFlag = true;
          this.errorMessage = data.msg;
          setTimeout(() => {
            this.errorMessageFlag = false;
            this.errorMessage = '';
          }, 8000);
        }
        else if (data.status == 'Fail') {
          this.errorMessageFlag = true;
          this.errorMessage = data.msg;
          setTimeout(() => {
            this.errorMessageFlag = false;
            this.errorMessage = '';
          }, 8000);
        }
      },
      (error) => {
        console.error('API Error:', error); // Log any errors
        this.errorMessageFlag = true;
        this.errorMessage = 'Error occurred. Please try again.';
        setTimeout(() => {
          this.errorMessageFlag = false;
          this.errorMessage = '';
        }, 8000);
      }
    );
  }
}
