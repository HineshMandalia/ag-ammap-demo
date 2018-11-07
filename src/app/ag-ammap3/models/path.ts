import { Line } from './line';
import { Location } from './location';
import { Animation } from './animation';

export class Path {
  line: Line;
  animation: Animation;
  shadowAnimation: Animation;

  constructor(from: Location, to: Location) {
    this.line =  new Line(from, to);
    this.animation = new Animation(this.line, false);
    this.shadowAnimation = new Animation(this.line, true);
  }
}
