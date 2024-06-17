import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfumesService {

  constructor(private httpClient: HttpClient) { }

  getAllPerfumes() {
    let url = 'https://localhost:7028/Perfume';
    return this.httpClient.get<any>(url);

  }
}
