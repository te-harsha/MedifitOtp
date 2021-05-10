import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  environment
} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenerateOtpService {
  otp: Number;

  constructor(private http: HttpClient) {}

  genOtp() {
    const randomId = Date.now().toString();
    const newId = randomId.slice(7, 13);
    this.otp = parseInt(newId);
    return newId;
  }
  sendotp(email) {
    // console.log(email);

    return this.http.post < {
      error: boolean,
      message: string
    } > (`${environment.baseUrl}/mail/`, email);


  }
}
