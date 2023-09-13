export interface FormFormat {
  id?: number;
  firstName?: string;
  lastName?: string;
  birthDate?: Date;
  course?: string;
}

export interface FormInputFormat {
  label: string;
  type: string;
  varName: string;
}
