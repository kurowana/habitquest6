<script>
import { Bar } from "vue-chartjs";

export default {
  mixins: [Bar],
  //   props: ["chartdata", "options"],
  data: function() {
    return {
      chartdata: {
        datacollection: {
          labels: ["January", "February", "test"],
          datasets: [
            {
              label: "Data One",
              backgroundColor: "#f87979",
              data: [40, 0, 10]
            }
          ]
        }
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  mounted: function() {
    this.renderChart(this.chartdata.datacollection, this.options);
  }
};
</script>