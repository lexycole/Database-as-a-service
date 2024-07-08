export type GraphPieProps = {
  data: GraphData[];
};

export type GraphBarData = {
  data: {}[];
  keys: string[];
};

export type GraphData = {
  id: string;
  label?: string;
  value: any;
};
