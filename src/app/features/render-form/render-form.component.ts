import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToggleFieldListModel, JsonFormDataModel } from 'src/app/models';

@Component({
  selector: 'app-render-form',
  templateUrl: './render-form.component.html',
  styleUrls: ['./render-form.component.scss'],
})
export class RenderFormComponent implements OnInit {
  @Input() jsonFormData: JsonFormDataModel[];
  @Input() visibleFields: ToggleFieldListModel[];

  reactiveForm: FormGroup = this._formBuilder.group({});
  mandatoryFields: string[] = [];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm(this.jsonFormData);
  }

  /**
   * Creates form
   * @param formData
   */
  createForm(formData: JsonFormDataModel[]) {
    const controls = {};
    formData?.forEach((res) => {
      const validationsArray = [];
      if (res.mandatory) {
        validationsArray.push(Validators.required);
        this.mandatoryFields.push(res.field);
      }
      if (this.isFormFieldVisible(res))
        controls[res.field] = new FormControl('', validationsArray);
    });
    this.reactiveForm = new FormGroup(controls);
  }

  /**
   * Determines whether form field is visible
   * @param formField
   * @returns boolean
   */
  isFormFieldVisible(formField: JsonFormDataModel) {
    const currentField = this.visibleFields?.find(
      (visibleField) => visibleField.fieldName == formField.field
    );
    return currentField?.checked;
  }

  /**
   * Checks form field validations
   * @param formField
   */
  checkFormFieldValidations(formField: ToggleFieldListModel) {
    const formControl = this.jsonFormData?.find(
      (obj) => obj.field == formField.fieldName
    );
    if (!formField.checked) {
      this.reactiveForm.removeControl(formControl?.field);
    } else if (
      this.mandatoryFields.includes(formControl?.field) &&
      formField.checked
    ) {
      this.reactiveForm.addControl(
        formControl?.field,
        new FormControl('', Validators.required)
      );
    } else {
      this.reactiveForm.addControl(formControl?.field, new FormControl('', []));
    }
  }

  /**
   * Determines whether submit on
   */
  onSubmit() {
    console.log(this.reactiveForm.value);
  }
}
