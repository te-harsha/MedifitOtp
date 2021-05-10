import {
  Component,
  OnInit
} from '@angular/core';
import {
  NgForm
} from '@angular/forms';
import {
  Router
} from '@angular/router';
import {
  GenerateOtpService
} from '../generate-otp.service';

@Component({
  selector: 'app-otp-page',
  templateUrl: './otp-page.component.html',
  styleUrls: ['./otp-page.component.css']
})
export class OtpPageComponent implements OnInit {
  sentotp
  constructor(private otpService: GenerateOtpService,
    private router: Router) {
    this.sentotp = otpService.otp;
  }

  ngOnInit() {
    console.log(this.sentotp);

  }
  otpVerifyfunc(form: NgForm) {
    let givenOtp = form.value.otpVerify
    console.log(givenOtp);
    if (givenOtp === this.sentotp) {
      alert('Login Successfull')
      this.router.navigate([`home`])
    } else {
      alert('Wrong Otp')
    }
  }
}
