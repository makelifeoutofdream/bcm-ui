import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule,MatInputModule,MatButtonModule } from '@angular/material';
import { OwnerSignIn } from '../ownerSignIn';

@Component({
  selector: 'app-owner-signin',
  templateUrl: './owner-signin.component.html',
  styleUrls: ['./owner-signin.component.css']
})
export class OwnerSigninComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ownerSignIn : OwnerSignIn={
    mobileNo : undefined,
    password : undefined
  };
onSubmit(){
  console.log("onsubmit called")
}


}
