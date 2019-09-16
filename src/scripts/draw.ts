import {Model} from './model';
import * as d3 from 'd3';
import {Chart, Line} from './chart';
import {data} from './data';
import {qs} from './utils';

export const draw = (element: HTMLElement) => {
  const {width, height} = d3.select(element).node().getBoundingClientRect();
  const w = width * 85/100;
  const h = height * 85/100;
  const svg: any = d3.select(element)
    .append("svg")
    .attr("width", w)
    .attr("height", h);
  const model = new Model(data);
  const chart = new Chart(model, w, h);

  svg.selectAll("dot")
    .data([
      ...chart.getLeftInnerPoints(),
      ...chart.getRightInnerPoints(),
      chart.getLeftOuterTopPoint(),
      chart.getLeftOuterBottomPoint(),
      chart.getRightOuterTopPoint(),
      chart.getRightOuterBottomPoint(),
      chart.getLeftOuterMiddlePoint(),
      chart.getRightOuterMiddlePoint()
    ])
    .enter().append("circle")
    .attr("r", 1.5)
    .attr("cx", function (d: number[]) {
      return d[0];
    })
    .attr("cy", function (d: number[]) {
      return d[1];
    });
  svg.selectAll("dot")
    .data(chart.getLeftInnerPointsForLinks())
    .enter().append("circle")
    .attr("r", 2)
    .attr("cx", function (d: number[]) {
      return d[0];
    })
    .attr("cy", function (d: number[]) {
      return d[1];
    });
  const markerWidth = chart.getMarkerWidth();
  svg.append("svg:defs")
    .selectAll("marker")
    .data(chart.getLines())
    .enter().append("svg:marker")
    .attr("id", (d: Line) => `arrow${d.id}`)
    .attr("refX", 0.27) .attr("refY", 0)
    .attr("markerWidth", markerWidth)
    .attr("markerHeight", (d: Line) => `${d.width }`)
    .attr("orient", "auto")
    .attr("markerUnits", "userSpaceOnUse")
    .attr("viewBox", (d: Line) => `0 0 ${markerWidth} 1`)
    .append("svg:path")
    .attr("fill", "rgba(200,0,0,1)")
    .attr("stroke", "none")
    .attr("stroke-width", 0)
    .attr("d", (d: Line) => `M0,-${d.width/2}L${markerWidth},0L0,${d.width/2}`);


  svg.selectAll('path.big-line')
    .data(chart.getLines())
    .enter().append("path")
    .attr("d", (d: Line) => `M${d.line[0]} Q${d.line[1]} ${d.line[2]}`)
    .attr("stroke-width", (d: Line) => d.width)
    .attr("fill", "none")
    .attr("stroke", "rgba(200,0,0,1)")
    .attr("class", "big-line")
    .attr('marker-end', (d: Line) => d.marker? `url(#arrow${d.id})` : null ); //attach the arrow from defs

  svg.selectAll('path.inner-rect')
    .data([chart.getInnerRectPoints()])
    .enter().append("path")
    .attr("d", (d: number[][]) => `M${d[0]} L${d[1]} L${d[2]} L${d[3]} L${d[0]}`)
    .attr("stroke-width", (d: Line) => 1)
    .attr("fill", "none")
    .attr("stroke", "rgba(0,0,0,1)")
    .attr("class", "inner-rect");

  svg.append('defs').append('marker')
    .attr("id", 'arrowhead')
    .attr("refX", 10)
    .attr("refY", 0)
    .attr("markerWidth", 7)
    .attr("markerHeight", 7)
    .attr("orient", "auto")
    .attr("xoverflow", "visible")
    .attr("viewBox", '-0 -5 10 10')
    .append('svg:path')
    .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
    .attr('fill', 'none')
    .style('stroke','darkslateblue');
  const link = d3.linkHorizontal()
    .x(function(d: any) {
      return d.x;
    })
    .y(function(d: any) {
      return d.y;
    });
  svg.selectAll('path.diagonal')
    .data(chart.getDiagonalData())
    .enter().append("path")
    .attr("d", (d: any) => link(d))
    .style("fill", "none")
    .style("stroke", "darkslateblue")
    .style("stroke-width", "1px")
    .attr("class", "diagonal")
    .attr("id", (d: any, i: number) => `diagonal${i}`)
    .attr('marker-end', (d: any) => `url(#arrowhead)` );

  svg.selectAll('text.diagonal')
    .data(chart.getDiagonalData())
    .enter().append("text")
    .attr("dy", -2)
    .attr("dx", -20)
    .append("textPath")
    .attr("xlink:href", (d: any, i: number) => `#diagonal${i}`)
    .style("text-anchor","middle")
    .attr("startOffset", "50%")
    .text((d: any, i: number) => `${d.percent}%`);
};
