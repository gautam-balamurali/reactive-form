import { Component, OnInit } from '@angular/core';
import { EmitFormValueService } from './core/services/emit-form-value/emit-form-value.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'gerimedica-angular-challenge';

  constructor(public emitFormValueService: EmitFormValueService) {}

  ngOnInit(): void {
    this.emitFormValueService.formValue.subscribe((response) =>
      console.log({ formValueEmittedToApp: response })
    );
  }
}
