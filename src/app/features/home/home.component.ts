import { Component, OnInit } from '@angular/core';
import { JsonFormDataModel } from 'src/app/models';
import JsonForm from '../../../assets/to-render.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  formData: JsonFormDataModel[];

  constructor() {}

  ngOnInit(): void {
    this.formData = JsonForm;
  }
}
