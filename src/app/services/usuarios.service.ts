import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../interfaces/usuarios";



@Injectable({
  providedIn: "root"
})

export class UsuariosService {

  constructor(private http: HttpClient) {

  }

  getUsers(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users/')
  }

}
