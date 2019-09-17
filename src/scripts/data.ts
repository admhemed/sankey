import {DataInterface} from './data.interface';
export const data: DataInterface = {
  entities: {
    input: [
      {
        name: "Circular Inflow",
        percent: 32,
        subTitle: "",
        resultPercents: [43, 19],
        color: "#84D0CE",
        nameColor: "#1B2663",
        subTitleColor: "#9A9C9B",
        diagonalLinesColor: "#84D0CE"
      },
      {
        name: "Linear Inflow",
        percent: 68,
        subTitle: "non-renewable virgin resource",
        resultPercents: [18, 22],
        color: "#E2E2E2",
        nameColor: "#1B2663",
        subTitleColor: "#9A9C9B",
        diagonalLinesColor: "#9A9C9B"
      }
    ],
    output: [
      {
        name: "Circular Outflow",
        percent: 18,
        subTitle: "",
        color: "#84D0CE",
        nameColor: "#1B2663",
        subTitleColor: "#9A9C9B"
      },
      {
        name: "Linear Outflow",
        percent: 82,
        subTitle: "non-recoverable products and waste streams",
        color: "#E2E2E2",
        nameColor: "#1B2663",
        subTitleColor: "#9A9C9B"
      }
    ],
  },
  phrases: {
    lowerRectTitle: "COMPANY BOUNDARY",
    lowerRectBottom1: "% circular inflow",
    lowerRectBottom2: "% recovery potential",
    lowerRectBottom3: "% actual recovery",
    lowerLineRight: "Landfill Incineration Down-cycling"
  }
};
