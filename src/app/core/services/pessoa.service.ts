import {Injectable} from '@angular/core';
import {Pessoa} from '../models/pessoa.model';
import {environment} from '../../../environments/environment';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  url = environment.apiUrl.concat('pessoas');

  constructor(private http: HttpClient) {
  }

  adicionar(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.url, pessoa)
      .pipe(
        catchError(this.handleError('adicionar', pessoa))
      );
  }

  Atualizar(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(this.url+"/"+pessoa.id, pessoa, httpOptions);
      // .pipe(
      //   catchError(this.handleError('atualizar pessoa', pessoa))
      // );
  }

  deletar(id: any, pessoa: Pessoa): Observable<Pessoa> {
    return this.http.delete<Pessoa>(this.url.concat('/').concat(id), httpOptions)
      .pipe(
        catchError(this.handleError('deletar pessoa', pessoa))
      );
  }

  getTodasPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.url);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }


}
