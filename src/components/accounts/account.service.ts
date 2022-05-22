import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    apiUrl: string = 'http://192.168.1.196:8080';
    headers = new HttpHeaders().set('Content-Type', 'application/json');
    constructor(private http: HttpClient) { }
    // Account API starts
    //Post 
    addAccount(data): Observable<any> {
        let API_URL = `${this.apiUrl}/account`;
        return this.http.post(API_URL, data, { headers: this.headers }).pipe(
            catchError(this.error)
        )
    }
    
    //Get 
    getAccounts(): Observable<any> {
        return this.http.get<any[]>(`${this.apiUrl}/account`);
    }
    
    // Handle Errors 
    error(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}