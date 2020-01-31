<template>
  <div class="chart-container">
    <chart height="100%" width="100%" :chart-data="chartData" />
  </div>
</template>

<script>
import Chart from '@/components/Charts/Keyboard'

export default {
  name: 'KeyboardChart',
  components: { Chart },
  data() {
    return {
      chartData: {
        xAxisData: [],
        data1: [],
        data2: []
      }
    }
  },
  created() {
    console.log('start generateData')
    this.generateData()
    console.log('end generateData')
  },
  methods: {
    generateData() {
      const xAxisData = []
      const data1 = []
      const data2 = []
      for (let i = 0; i < 50; i++) {
        xAxisData.push(i)
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
        data2.push((Math.sin(i / 5) * (i / 5 + 10) + i / 6) * 3)
      }
      this.chartData.xAxisData = xAxisData
      this.chartData.data1 = data1
      this.chartData.data2 = data2
    }
  }
}
</script>

<style scoped>
.chart-container{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>

