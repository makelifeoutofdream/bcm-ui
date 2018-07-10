import { Component, OnInit } from '@angular/core';
import { OwnerSignup } from './shared/owner-signup.model';
import { OwnerSignupService } from './shared/owner-signup.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-owner-signup',
  templateUrl: './owner-signup.component.html',
  styleUrls: ['./owner-signup.component.css'],
  providers: [OwnerSignupService]
})
export class OwnerSignupComponent implements OnInit {

  constructor(private ownerSignupService: OwnerSignupService,
  private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(signUpForm: NgForm) {
    this.ownerSignupService.insertOwnerInfo(signUpForm.value);
    this.resetForm(signUpForm);
    this.toastr.success('Submitted Successfully','Owner Register');
  }

  resetForm(signUpForm?: NgForm) {
    if (signUpForm != null)
      signUpForm.reset;

    this.ownerSignupService.ownerSignup = {
      name: '',
      mobileNo: null,
      password: '',
      confirmPassword: ''

    }
  }
}
