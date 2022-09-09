import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { RenderFormComponent } from './render-form.component';

describe('RenderFormComponent', () => {
  let component: RenderFormComponent;
  let fixture: ComponentFixture<RenderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RenderFormComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form', () => {
    const formData = [
      {
        field: 'name',
        label: 'Name',
        type: 'text',
        hidden: 'false',
        mandatory: true,
      },
      {
        field: 'email',
        label: 'Email',
        type: 'text',
        hidden: 'false',
        mandatory: true,
      },
      {
        field: 'confirm',
        label: 'Checkbox with confirmation',
        type: 'check',
        hidden: 'false',
      },
      {
        field: 'hiddenField',
        label: '',
        type: 'text',
        hidden: 'true',
        mandatory: false,
      },
    ];
    component.createForm(formData);
    expect(component).toBeTruthy();
  });

  it('should call OnSubmit function', () => {
    component.onSubmit();
    expect(component).toBeTruthy();
  });
});
