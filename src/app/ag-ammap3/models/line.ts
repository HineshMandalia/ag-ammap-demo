import { Location } from './location';

export class Line {
  id: string;
  arc: number;
  alpha: number;
  latitudes: Array<number>;
  longitudes: Array<number>;
  shadow: {
    id: string;
    alpha: number;
    color: string;
    latitudes: Array<number>;
    longitudes: Array<number>;
  };

  constructor(from: Location, to: Location) {
    this.id = from.title + '_' + to.title;
    this.arc = -0.85;
    this.alpha = 0.3;
    this.latitudes = [from.latitude, to.latitude];
    this.longitudes = [from.longitude, to.longitude];
    this.shadow = {
      id: from.title + '_' + to.title + '_shadow',
      alpha: 0,
      color: '#000000',
      latitudes: [from.latitude, to.latitude],
      longitudes: [from.longitude, to.longitude]
    };
  }
}
