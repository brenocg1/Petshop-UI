import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Pet } from '../Models/pet';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  

  constructor(private http:HttpClient){ }

  //Inserir dados do pet (Informar em que alojamento ele está)
  //Editar dados do pet
  //Delete Pet
  //Consulta de Pet

  getPets():Observable<Pet[]>{
    return this.http.get<Pet[]>(environment.APIUrl + "api/Pet/GetAllPets");
  }

  deletePet(id: number){
    const url = `${environment.APIUrl}api/Pet/DeletePetById?id=${id}`
    return this.http.delete(url);
  }

}
