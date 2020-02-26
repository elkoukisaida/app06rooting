import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { ServiceService } from './../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  profile: FormGroup ;

  // tslint:disable-next-line: no-shadowed-variable
  constructor( private ServiceService: ServiceService, private router: Router) { }

  ngOnInit() {

  this.profile = new FormGroup({
    firstName: new FormControl('', [Validators.required , Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required ]),
    phone: new FormControl('', [ Validators.required , Validators.minLength(7)]),


  });
  }
  add() {
    this.ServiceService.add(this.profile.value);
    this.router.navigateByUrl('/list');
  }
}

