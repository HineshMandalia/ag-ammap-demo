import { Component, OnInit } from '@angular/core';
import { Location } from './models/location';
import { Path } from './models/path';

declare const AmCharts: any;

@Component({
  selector: 'app-ag-ammap3',
  templateUrl: './ag-ammap3.component.html',
  styleUrls: ['./ag-ammap3.component.sass']
})
export class AgAmmap3Component implements OnInit {
  map: any;
  iceland: Location = new Location('Iceland', 64.9631, -19.0208 );
  india: Location = new Location('India', 19.0760, 72.8777);
  toronto: Location = new Location('Toronto', 43.8163, -79.4287);
  paris: Location = new Location('Paris', 48.8567, 2.3510);
  london: Location = new Location('London', 51.5074, -0.1278);

  london_iceland: Path = new Path(this.london, this.iceland);
  india_london: Path = new Path(this.india, this.london);
  constructor() {
    // tslint:disable-next-line:max-line-length
    this.map = AmCharts.makeChart( 'chartdiv', {
      'type': 'map',
      'theme': 'dark',

      'projection': 'winkel3',
      'dataProvider': {
        'map': 'worldLow',

        'lines': [
          this.india_london.line,
          this.india_london.line.shadow,
          this.london_iceland.line,
          this.london_iceland.line.shadow
        ]
         ,
        'images': [
          this.toronto,
          this.iceland,
          this.india,
          this.london,
          this.india_london.animation,
          this.india_london.shadowAnimation,
          this.london_iceland.animation,
          this.london_iceland.shadowAnimation
      ]
      },

      'areasSettings': {
        'unlistedAreasColor': '#8dd9ef'
      },

      'imagesSettings': {
        'color': '#900',
        'rollOverColor': '#900',
        'selectedColor': '#900',
        'pauseDuration': 0.2,
        'animationDuration': 4,
        'adjustAnimationSpeed': false
      },

      'linesSettings': {
        'color': '#900',
        'alpha': 0.4
      },

      'export': {
        'enabled': true
      }

    } );

  }
// 585869
  ngOnInit() {
  }

}
