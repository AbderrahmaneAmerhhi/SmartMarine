<script >
import CardsVue from './components/layouts/Cards.vue';
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'
import HeaderVue from './components/layouts/Header.vue';
import SideBarVue from './components/layouts/SideBar.vue';
import navBar from './components/layouts/navBar.vue';

import axios from 'axios'
export default {
  mounted(){
     this.getApiData();
  },
  methods: {
    getApiData(){
      axios.get('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb')
           .then(res=>{
              this.rows= res.data.results[0];
              this.page=res.data.info.page;
            console.log( res.data.results[0])
            console.log(res.data)
           }) 
           .catch(err=> console.log(err))  
        
    },
    clickCallback(){
      console.log('fff')
    }
  },
  components:{CardsVue,Vue3ChartJs,HeaderVue,SideBarVue,navBar,  },
data () {
  const pieChart = {
      type: "pie",
      data: {
        labels: ["New  :890", "Returning : 258", "Referalls : 149"],
        datasets: [
          {
            backgroundColor: ["#8c7ae6", "#f39c12", "#e74c3c"],
            data: [890, 258, 149],
          },
        ],
      },
    };


    const lineChart = {
      type: "line",

      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Sales",
            data: [145, 195, 155,220, 165,365, 80, 300,250,370,310,366],
            fill: false,
            borderColor: "#3B3B98",
            tension: 0.5,
            backgroundColor: "#3B3B98",
          },
         
        ],
      },
      options: {
        plugins: {
          zoom: {
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true,
              },
              mode: "y",
            },
          },
          datalabels: {
            backgroundColor: function (context) {
              return context.dataset.backgroundColor;
            },
            borderRadius: 4,
            color: "white",
            font: {
              weight: "bold",
            },
            formatter: Math.round,
            padding: 6,
          },
        },
      },
    };

    return {
      pieChart,
      lineChart,
      columns: [
        {
          label: 'FIRST NAME',
          field: 'first',
        },
        {
          label: 'LAST NAME',
          field: 'last',
        },
        {
          label: 'ADDRESS',
          field: 'address',
        },
        {
          label: 'EMAIL',
          field: 'email',
        },
      
        {
          label: 'Created AT',
          field: 'created',
         
        },
        {
          label: 'BALANCE',
          field: 'balance',
        },
      ],
      rows: [],
      page:10,
        cardsdata:[
            {
                title:'Total Sales',
                number:2340,
                iconId:'stats',
                icon:'bx bx-stats',
            },
            {
                title:'Total Products',
                number:1250,
                iconId:'cube',
                icon:'bx bx-cube',
            },
           {
                title:'Total Revenue',
                number:19.860,
                iconId:'dollar',
                icon:'bx bx-dollar',
            },
           {
                title:'Tickets',
                number:237,
                iconId:'ticket',
                icon:'bx bx-file-blank',
            }
        ],
        
    }
  },
  }
</script>

<template>
  
  <div>
    <HeaderVue />
    <SideBarVue />
      <div  style="padding-left: 70px;">
         <navBar />
         <CardsVue  :data='cardsdata'/>
         <div class="charts-content row">
              <div class="col-md-8 line-chart">
                <button class="parameter-btn">
                  <i class='bx bx-cog nav__icon'></i>
                </button>
                <span class="line-titles">
                  <h3>Sales</h3>
                  <h6>2020 Total Sales 12.84k</h6>
                </span>
                <vue3-chart-js v-bind="{ ...lineChart }" />
              </div>
              <div class="col-md-3 pie-chart">
                <span class="pie-titles">
                  <h3>Customers</h3>
                  <h6>Last 7 Days</h6>
                </span>
                <vue3-chart-js
                   v-bind="{ ...pieChart }"
                ></vue3-chart-js>
              </div>
         </div>



         <div class="data-container">
            <vue-good-table
            :columns="columns"
            :rows="rows"
            :search-options="{
                enabled: true,
                trigger: 'enter',
                skipDiacritics: true,
                // searchFn: mySearchFn,
                placeholder: 'Search this table',
                externalQuery: searchQuery
              }"
              :sort-options="{
                  enabled: true,
                }"
                :pagination-options="{enabled: true}">
               
              </vue-good-table>
                
         </div>
        
      </div>
      
  </div>
</template>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
