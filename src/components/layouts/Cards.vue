<template>

    <div class=" px-4">

         <div class="row my-2 cards-container">
             <div class="cadr cadr-element" v-for="(data,index) in data" :key="index">
                <div class="card-data">
                    <div>
                        <h3 class="counter fs-5" v-bind:data-target="data.number" >{{data.number}}</h3>
                        <h5 class="card-title">{{data.title}}</h5>
                    </div>
                    <i :id="data.iconId" class="fs-1  border  p3 card-icon "></i>
                </div>
             </div>

         </div>
    </div>

</template>

<script>

export default {
  data () {
    return {
    }
  },
  created () {

  },
  mounted() {
      console.log(this.data)
      this.addIcons();
      this.CounterAnimation();
  },
  props: ['data'],
    name:'cards',
    methods: {
        addIcons(){
            if(this.data){
                for(var i =0;i< this.data.length;i++){
                    document.querySelectorAll('.card-icon').forEach((ele,index) =>{
                       if(i === index ){
                          ele.classList.remove('bx')
                             ele.classList.remove('bx-stats')
                             if(ele.classList.length > 4){
                                for(var n=0;n<ele.classList.length;n++){
                                    ele.classList.remove(''+ele.classList[n+4]+'')
                                }
                             }
                           if(this.data[i].icon){
                               this.data[i].icon.split(' ').forEach(l => ele.classList.toggle(l))

                           }else{
                             var defaultClass = 'bx bx-stats';
                             defaultClass.split(' ').forEach(l => ele.classList.toggle(l))
                           }

                       }

                    });
                }
            }
           
        },
        CounterAnimation(){
            const counters = document.querySelectorAll('.counter');
            counters.forEach((counter)=>{
                counter.innerText = '0';
                const UpdateCounter = () =>{
                const target = +counter.getAttribute('data-target');
                const c = +counter.innerText;

                 const increment =target/200;
                if(c < target){

                    counter.innerText = `${Math.ceil(c + increment)}`;
                    setTimeout(UpdateCounter, 1)
                 }
                };
            UpdateCounter();
            })


        }

  },
}
</script>


<style>

.cards-container{
    display: grid;
    height: 100px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 100px;
    column-gap: 5px;
}
.cadr{
    width: auto;
    background: #fff;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    padding: 15px;
    box-shadow: 	0px 0px 11px 1px rgba(0,0,0,0.14);
    border:	1px solid rgba(0,0,0,0);
    border-radius:	4px;
}
.cadr .card-data{
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.card-icon{

    width: 60px;
    height: 60px;
    display: grid;
    text-align: center;
    align-items: center;
    /* background-color: #929DD9; */
    color:  #232D65;
    border-radius: 50%;
    font-size: 32px;
}
.card-icon#stats{
   background-color: #e7e3fd;
   color: #8c7ae6;
}
.card-icon#cube{
   background-color: #ffd4d4;
   color: #ff7979;
}
.card-icon#dollar{
   background-color: #e5fadc;
   color: #84bc6c;
}
.card-icon#ticket{
   background-color: #e7e3fd;
   color: #8c7ae6;
}
.cadr .card-title{
    font-size: 12px;
    font-weight: 500;
    color: #828282;
}
.cadr:hover::before{
    background-color: #929DD9;
}
.cadr:hover .card-icon{
     background-color: #A8B0E0;
}

@media(max-width: 786px){
    .cards-container{
        grid-template-columns: repeat(2, 1fr);
    }
};
@media(max-width: 441px){
    .cards-container{
        grid-template-columns: 1fr !important;
    }
};
</style>
