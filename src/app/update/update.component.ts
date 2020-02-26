import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  profilup: FormGroup;
  // tslint:disable-next-line: variable-name
  constructor( private serviceservise: ServiceService , private _Activatedroute: ActivatedRoute, private router: Router) { }
  index = this._Activatedroute.snapshot.paramMap.get('i');

  ngOnInit() {
    this.profilup = new FormGroup({
      firstName : new FormControl(this.serviceservise.table[this.index].firstName),
      lastName : new FormControl(this.serviceservise.table[this.index].lastName),
      email: new FormControl(this.serviceservise.table[this.index].email),
      phone: new FormControl(this.serviceservise.table[this.index].phone)

    });
  }


  up() {
    this.serviceservise.update(this.index, this.profilup.value);
    this.router.navigateByUrl('/list');
  }

}
