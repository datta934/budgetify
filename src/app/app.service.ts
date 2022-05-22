import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    apiUrl: string = 'http://192.168.1.196:8080';
    headers = new HttpHeaders().set('Content-Type', 'application/json');
    constructor(private http: HttpClient) { }
}