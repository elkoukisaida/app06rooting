import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { MatButtonModule,  MatIconModule, MatDatepickerModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

const MaterialComponents = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatDatepickerModule,
  MatDatepickerModule,
  MatCardModule,
  MatRadioModule];

@NgModule ({
  imports: [MaterialComponents],
  exports: [MaterialComponents]


})
export class MaterialModule { }
