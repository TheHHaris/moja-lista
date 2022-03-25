import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistApiService {

  readonly PlaylistAPIUrl = "https://haris-softray.azurewebsites.net/api";

  constructor(private http:HttpClient) { }

  //Pjesme
  getPjesmeList():Observable<any[]> {
    return this.http.get<any>(this.PlaylistAPIUrl + '/Pjesme');
  }

  addPjesmu(data:any){
    return this.http.post(this.PlaylistAPIUrl + '/Pjesme', data);
  }

  updatePjesmu(id:number|string, data:any){
    return this.http.put(this.PlaylistAPIUrl + `/Pjesme/${id}`, data);
  }

  deletePjesmu(id:number|string){
    return this.http.delete(this.PlaylistAPIUrl + `/Pjesme/${id}`);
  }

  //Kategorija
  getKategorijaPjesmeList():Observable<any[]> {
    return this.http.get<any>(this.PlaylistAPIUrl + '/PjesmaKategorije');
  }

  addKategoriju(data:any){
    return this.http.post(this.PlaylistAPIUrl + '/PjesmaKategorije', data);
  }

  updateKategoriju(id:number|string, data:any){
    return this.http.put(this.PlaylistAPIUrl + `/PjesmaKategorije/${id}`, data);
  }

  deleteKategoriju(id:number|string){
    return this.http.delete(this.PlaylistAPIUrl + `/PjesmaKategorije/${id}`);
  }
}
