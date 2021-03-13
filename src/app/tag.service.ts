import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) { }

  getTags() {
    return this.http.get<string[]>(`${environment.apiBaseUrl}/api/v1/tags`);
  }
}
