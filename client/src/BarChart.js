import React, { Component } from 'react';
import * as d3 from "d3";
import './BarChart.css';

class BarChart extends Component {
    shouldComponentUpdate(nextProps) {
        return this.props.schools !== nextProps.schools;
    }

    componentDidUpdate() {
        if (this.svg) this.svg.remove();
        this.svg = this.drawChart();
    }

    drawChart() {
        const data = this.props.schools;

        if (data.length > 0) {
            const h = 200;
            const w = 600
            const rectX = (d, i) => w - d.admissionRate * w;
            const rectY = (d, i) => i * ((h / data.length) + 1);
            const textX = (d, i) => w - (d.admissionRate * w) + 20;
            const textY = (d, i) => (i * (h / data.length)) + 25;

            const svg = d3.select("#barchart")
                .append("svg")
                .attr("width", "100%")
                .attr("height", h + data.length)
                .style("margin-left", 100);

            svg.selectAll("rect")
                .data(data)
                .enter()
                .append("rect")
                .attr("x", 0)
                .attr("y", rectY)
                .attr("width", (d, i) => `${Number.parseFloat(d.admissionRate * 100).toPrecision(2)}%`)
                .attr("height", h / data.length)
                .attr("fill", "#ffeeba")

            svg.selectAll("text")
                .data(data)
                .enter()
                .append("text")
                .text((d) => `${d.name} - ${Number.parseFloat(d.admissionRate * 100).toPrecision(4)}%`)
                .attr("x", 20)//(d, i) => `${Number.parseFloat((d.admissionRate * 100) - (d.name.length + 10)).toPrecision(2)}%`)
                .attr("y", textY)

            return svg;
        }
    }

    render() {
        return <div className="border" id="barchart"></div>
    }
}

export default BarChart;

