import { Injectable } from '@angular/core';
import{OwnerSignup} from './owner-signup.model'

@Injectable({
  providedIn: 'root'
})
export class OwnerSignupService {

  constructor() { }

  ownerSignup : OwnerSignup=new OwnerSignup();

  getOwnerInfo(){
  }

  insertOwnerInfo(ownerInfo:OwnerSignup){
    console.log('ownerInfo.name-->'+ownerInfo.name);
    console.log('ownerInfo.mobileNo-->'+ownerInfo.mobileNo);
    console.log('ownerInfo.password-->'+ownerInfo.password);
    console.log('ownerInfo.confirmPassword-->'+ownerInfo.confirmPassword);
  }

  updateOwnerInfo(ownerInfo:OwnerSignup){
  }

  deleteOwnerInfo(key:String){
  }

  
  
}
