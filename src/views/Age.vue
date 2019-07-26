<template>
  <div id="ageChart" ref="ageChart"></div>
</template>

<script>
export default {
  name: "age",
  methods: {
    chartInit() {
      let ageChart = this.$echarts.init(this.$refs.ageChart);
      ageChart.setOption({
        title: {
          show: true,
          text: "年龄分布",
          left: 10,
          top: 5
        },
        backgroundColor: "#eee",
        legend: {
          data: ["完成人数", "参与人数"],
          x: "center",
          bottom: 5
        },
        xAxis: {
          data: ["18-30", "30-40", "40-50", "50-60", "60以上", "未知"],
          name: "岁",
          boundaryGap: true,
          axisTick: {
            alignWithLabel: true
          },
          nameTextStyle: {
            padding: [28, 0, 0]
          },
          nameGap: -4
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
    let ageChartDom = this.$refs.ageChart;
    let ageChart = this.$echarts.init(ageChartDom);

    this.$nextTick(() => {
      this.chartInit();
    });
    ageChart.resize();
    window.addEventListener("resize", () => {
      ageChart.resize();
    });
  }
};
</script>

<style lang="scss" scoped>
#ageChart {
  width: 100vw;
  height: 40vh;
  min-height: 300px;
}
</style>
