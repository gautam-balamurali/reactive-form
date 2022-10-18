import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

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

  const renderForm = jasmine.createSpyObj('RenderFormComponent', [
    'checkFormFieldValidations',
  ]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run generateFormData function', () => {
    component.generateFormData(formData);
    expect(component).toBeTruthy();
  });

  it('should run selectField function', () => {
    const formField = {
      fieldName: 'confirm',
      label: 'Checkbox with confirmation',
      checked: true,
    };
    component.renderForm = renderForm;
    component.selectField(formField);
    expect(component).toBeTruthy();
  });
});
