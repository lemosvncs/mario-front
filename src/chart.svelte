<script>
        // @ts-nocheck
    import { onMount } from 'svelte';
    import { Chart } from 'svelte-echarts'

    let dados = {};
    onMount(async () => {
        let url = "https://reinaldo-x4fs6sryfq-rj.a.run.app/dados"; 
        // console.log(url);
        const res = await fetch(url, {
            mode: "cors",
            headers: { dataType: "json" },
        });
        const dados = await res.json();
    })
    dados = dados;
    console.log("--------------")
    console.log(dados.sexo)

    // var myChart = echarts.init(document.getElementById('app'));
//     const options = {
//     xAxis: {
//       data: dados.sexo,
//     //   type: 'category',
//     },
//     yAxis: {
//       type: 'value',
//     },
//     series: [
//       {
//         data: dados.idade,
//         type: 'line',
//       },
//     ],
//   }
</script>
  
<div class="app">
    <!-- {console.log(dados)} -->
    <!-- <button on:click={handleClick}>Plot</button> -->
    <!-- <Chart { options } /> -->
</div>

<style>
.app {
    width: 30vw;
    height: 30vh;
}
</style>