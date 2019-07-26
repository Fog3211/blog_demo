<template>
  <div id="educationChart" ref="educationChart"></div>
</template>

<script>
export default {
  name: "education",
  methods: {
    chartInit() {
      let educationChart = this.$echarts.init(this.$refs.educationChart);
      educationChart.setOption({
        title: {
          show: true,
          text: "学历情况",
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
          data: ["博士后", "博士", "硕士", "本科", "专科", "其他"],
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
    let educationChartDom = this.$refs.educationChart;
    let educationChart = this.$echarts.init(educationChartDom);

    this.$nextTick(() => {
      this.chartInit();
    });
    educationChart.resize();
    window.addEventListener("resize", () => {
      educationChart.resize();
    });
  }
};
</script>

<style lang="scss" scoped>
#educationChart {
  width: 100vw;
  height: 40vh;
  min-height: 300px;
}
</style>
