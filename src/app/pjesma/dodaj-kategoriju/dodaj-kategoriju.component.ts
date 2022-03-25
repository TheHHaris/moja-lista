import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PlaylistApiService } from 'src/app/playlist-api.service';

@Component({
  selector: 'app-dodaj-kategoriju',
  templateUrl: './dodaj-kategoriju.component.html',
  styleUrls: ['./dodaj-kategoriju.component.css']
})
export class DodajKategorijuComponent implements OnInit {

  listaPjesama$!:Observable<any[]>;
  listaKategorija$!:Observable<any[]>;

  constructor(private service:PlaylistApiService) { }

  @Input() kategorija:any;
  kategorijaId: number = 0;
  kategorijaPjesme: string = "";

  //Učitavanje
  ngOnInit(): void {
    this.kategorijaId = this.kategorija.kategorijaId;
    this.kategorijaPjesme = this.kategorija.kategorijaPjesme;
    this.listaPjesama$ = this.service.getPjesmeList();
    this.listaKategorija$ = this.service.getKategorijaPjesmeList();
  }

  //Funkcija za dodavanje kategorije
  dodajKategoriju(){
    var kategorija = {
      kategorijaPjesme:this.kategorijaPjesme,
    }
    this.service.addKategoriju(kategorija).subscribe(res => {
      var zatvoriModal = document.getElementById('dodaj-kategoriju-zatvori');
      if(zatvoriModal){
        zatvoriModal.click();
      }
      var uspjesnoDodano = document.getElementById('dodaj-kategoriju-alert');
      if(uspjesnoDodano){
        uspjesnoDodano.style.display = 'block';
      }
      setTimeout(function(){
        if(uspjesnoDodano){
          uspjesnoDodano.style.display = 'none'
        }
      }, 5000);
    })
  }

}
