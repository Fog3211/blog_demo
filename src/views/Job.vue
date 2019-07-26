<template>
  <div id="jobChart" ref="jobChart"></div>
</template>

<script>
export default {
  name: "job",
  methods: {
    chartInit() {
      let jobChart = this.$echarts.init(this.$refs.jobChart);
      jobChart.setOption({
        title: {
          show: true,
          text: "职务情况",
          left: 10,
          top: 5
        },
        grid: {
          x: 45,
          y: 65,
          x2: 35,
          y2: 70,
          borderWidth: 1
        },
        backgroundColor: "#eee",
        legend: {
          data: ["完成人数", "参与人数"],
          x: "center",
          bottom: 5
        },
        xAxis: {
          data: ["医生", "护士", "行政", "研究院", "医技人员", "其他"],
          boundaryGap: true,
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            formatter: function(params) {
              var newParamsName = "";
              var paramsNameNumber = params.length;
              var provideNumber = 2; // 每行能显示的字的个数
              var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
              if (paramsNameNumber > provideNumber) {
                for (var p = 0; p < rowNumber; p++) {
                  var tempStr = "";
                  var start = p * provideNumber;
                  var end = start + provideNumber;
                  if (p == rowNumber - 1) {
                    tempStr = params.substring(start, paramsNameNumber);
                  } else {
                    tempStr = params.substring(start, end) + "\n";
                  }
                  newParamsName += tempStr;
                }
              } else {
                newParamsName = params;
              }
              return newParamsName;
            }
          }
        },
        yAxis: {
          axisLine: {
            //隐藏y轴
            show: false
          },
          name: "人数         ",
          max: 160,
          min: 0,
          interval: 40,
          axisTick: {
            //显示y轴刻度线
            show: false
          },
          splitLine: {
            //隐藏网格线
            show: false
          }
        },
        series: [
          {
            name: "完成人数",
            type: "bar",
            data: [60, 140, 60, 30, 60, 40],
            barGap: "15%", //柱状图距离
            itemStyle: {
              normal: {
                color: "#dbdbdb",
                label: {
                  show: true,
                  position: "top",
                  textStyle: {
                    color: "#535353",
                    fontSize: 12
                  }
                }
              }
            }
          },
          {
            name: "参与人数",
            type: "bar",
            data: [80, 100, 30, 70, 40, 100],
            itemStyle: {
              normal: {
                color: "#a7a7a7",
                label: {
                  show: true,
                  position: "top",
                  textStyle: {
                    color: "#535353",
                    fontSize: 12
                  }
                }
              }
            }
          }
        ]
      });
    }
  },
  mounted() {
    let jobChartDom = this.$refs.jobChart;
    let jobChart = this.$echarts.init(jobChartDom);

    this.$nextTick(() => {
      this.chartInit();
    });
    jobChart.resize();
    window.addEventListener("resize", () => {
      jobChart.resize();
    });
  }
};
</script>

<style lang="scss" scoped>
#jobChart {
  width: 100vw;
  height: 40vh;
  min-height: 300px;
}
</style>
