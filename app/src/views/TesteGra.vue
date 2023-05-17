<template >
  <div class="marginTop">
    <div style="width: 800px;">
      <canvas id="acquisitions">

      </canvas>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  data(){
    return{
      data: [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
      ]
    }
  },
  methods:{
    test(){
      new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'bar',
      data: {
        labels: this.data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: this.data.map(row => row.count)
          }
        ]
      }
    }
  );
    }
  },
  mounted(){
    this.test()
  }
}
</script>

<style>
.marginTop{
  @apply mt-24 mr-auto ml-auto
}
</style>