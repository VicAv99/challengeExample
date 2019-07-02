export interface EmployeeContact {
  id: number;
  name: string;
  phone: string;
  address: string;
  email: string;
}

export const emptyEmployeeContact: EmployeeContact = {
  id: null,
  name: '',
  phone: '',
  address: '',
  email: ''
}
