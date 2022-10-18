import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmitFormValueService {
  private formValueSource = new BehaviorSubject<object>({});
  formValue = this.formValueSource.asObservable();

  constructor() {}

  submitFormValue(formValue: object) {
    this.formValueSource.next(formValue);
  }
}
