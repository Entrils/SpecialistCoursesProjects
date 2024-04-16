import Solid from "./Solid.js";

export default class Star extends Solid{
  addRes(){
    return this.resources += 10*this.square;
  }
}