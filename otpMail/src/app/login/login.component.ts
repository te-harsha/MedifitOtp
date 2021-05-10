import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GenerateOtpService } from '../generate-otp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private otpService:GenerateOtpService,
    private router:Router  ) { }
otpVal = this.otpService.otp
otp

getotpval(){
  this.otp = this.otpService.genOtp();
}
  ngOnInit() {
  }

  getOtp(form: NgForm){
    console.log(form.value);
    this.otpService.sendotp(form.value).subscribe( res =>{
      console.log(res.message);

    })
    this.router.navigate([`otpPage`])
  }

}
