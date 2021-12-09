import type { OnInit } from '@angular/core'
import { Component } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar' // eslint-disable-line @typescript-eslint/consistent-type-imports
import type { Rsvp } from '../models/rsvp'
import { RsvpService } from '../rsvp.service' // eslint-disable-line @typescript-eslint/consistent-type-imports

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {
  name = new FormControl('', { updateOn: 'blur', validators: [Validators.required] });
  email = new FormControl('', { updateOn: 'blur', validators: [Validators.email] });
  phone = new FormControl('', { updateOn: 'blur', validators: [Validators.required, Validators.pattern('^\\d*$')] });
  attendies = new FormControl('', { updateOn: 'change', validators: [Validators.required, Validators.pattern('^\\d*$')] });

  // eslint-disable-next-line no-useless-constructor
  constructor (
    private rsvpService: RsvpService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit (): void {
    this.phone.valueChanges.subscribe({
      next: value => this.onPhoneValueChanged(value, this.phone)
    })
  }

  previousPhoneValue = ''
  onPhoneValueChanged (value: string, phoneControl: FormControl) {
    if (phoneControl.invalid && this.previousPhoneValue !== value) {
      this.previousPhoneValue = value
      phoneControl.setValue(this.formatPhoneNumber(value))
    }

    this.previousPhoneValue = value
  }

  formatPhoneNumber (phoneNumber: string): string {
    return phoneNumber
      .replace(' ', '')
      .replace('(', '')
      .replace(')', '')
      .replace('-', '')
  }

  getEmailErrorMessage () {
    if (this.email.hasError('required')) {
      return 'Email is required.'
    }

    return this.email.hasError('email') ? 'Not a valid email' : ''
  }

  getPhoneErrorMessage () {
    if (this.phone.hasError('required')) {
      return 'Phone number is required'
    }

    return this.phone.hasError('pattern') ? 'Not a valid phone number' : ''
  }

  getAttendiesErrorMessage () {
    if (this.attendies.hasError('required')) {
      return 'Number of attendies is required'
    }

    return this.attendies.hasError('pattern') ? 'Not a valid number' : ''
  }

  isSubmitEnabled (): boolean {
    return this.name.valid && this.email.valid && this.phone.valid && this.attendies.valid
  }

  onSubmitClick () {
    this.rsvpService.postRsvp({
      fullName: this.name.value,
      email: this.email.value,
      phone: this.phone.value,
      attendies: Number.parseInt(this.attendies.value),
      createdDate: new Date(Date.now()).toISOString()
    } as Rsvp).subscribe({
      next: () => {
        this.snackBar.open('RSVP Saved')
        this.name.reset('')
        this.email.reset('')
        this.phone.reset('')
        this.attendies.reset('')
      },
      error: err => {
        this.snackBar.open('SERVER ERROR: RSVP failed to save.')
        console.log('failed to POST rsvp.', err)
      }
    })
  }
}
