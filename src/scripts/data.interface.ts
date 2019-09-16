export interface DataInterface {
  entities: {
    input: Array<{
        name: string;
        percent: number;
        subTitle: string;
        resultPercents: number[]
      }>;
    output: Array<{
        name: string;
        percent: number;
        subTitle: string;
      }>;
  };
}
