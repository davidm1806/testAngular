import { Component, OnInit } from '@angular/core';
import {latLng, MapOptions, tileLayer, Map, icon, Marker, marker} from 'leaflet';
import {MapPoint} from '../_model/mapPoint';
import {DEFAULT_LATITUDE, DEFAULT_LONGITUDE} from '../_model/constante';

@Component({
  selector: 'app-open-stree-map',
  templateUrl: './open-stree-map.component.html',
  styleUrls: ['./open-stree-map.component.css']
})
export class OpenStreeMapComponent implements OnInit {
  mapOptions: MapOptions;
  map: Map;
  private mapPoint: MapPoint;
  private lastLayer: any;

  constructor() { }

  ngOnInit() {
    this.initializeDefaultMapPoint();
    this.initializeMapOptions();
  }

  private initializeMapOptions() {
    this.mapOptions = {
      center: latLng(DEFAULT_LATITUDE, DEFAULT_LONGITUDE),
      zoom: 14,
      layers: [
        tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 18,
            attribution: 'Map data © OpenStreetMap contributors'
          })
      ],
    };
  }

  private initializeDefaultMapPoint () {
    this.mapPoint = {
      display_name: 'Hello',
      lat: DEFAULT_LATITUDE,
      lon: DEFAULT_LONGITUDE
    };
  }

  onMapReady(map: Map) {
    this.map = map;
    this.addSampleMarker();
  }

  private addSampleMarker() {
    const marker = new Marker([51.4820845, 0])
      .setIcon(
        icon({
          iconSize: [50, 60],
          iconAnchor: [13, 41],
          iconUrl: 'assets/drapeau-icon.png'
        }));
    marker.addTo(this.map);
  }

  updatePosition(point: MapPoint) {
    this.updateMapPoint(point.lat, point.lon, point.display_name);
    this.creerMarket();
  }

  private updateMapPoint (latitude: number, longitude: number, name?: string) {
    this.mapPoint = {
      lat: latitude,
      lon: longitude,
      display_name: name ? name : this.mapPoint.display_name
    };
  }

  private creerMarket() {
    this.clearMap();
    const mapIcon = this.getDefaultIcon();
    const coordinates = latLng([this.mapPoint.lat, this.mapPoint.lon]);
    this.lastLayer = marker(coordinates).setIcon(mapIcon).addTo(this.map);
    this.map.setView(coordinates, this.map.getZoom());
  }

  private getDefaultIcon() {
    return icon({
      iconSize: [50, 60],
      iconAnchor: [13, 41],
      iconUrl: 'assets/drapeau-icon.png'
    });
  }

  private clearMap() {
    if (this.map.hasLayer(this.lastLayer)) { this.map.removeLayer(this.lastLayer); }
  }
}
