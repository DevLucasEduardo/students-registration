export interface FormCreateFormat {
  firstName: string;
  lastName: string;
  birthDate: Date;
  course: string;
}

export interface FormReadFormat {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: Date;
  course: string;
}

export interface FormUpdateFormat {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: Date;
  course: string;
}

export interface FormDeleteFormat {
  id: number;
}
