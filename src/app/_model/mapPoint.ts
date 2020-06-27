export class MapPoint {
  display_name: string;
  lat: number;
  lon: number;

  constructor(name?, lat?, lon?) {
    this.lat = lat;
    this.lon = lon;
    this.display_name = name;
  }
}
