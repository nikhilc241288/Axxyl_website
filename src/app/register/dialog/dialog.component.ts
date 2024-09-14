import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit, AfterViewInit {
  formSubmitted = false;
  fieldPattern = new RegExp(/^[^ ]+(?: +[^ ]+)*$/);
  emailPattern = new RegExp(
    /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
  );
  @ViewChild('focusInputDriver', { static: false })
  focusInputDriver!: ElementRef;
  successMessage: string = '';
  errorMessage: string = '';
  successMessageFlag: boolean = false;
  errorMessageFlag: boolean = false;

  constructor(
    public modal: NgbActiveModal,
    private registerService: RegisterService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  goTo(url: any) {
    window.open(url, '_blank');
  }

  driverregistration(form: NgForm) {
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
      password: value.Dpassword,
      category_id: value.car_type,
      car_number: value.VehicleNumber,
    };

    
    // Hardcoded API URL
    const apiUrl = 'https://axxyl.com/webservices_android';

    const payload = {
      action: 'registration',
      emailId: postBody.emailId,
      password: postBody.password,
      fname: postBody.fname,
      lname: postBody.lname,
      phone: postBody.phone,
      carType: postBody.category_id,
      device: 'Browser',
      deviceToken: ' ',
      usertype: 'E',
      car_number: postBody.car_number,
    };

    this.http.post(apiUrl, payload).subscribe(
      (data: any) => {
        console.log('API Response:', data);
        if (data.status == 'Success') {
          this.successMessageFlag = true;
          this.successMessage = data.msg;
          setTimeout(() => {
            this.successMessageFlag = false;
            this.successMessage = '';
          }, 8000);
        } else if (data.status == 1) {
          this.successMessageFlag = true;
          this.successMessage = 'Driver account created successfully';
          setTimeout(() => {
            this.successMessageFlag = false;
            this.successMessage = '';
            this.modal.close();
          }, 1000);
        } else if (data.status == 0 || data.status == 'Fail') {
          this.errorMessageFlag = true;
          this.errorMessage = data.msg;
          setTimeout(() => {
            this.errorMessageFlag = false;
            this.errorMessage = '';
          }, 8000);
        }
      },
      (error) => {
        console.error('API Error:', error);
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
    this.focusInputDriver.nativeElement.focus();
  }
}
