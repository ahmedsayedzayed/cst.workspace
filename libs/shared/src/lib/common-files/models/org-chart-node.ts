export interface IOrgChartNode<T>{
  data: T,
  depth: number,
  height: number,
  id: string,
  parent: IOrgChartNode<T>,
  width: number,
  x: number,
  x0: number,
  y: number,
  y0: number,
  _hierarchyHeight: number,
}
