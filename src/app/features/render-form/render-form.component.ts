import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EmitFormValueService } from 'src/app/core/services/emit-form-value/emit-form-value.service';
import { JsonFormDataModel } from 'src/app/models';

@Component({
  selector: 'app-render-form',
  templateUrl: './render-form.component.html',
  styleUrls: ['./render-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RenderFormComponent implements OnInit {
  @Input() jsonFormData: JsonFormDataModel[];

  reactiveForm: FormGroup = this._formBuilder.group({});

  constructor(
    private _formBuilder: FormBuilder,
    public emitFormValueService: EmitFormValueService
  ) {}

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (!changes['jsonFormData'].firstChange) {
  //     this.createForm(this.jsonFormData);
  //   }
  // }

  /**
   * Creates form
   * @param formData
   */
  createForm(formData: JsonFormDataModel[]) {
    const controls = {};
    formData.forEach((res) => {
      const validationsArray = [];
      if (res.mandatory) {
        validationsArray.push(Validators.required);
      }
      controls[res.field] = new FormControl('', validationsArray);
    });
    this.reactiveForm = new FormGroup(controls);
  }

  /**
   * Determines whether submit on
   */
  onSubmit() {
    console.log(this.reactiveForm.value);
    this.emitFormValueService.submitFormValue(this.reactiveForm.value);
  }

  ngOnInit(): void {
    this.createForm(this.jsonFormData);
  }
}
