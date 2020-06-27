import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {MapPoint} from '../_model/mapPoint';
import {AddressLookUpService} from '../_services/address-look-up.service';

@Component({
  selector: 'app-map-point-form',
  templateUrl: './map-point-form.component.html',
  styleUrls: ['./map-point-form.component.css']
})
export class MapPointFormComponent implements OnInit {

  @Output() response = new EventEmitter();
  resultats: MapPoint[] = [];
  show: boolean;
  searchImput: string;
  constructor(private adressLookUp: AddressLookUpService) { }

  ngOnInit() {
  }

  doSearch(position) {
    this.adressLookUp.getPosition(this.searchImput).subscribe(ps => {
      this.resultats = ps;
      console.log(ps);
      //this.show = true;
      const resul = document.getElementById('resul');
      resul.style.width = document.getElementById('form-field').clientWidth + 'px';
    });
  }

  emitChoice(r: MapPoint) {
    this.response.emit(r);
  }
}
