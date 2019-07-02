import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeContact } from './employee-contact';

const BASE_URL = 'http://localhost:3000';
const model = 'employee-contacts';

@Injectable({
  providedIn: 'root'
})
export class EmployeesContactsService {

  constructor(private httpClient: HttpClient) { }

  all(): Observable<EmployeeContact[]> {
    return this.httpClient.get<EmployeeContact[]>(this.getUrl());
  }

  findOne(employeeContactId: number): Observable<EmployeeContact> {
    return this.httpClient.get<EmployeeContact>(this.getUrlById(employeeContactId));
  }

  create(employeeContact: EmployeeContact): Observable<EmployeeContact> {
    return this.httpClient.post<EmployeeContact>(this.getUrl(), employeeContact);
  }

  update(employeeContact: EmployeeContact): Observable<EmployeeContact> {
    return this.httpClient.patch<EmployeeContact>(this.getUrlById(employeeContact.id), employeeContact);
  }

  delete(employeeContactId: number): Observable<EmployeeContact> {
    return this.httpClient.delete<EmployeeContact>(this.getUrlById(employeeContactId));
  }

  private getUrl() {
    return `${BASE_URL}/${model}`;
  }

  private getUrlById(id: number) {
    return `${this.getUrl()}/${id}`;
  }
}
