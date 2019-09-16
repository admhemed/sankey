import {DataInterface} from './data.interface';
export const data: DataInterface = {
  entities: {
    input: [
      {
        name: "Circular Inflow",
        percent: 32,
        subTitle: ""
        resultPercents: [43, 19]
      },
      {
        name: "Linear Inflow",
        percent: 68,
        resultPercents: [18, 22]
      }
    ],
    output: [
      {
        name: "Circular Outflow",
        percent: 18
      },
      {
        name: "Linear Outflow",
        percent: 82
      }
    ],
  }
};
