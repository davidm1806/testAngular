import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MapPoint} from '../_model/mapPoint';
import {environment} from '../../environments/environment';
import {DEFAULT_VIEW_BOX} from '../_model/constante';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddressLookUpService {
  constructor(private http: HttpClient) { }

 /* getPosition(req?: any): Observable<MapPoint[]> {
    const url = `${environment.urlNominatin}/search.php?format=json&q=${req}&${DEFAULT_VIEW_BOX}&bounded=1`;

   // const url = `${environment.urlNominatin}/search.php?q=${req}&format=json&polygon_geojson=1&viewbox=`;
    return this.http
      .get(url).pipe(
        map((data: any[]) => data.map((item: any) => new MapPoint(
          item.lat,
          item.lon,
          item.name
          ))
        )
      );
  }*/
  getPosition(req?: any): Observable<any[]> {
   // const url = `${environment.urlNominatin}/search?format=json&q=&${DEFAULT_VIEW_BOX}&bounded=1`;
    const url = `${environment.urlNominatin}/search.php?format=json&q=${req}&${DEFAULT_VIEW_BOX}&bounded=`;
    return this.http.get<any>(url);
  }
}
