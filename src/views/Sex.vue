<template>
  <div id="sexChart" ref="sexChart"></div>
</template>

<script>
export default {
  name: "sex",
  methods: {
    chartInit() {
      let sexChart = this.$echarts.init(this.$refs.sexChart);

      sexChart.setOption({
        title: {
          show: true,
          text: "性别分布",
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
          data: ["男", "女", "未知"],
          boundaryGap: true,
          axisTick: {
            alignWithLabel: true
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
            data: [140, 40, 50],
            barWidth: 20,
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
            data: [100, 30, 70],
            barWidth: 20,
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
    let sexChartDom = this.$refs.sexChart;
    let sexChart = this.$echarts.init(sexChartDom);

    this.$nextTick(() => {
      this.chartInit();
    });
    sexChart.resize();
    window.addEventListener("resize", () => {
      sexChart.resize();
    });
  }
};
</script>

<style lang="scss" scoped>
#sexChart {
  width: 100vw;
  height: 40vh;
  min-height: 300px;
}
</style>
