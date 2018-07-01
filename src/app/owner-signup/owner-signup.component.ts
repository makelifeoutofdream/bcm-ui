import { Component, OnInit } from '@angular/core';
import { OwnerSignUp } from '../OwnerSignUp';

@Component({
  selector: 'app-owner-signup',
  templateUrl: './owner-signup.component.html',
  styleUrls: ['./owner-signup.component.css']
})
export class OwnerSignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ownerSignUp : OwnerSignUp ={
    name : undefined,mobileNo:undefined,
    password : undefined,confirmPassword:undefined
  }

  onSubmit(){
    
  }
}
