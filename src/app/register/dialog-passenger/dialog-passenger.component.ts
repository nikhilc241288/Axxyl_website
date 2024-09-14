import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterService } from 'src/app/services/register.service';
import { HttpClient } from '@angular/common/http'; // Import HttpClient

@Component({
  selector: 'app-dialog-passenger',
  templateUrl: './dialog-passenger.component.html',
  styleUrls: ['./dialog-passenger.component.css'],
})
export class DialogPassengerComponent implements OnInit, AfterViewInit {
  formSubmitted = false;
  fieldPattern = new RegExp(/^[^ ]+(?: +[^ ]+)*$/);
  emailPattern = new RegExp(
    /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
  );

  @ViewChild('focusInputPassenger', { static: false })
  focusInputPassenger!: ElementRef;
  errorMessage: string = '';
  successMessage: string = '';
  successMessageFlag: boolean = false;
  errorMessageFlag: boolean = false;

  constructor(
    public modal: NgbActiveModal,
    private registerService: RegisterService,
    private http: HttpClient // Inject HttpClient
  ) {}

  ngOnInit(): void {}

  goTo(url: any) {
    window.open(url, '_blank');
  }

  simpleregistration(form: NgForm) {
    this.formSubmitted = true;
    if (form.invalid) {
      return;
    }

    let value = form.value;
    let postBody = {
      fname: value.DFname,
      lname: value.DLname,
      emailId: value.Demail,
      phone: value.Dphone,
      password: value.Dpassword
    };

     // Hardcoded API URL
     const apiUrl = 'https://axxyl.com/webservices_android';

    // Prepare the request payload for the API
    //const apiUrl = 'https://axxyl.com/webservices_android'; // Replace with your API URL
    //const apiUrl = '/webservices_android'; // Use this URL in your HTTP requests
    const payload = {
      action: 'registration',
      emailId: postBody.emailId,
      password: postBody.password,
      fname: postBody.fname,
      lname: postBody.lname,
      phone: postBody.phone,
      device: 'Browser',
      deviceToken: ' ',
      usertype:'U'
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
          this.successMessage = 'Passenger account created successfully';
          setTimeout(() => {
            this.successMessageFlag = false;
            this.successMessage = '';
            this.modal.close();
          }, 1000);
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

  checkPassword(pwd: any, cpwd: any) {
    return pwd !== cpwd;
  }

  ngAfterViewInit() {
    this.focusInputPassenger.nativeElement.focus();
  }
}
