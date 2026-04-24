import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ENV } from '../env/env';

@Component({
    selector: 'app-contact-me-form',
    templateUrl: './contact-me-form.component.html',
    styleUrls: ['./contact-me-form.component.scss'],
    standalone: false
})
export class ContactMeFormComponent {
  contactForm: FormGroup
  constructor (
    private fb:FormBuilder,
    private snack:MatSnackBar,
    private http:HttpClient
  ){
    this.contactForm = fb.group ({
      email:[null, {validators:Validators.required}],
      name:null,
      msgSubj:null,
      messageText:null
    })
  }
  sendToTelegram() {
    this.http.get(`https://api.telegram.org/bot${ENV.TG_BOT_TOKEN}/sendMessage?chat_id=1005311807&text=`+JSON.stringify(this.contactForm.value))
    .subscribe(()=>{
      this.snack.open('Thank you for your message! \n I will reply you asap','OK',{ panelClass: ['snackbar-success']});
      this.contactForm.reset()
    })
  }
  get email() {return this.contactForm.get('email')}
}
