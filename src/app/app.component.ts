import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  formGroup: FormGroup;
  errorMessage: string;
  authentification = [
    {username: 'user', password: '123456'},
    {username: 'admin', password: 'admin'}
  ];
  constructor(private formBuilder: FormBuilder, private snarBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  singIn() {
    if (this.formGroup.invalid) {
      this.snarBar.open('le formulaire est incorrect', 'x', {
        panelClass: 'panel-error',
        duration: 5000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      });
      return;
    }
    this.errorMessage = '';
    let goodPassword: boolean;
    let goodUsername: boolean;
    this.authentification.forEach(auth => {
      if(auth.username == this.formGroup.controls.username.value)
        goodUsername = true;
      if(auth.password == this.formGroup.controls.password.value)
        goodPassword = true;
    });
    if (goodPassword && goodUsername) {
      this.errorMessage = '';
      this.snarBar.open('Bravooooo!!!! vous vous êtes identifier avec succes', 'x', {
        panelClass: 'panel-success',
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
    } else {
      if(goodUsername)
        this.errorMessage = 'Votre mot de pass est incorect';
      else
        this.errorMessage = 'ce compte n\'existe pas';
    }
  }



}
