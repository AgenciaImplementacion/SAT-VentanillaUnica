import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  url: string;
  constructor(private httpClient: HttpClient) {
    this.url = environment.apiBaseUrlPrefix
  }
  /**
   * Get Roles
   */
  public GetRoles() {
    return this.httpClient.get<any>(this.url + '/vu/roles')
  }
}
