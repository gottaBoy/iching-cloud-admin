<template>
  <div class="chart-container">
    <chart height="100%" width="100%" :chart-data="chartData" />
  </div>
</template>

<script>
import Chart from '@/components/Charts/MixChart'

export default {
  name: 'MixChart',
  components: { Chart },
  data() {
    return {
      chartData: {
        data1: [],
        data2: [],
        data3: []
      }
    }
  },
  created() {
    this.generateData()
  },
  methods: {
    generateData() {
      const data1 = [709, 1917, 2455, 2610, 1719, 1433, 1544, 3285, 5208, 3372, 2484, 4078]
      const data2 = [327, 1776, 507, 1200, 800, 482, 204, 1390, 1001, 951, 381, 220]
      const data3 = [1036, 3693, 2962, 3810, 2519, 1915, 1748, 4675, 6209, 4323, 2865, 4298]
      this.chartData = { data1, data2, data3 }
      // console.log(this.chartData)
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

