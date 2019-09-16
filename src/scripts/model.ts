import {DataInterface} from './data.interface';

export class Model {
  constructor(public data: DataInterface) {
  }
  public getLeftEntitiesPercents = () => {
    const percents: number[] = [];
    this.data.entities.input.forEach( input => percents.push(input.percent));
    return percents;
  };
  public getRightEntitiesPercents = () => {
    const percents: number[] = [];
    this.data.entities.output.forEach( output => percents.push(output.percent));
    return percents;
  };
  public getResultPercent = (from: number, to: number): number => {
    return this.data.entities.input[from].resultPercents[to];
  };
}
