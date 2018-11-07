import { Line } from './line';
import { Location } from './location';

/*        {
          'svgPath': this.planeSVG,
          'positionOnLine': 0,
          'color': '#000000',
          'alpha': 0.1,
          'animateAlongLine': true,
          'lineId': this.india_london.line.shadow.id,
          'flipDirection': false,
          'loop': true,
          'scale': 0.03,
          'positionScale': 1.3
        }, {
          'svgPath': this.planeSVG,
          'positionOnLine': 0,
          'color': '#900',
          'animateAlongLine': true,
          'lineId': this.india_london.line.id,
          'flipDirection': false,
          'loop': true,
          'scale': 0.03,
          'positionScale': 1.8
        },
        */


export class Animation {
  svgPath: any = 'm2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47';
  positionOnLine: number;
  color: string;
  alpha: number;
  animateAlongLine: boolean;
  lineId: string;
  flipDirection: boolean;
  loop: boolean;
  scale: number;
  positionScale: number;

  constructor(line: Line, isShadow: boolean) {
    this.positionOnLine = 0;

    this.animateAlongLine = true;
    this.flipDirection = false;
    this.loop = true;
    this.scale = 0.03;
    this.positionScale = 1.3;

    if ( isShadow) {
      this.alpha = 0.1;
      this.color = '#000000';
      this.lineId = line.shadow.id;
    } else {
      this.color = '#600';
      this.lineId = line.id;
    }
  }
}
