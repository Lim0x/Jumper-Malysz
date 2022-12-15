import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Jumper } from '../Jumper';
import { environment } from '../../environments/environment';
import { DataResponse } from '../../api/api';

@Injectable({
  providedIn: 'root',
})
export class JumperService {
  private static readonly baseUrl = `${environment.apiUrl}/jumpers`;

  constructor(private http: HttpClient) {}

  getAllJumpers(): Observable<Jumper[]> {
    return this.http
      .get<DataResponse<Jumper[]>>(JumperService.baseUrl)
      .pipe(map((response) => response.data));
  }

  getJumper(id: string): Observable<Jumper | undefined> {
    const url = `${JumperService.baseUrl}/${id}`;
    return this.http
      .get<DataResponse<Jumper | undefined>>(url)
      .pipe(map((response) => response.data));
  }

  createJumper(jumper: Omit<Jumper, 'id'>): Observable<Jumper> {
    return this.http
      .post<DataResponse<Jumper>>(JumperService.baseUrl, jumper)
      .pipe(map((response) => response.data));
  }

  updateJumper(jumper: Jumper): Observable<Jumper> {
    const url = `${JumperService.baseUrl}/${jumper.id}`;
    return this.http
      .put<DataResponse<Jumper>>(url, jumper)
      .pipe(map((response) => response.data));
  }

  deleteJumper(id: string): Observable<Jumper | undefined> {
    const url = `${JumperService.baseUrl}/${id}`;
    return this.http
      .delete<DataResponse<Jumper | undefined>>(url)
      .pipe(map((response) => response.data));
  }
}
