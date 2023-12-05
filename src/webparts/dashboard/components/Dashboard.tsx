import * as React from 'react';
import type { IDashboardProps } from './IDashboardProps';
import { Grid } from '@mui/material';
import { Chart } from "react-google-charts";

export const donutChartData = [
  ["Task", "Hours per Day"],
  ["Resent", 11],
  ["Acknowledge", 2],
  ["Closed", 6],
];

export const pieChartData = [
  ["Task", "Hours per Day"],
  ["Negative Feedback", 5],
  ["Complaint", 2],
];

export const columnChartData = [
  [
    "Element",
    "Density",
    { role: "style" },
    {
      sourceColumn: 0,
      role: "annotation",
      type: "string",
      calc: "stringify",
    },
  ],
  ["group1", 8.94, "#5907EE", null],
  ["group2", 10.49, "#3366CC", null],
  ["group3", 19.3, "#333D47", null],
  ["group4", 5.45, "#D31145", null],
];

export const donutChartDataOptions = {
  pieHole: 0.6,
  is3D: false,
  colors: ['#D31145', '#333D47', '#3366CC'],
  pieSliceText: 'none'
};

export const pieChartOptions = {
  pieSliceText: 'none',
  colors: ['#D31145', '#333D47'],
};

export const columnChartOptions = {
  bar: { groupWidth: "65%" },
  legend: { position: "none" },
};

export default class Dashboard extends React.Component<IDashboardProps, {}> {
  public render(): React.ReactElement<IDashboardProps> {
    const {
    } = this.props;

    const styles = {
      graphContainer: {
        maxWidth: "100%",
        maxHeight: "100%",
        padding: "3% 1% 5% 1%"
      },
      graphCard: {
        maxWidth: "100%",
        maxHeight: "100%",
        overflow: "hidden",
        padding: "10%",
        boxShadow: "0px 4px 16px -1px rgba(0, 0, 0, 0.1)",
        borderRadius: "32px"
      },
      title: {
        fontWeight: "700",
        fontSize: "20px",
        padding: "1%",
        marginTop: "1%"
      },
      titleGraph: {
        display: "flex",
        justifyContent: "center",
        marginRight: "15%",
        fontWeight: "600"
      },
      columnChart: {
        overflow: "hidden",
        paddingLeft: "10%",
        marginRight: "1%",
        marginLeft: "1%",
        boxShadow: "0px 4px 16px -1px rgba(0, 0, 0, 0.1)",
        borderRadius: "32px"
      }
    }

    return (
      <section>
        <Grid container spacing={2} style={{ gap: "5" }}>
          <Grid item xs={12} >
            <div style={styles.title}>Investigation Workflow</div>
            <Grid container>
              <Grid item xs={6} sm={6} style={styles.graphContainer}>
                <div style={styles.graphCard}>
                  <Chart
                    chartType="PieChart"
                    data={pieChartData}
                    options={pieChartOptions}
                    width={"100%"}
                    height={"100%"}
                  />
                  <p style={styles.titleGraph}>Case Type Break Up</p>
                </div>
              </Grid>
              <Grid item xs={6} sm={6} style={styles.graphContainer}>
                <div style={styles.graphCard}>
                  <Chart
                    chartType="PieChart"
                    width="100%"
                    height="100%"
                    data={donutChartData}
                    options={donutChartDataOptions}
                  />
                  <p style={styles.titleGraph}>Case Status Break Up</p>
                </div>
              </Grid>
            </Grid>
            <div style={styles.columnChart}>
              <p style={styles.titleGraph}>Some Other Graph</p>
              <Chart
                chartType="ColumnChart"
                width="100%"
                height="100%"
                data={columnChartData}
                options={columnChartOptions}
              />
            </div>
          </Grid>
        </Grid>
      </section>
    );
  }
}
