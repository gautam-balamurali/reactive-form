export interface JsonFormDataModel {
  field: string;
  label: string;
  type: string;
  hidden: string;
  mandatory?: boolean;
}

export interface ToggleFieldListModel {
  fieldName: string;
  label: string;
  checked: boolean;
}
