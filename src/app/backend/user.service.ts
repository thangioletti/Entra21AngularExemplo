import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public get():Observable<any> {
    const route: string = 'https://localhost:7275/user';
    return this.http.get(route, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGlhZ28xMjMiLCJlbWFpbCI6InRpYWdvIiwicm9sZSI6InVzZXIiLCJuYmYiOjE3MDU3MTAwMDQsImV4cCI6MTcwNTcxMzYwNCwiaWF0IjoxNzA1NzEwMDA0fQ.9n2ZrYAha8An7Gzkp4sZhiuntyTYv0PKRUDhFMDZwZc',
      },
    });
  }
}
