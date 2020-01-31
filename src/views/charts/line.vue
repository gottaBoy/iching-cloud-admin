<template>
  <div class="chart-container">
    <chart height="100%" width="100%" :chart-data="chartData" />
  </div>
</template>

<script>
import Chart from '@/components/Charts/LineMarker'

export default {
  name: 'LineChart',
  components: { Chart },
  data() {
    return {
      chartData: {
        data1: [],
        data2: [],
        data3: [],
        data4: []
      }
    }
  },
  created() {
    this.generateDate()
  },
  methods: {
    generateDate() {
      const data1 = ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55']
      const data2 = [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122]
      const data3 = [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
      const data4 = [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
      this.chartData = { 'data1': data1, 'data2': data2, 'data3': data3, 'data4': data4 }
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

