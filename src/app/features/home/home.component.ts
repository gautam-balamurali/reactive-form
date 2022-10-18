import { Component, OnInit, ViewChild } from '@angular/core';
import { ToggleFieldListModel, JsonFormDataModel } from 'src/app/models';
import JsonForm from '../../../assets/to-render.json';
import { RenderFormComponent } from '../render-form/render-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  formData: JsonFormDataModel[];
  fieldList: ToggleFieldListModel[] = [];

  @ViewChild('renderForm') renderForm: RenderFormComponent;

  constructor() {}

  ngOnInit(): void {
    this.generateFormData(JsonForm);
  }

  /**
   * Generates form data
   * @param jsonFormDataDetails 
   */
  generateFormData(jsonFormDataDetails: JsonFormDataModel[]) {
    jsonFormDataDetails?.forEach((obj) => {
      if (obj.label === '') {
        obj.label = 'Hidden Field';
        this.fieldList.push({
          fieldName: obj.field,
          label: obj.label,
          checked: false,
        });
      } else {
        this.fieldList.push({
          fieldName: obj.field,
          label: obj.label,
          checked: true,
        });
      }
    });
    this.formData = jsonFormDataDetails;
  }

  /**
   * Selects field
   * @param field 
   */
  selectField(field: ToggleFieldListModel) {
    field.checked = !field.checked;
    this.renderForm.checkFormFieldValidations(field);
  }
}
