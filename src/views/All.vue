<template>
  <div class="container">
    <div id="pieChart" ref="pieChart"></div>
    <div class="info">
      <div class="left">
        <p>应参与机构数 <strong>5</strong></p>
      </div>
      <div class="right">
        <p>已参与机构数 <strong>5</strong></p>
      </div>
    </div>
    <div class="num">
      <div class="left">
        <p>参与人数 <strong>37</strong></p>
        <p>应参与人数 <strong>37</strong></p>
      </div>
      <div class="right">
        <p>完成人数 <strong>37</strong></p>
        <p>参与人数 <strong>37</strong></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "all",
  methods: {
    chartInit() {
      let pieChart = this.$echarts.init(this.$refs.pieChart);

      pieChart.setOption({
        title: {
          show: true,
          text: "整体情况",
          left: 10,
          top: 5
        },
        backgroundColor: "#eee",
        series: [
          {
            name: "参与率",
            type: "pie",
            radius: ["30%", "35%"],
            center: ["25%", "50%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "center",
                formatter: "43.1%\n参与率",
                textStyle: {
                  fontSize: 14,
                  color: "#000"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: 431,
                name: "参与人数",
                itemStyle: {
                  normal: {
                    color: "#999"
                  }
                }
              },
              {
                value: 569,
                name: "总人数",
                itemStyle: {
                  normal: {
                    color: "#ddd"
                  }
                }
              }
            ]
          },
          {
            name: "完成率",
            type: "pie",
            radius: ["30%", "35%"],
            center: ["75%", "50%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "center",
                formatter: "89.1%\n完成率",
                textStyle: {
                  fontSize: 14,
                  color: "#000"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: 431,
                name: "参与人数",
                itemStyle: {
                  normal: {
                    color: "#353535"
                  }
                }
              },
              {
                value: 569,
                name: "总人数",
                itemStyle: {
                  normal: {
                    color: "#989898"
                  }
                }
              }
            ]
          }
        ]
      });
    }
  },
  mounted() {
    let pieChartDom = this.$refs.pieChart;
    let pieChart = this.$echarts.init(pieChartDom);

    this.$nextTick(() => {
      this.chartInit();
    });
    pieChart.resize();
    window.addEventListener("resize", () => {
      pieChart.resize();
    });
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  #pieChart {
    width: 100vw;
    height: 40vh;
    min-height: 300px;
  }
  .info,
  .num {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 40vh;
    min-height: 300px;
    display: flex;
    .left {
      position: absolute;
      left: 25%;
      top: 13%;
      transform: translateX(-50%);
      white-space: nowrap;
    }
    .right {
      position: absolute;
      left: 75%;
      top: 13%;
      white-space: nowrap;
      transform: translateX(-50%);
    }
  }
  .num {
    .left,
    .right {
      top: 70%;
    }
  }
}
</style>
