import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { JsonFormDataModel } from 'src/app/models';

@Component({
  selector: 'app-render-form',
  templateUrl: './render-form.component.html',
  styleUrls: ['./render-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RenderFormComponent implements OnChanges {
  @Input() jsonFormData: JsonFormDataModel[];

  reactiveForm: FormGroup = this._formBuilder.group({});

  constructor(private _formBuilder: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['jsonFormData'].firstChange) {
      this.createForm(this.jsonFormData);
    }
  }

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
  }

  ngOnInit(): void {}
}
