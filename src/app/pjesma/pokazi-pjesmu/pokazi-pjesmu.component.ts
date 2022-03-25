import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlaylistApiService } from 'src/app/playlist-api.service';

@Component({
  selector: 'app-pokazi-pjesmu',
  templateUrl: './pokazi-pjesmu.component.html',
  styleUrls: ['./pokazi-pjesmu.component.css']
})
export class PokaziPjesmuComponent implements OnInit {
  listaPjesama$!:Observable<any[]>;
  listaKategorija$!:Observable<any[]>;
  listaKategorija:any=[];
  //Prikazivanje povezanih sa FK
  listaKategorijaMap:Map<number, string> = new Map();


  constructor(private service:PlaylistApiService) { }

  ngOnInit(): void {
    this.listaPjesama$ = this.service.getPjesmeList();
    this.listaKategorija$ = this.service.getKategorijaPjesmeList();
    this.pokaziImeKategorije();
  }

  // Varijable
  modalNaslov:string = '';
  aktivirajModalAddEditPjesmu:boolean = false;
  aktivirajModalDodavanjaKategorije:boolean = false;
  pjesma:any;
  kategorijaPjesme:any;

  //Modal za dodavanje pjesme
  modalDodavanja(){
    this.pjesma = {
      pjesmaId:0,
      pjesmaName:null,
      pjesmaIzvodjac:null,
      pjesmaUrl:null,
      pjesmaOcjena:null,
      pjesmaFavorit:null,
      pjesmaDodana:null,
      pjesmaEdit:null,
      pjesmaKategorijaId:null
    }
    this.modalNaslov = 'Dodavanje pjesme';
    this.aktivirajModalAddEditPjesmu = true;
  }

  //Modal za dodavanje kategorije
  modalDodavanjaKategorije(){
    this.kategorijaPjesme = {
      kategorijaId:0,
      kategorijaName:null
    }
    this.modalNaslov = 'Dodavanje kategorije';
    this.aktivirajModalDodavanjaKategorije = true;
  }

  //Modal za ažuriranje pjesme
  modalUredi(item:any){
    this.pjesma = item;
    this.modalNaslov = 'Ažuriranje pjesme';
    this.aktivirajModalAddEditPjesmu = true;
  }

  //Modal za brisanje pjesme
  obrisi(item:any){
    this.service.deletePjesmu(item.pjesmaId).subscribe(res => {
        var zatvoriModal = document.getElementById('dodaj-uredi-pjesmu-zatvori');
      if(zatvoriModal){
        zatvoriModal.click();
      }

      var uspjesnoObrisano = document.getElementById('brisanje-uspjesno-alert');
      if(uspjesnoObrisano){
        uspjesnoObrisano.style.display = 'block';
      }
      setTimeout(function(){
        if(uspjesnoObrisano){
          uspjesnoObrisano.style.display = 'none'
        }
      }, 5000);
      this.listaPjesama$ = this.service.getPjesmeList();
    })
  }

  //Zatvaranje modala (pjesme & kategorije)
  modalZatvori(){
    this.aktivirajModalAddEditPjesmu = false;
    this.listaPjesama$ = this.service.getPjesmeList();
  }

  modalZatvoriKategorije(){
    this.aktivirajModalDodavanjaKategorije = false;
    this.listaKategorija$ = this.service.getKategorijaPjesmeList();
  }

  //Pretvori ID u String
  pokaziImeKategorije(){
    this.service.getKategorijaPjesmeList().subscribe(data =>{
      this.listaKategorija = data;
      for(let i = 0; i < data.length; i++){
        this.listaKategorijaMap.set(this.listaKategorija[i].id, this.listaKategorija[i].kategorijaPjesme);
      }
    })
  }

}
