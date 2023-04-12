import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { Dog } from 'src/app/interfaces/Dog'
import { Response } from 'src/app/interfaces/Response'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DogService {
	private baseApiUrl = environment.baseApiUrl

  constructor(private http: HttpClient) { }

  getDog(): Observable<Response<Dog>> {
  	return this.http.get<Response<Dog>>(this.baseApiUrl)
  }
}
