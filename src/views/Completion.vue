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
          text: "完成率排行榜",
          left: 10,
          top: 15
        },
        grid: {
          x: 115,
          y: 65,
          x2: 65,
          y2: 50,
          borderWidth: 1
        },
        backgroundColor: "#eee",
        xAxis: {
          name: "完成率",
          axisLine: {
            //隐藏x轴
            show: false
          },
          axisTick: {
            //显示x轴刻度线
            show: false
          },
          splitLine: {
            //隐藏网格线
            show: false
          },
          min: 0,
          max: 100,
          interval: 25,
          axisLabel: {
            formatter: value => {
              return value === 0 ? value : value + "%";
            }
          },
          nameTextStyle: {
            padding: [25, 0, 0, 5]
          }
        },
        yAxis: {
          data: [
            "四川省",
            "天津市",
            "福建省",
            "广东省",
            "上海市",
            "安徽省",
            "浙江省",
            "江苏省医院医院啦啦",
            "浙江第一人民医院",
            "北京第一人民医院"
          ],
          axisLabel: {
            interval: 0,
            formatter: params => {
              return params.length > 8
                ? params.substring(0, 8) + "..."
                : params;
            }
          },
          boundaryGap: true,
          axisTick: {
            alignWithLabel: true
          }
        },
        series: [
          {
            type: "bar",
            barWidth: 15,
            data: [22, 24, 27, 26, 34, 45, 66, 74, 88, 98],
            itemStyle: {
              normal: {
                color: "#a7a7a7",
                label: {
                  show: true,
                  position: "right",
                  formatter: "{c}%",
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
