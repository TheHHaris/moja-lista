import { DatePipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PlaylistApiService } from 'src/app/playlist-api.service';

@Component({
  selector: 'app-dodaj-uredi-pjesmu',
  templateUrl: './dodaj-uredi-pjesmu.component.html',
  styleUrls: ['./dodaj-uredi-pjesmu.component.css'],
  providers: [DatePipe]
})
export class DodajUrediPjesmuComponent implements OnInit {

  listaPjesama$!:Observable<any[]>;
  listaKategorija$!:Observable<any[]>;
  datum = new Date();
  
  constructor(private service:PlaylistApiService, private datePipe: DatePipe) {
  }
   
  @Input() pjesma:any;
  pjesmaId: number = 0;
  pjesmaName: string = "";
  pjesmaIzvodjac: string = "";
  pjesmaUrl: string = "";
  pjesmaOcjena: number = 0;
  pjesmaFavorit: string = "";
  pjesmaDodana: string = "";
  pjesmaEdit: string = "";
  pjesmaKategorijaId!: number;

  //Učitavanje
  ngOnInit(): void {
    this.pjesmaId = this.pjesma.pjesmaId;
    this.pjesmaName = this.pjesma.pjesmaName;
    this.pjesmaIzvodjac = this.pjesma.pjesmaIzvodjac;
    this.pjesmaUrl = this.pjesma.pjesmaUrl;
    this.pjesmaOcjena = this.pjesma.pjesmaOcjena;
    this.pjesmaFavorit = this.pjesma.pjesmaFavorit;
    this.pjesmaDodana = this.pjesma.pjesmaDodana;
    this.pjesmaEdit = this.pjesma.pjesmaEdit;
    this.pjesmaKategorijaId = this.pjesma.pjesmaKategorijaId;
    this.listaPjesama$ = this.service.getPjesmeList();
    this.listaKategorija$ = this.service.getKategorijaPjesmeList();
  }

  dodajPjesmu(){
    var pjesma = {
      pjesmaName:this.pjesmaName,
      pjesmaIzvodjac:this.pjesmaIzvodjac,
      pjesmaUrl:this.pjesmaUrl,
      pjesmaFavorit:this.pjesmaFavorit,
      pjesmaOcjena:this.pjesmaOcjena,
      pjesmaKategorijaId:this.pjesmaKategorijaId,
      pjesmaDodana:this.datePipe.transform(this.datum, 'yyyy-MM-ddThh:mm:ss'),
      pjesmaEdit:this.datePipe.transform(this.datum, 'yyyy-MM-ddThh:mm:ss'),
    }
    this.service.addPjesmu(pjesma).subscribe(res => {
      var zatvoriModal = document.getElementById('dodaj-uredi-pjesmu-zatvori');
      if(zatvoriModal){
        zatvoriModal.click();
      }
      var uspjesnoDodano = document.getElementById('dodaj-uspjesno-alert');
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

  updatePjesmu(){
    var pjesma = {
      pjesmaId:this.pjesmaId,
      pjesmaName:this.pjesmaName,
      pjesmaIzvodjac:this.pjesmaIzvodjac,
      pjesmaUrl:this.pjesmaUrl,
      pjesmaFavorit:this.pjesmaFavorit,
      pjesmaOcjena:this.pjesmaOcjena,
      pjesmaKategorijaId:this.pjesmaKategorijaId,
      pjesmaDodana:this.pjesmaDodana,
      pjesmaEdit:this.datePipe.transform(this.datum, 'yyyy-MM-ddThh:mm:ss')
    }
    var id:number = this.pjesmaId;
    this.service.updatePjesmu(id, pjesma).subscribe(res => {
      var zatvoriModal = document.getElementById('dodaj-uredi-pjesmu-zatvori');
      if(zatvoriModal){
        zatvoriModal.click();
      }
      var uspjesnoAzurirano = document.getElementById('azuriraj-uspjesno-alert');
      if(uspjesnoAzurirano){
        uspjesnoAzurirano.style.display = 'block';
      }
      setTimeout(function(){
        if(uspjesnoAzurirano){
          uspjesnoAzurirano.style.display = 'none'
        }
      }, 5000);
    })
  }

}
