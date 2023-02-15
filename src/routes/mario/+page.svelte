<script>
    // Closure
    (function(){

    /**
     * Ajuste decimal de um número.
     *
     * @param  {String}  type  O tipo de arredondamento.
     * @param  {Number}  value  O número a arredondar.
     * @param  {Integer}  exp    O expoente (o logaritmo decimal da base pretendida).
     * @returns  {Number}      O valor depois de ajustado.
     */
    function decimalAdjust(type, value, exp) {
    // Se exp é indefinido ou zero...
    if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // Se o valor não é um número ou o exp não é inteiro...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
    }
    // Transformando para string
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Transformando de volta
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    }

    // Arredondamento decimal
    if (!Math.round) {
    Math.round = function(value, exp) {
        return decimalAdjust('round', value, exp);
    };
    }
    // Decimal arredondado para baixo
    if (!Math.floor) {
    Math.floor = function(value, exp) {
        return decimalAdjust('floor', value, exp);
    };
    }
    // Decimal arredondado para cima
    if (!Math.ceil) {
    Math.ceil = function(value, exp) {
        return decimalAdjust('ceil', value, exp);
    };
    }

    })();

    let emocoes = {
        version: 0.1, 
        emoções: {
            alegria: 0, raiva: 0, nojo: 0, medo: 0, tristeza: 0, surpresa: 0, carga: 0
        }
    };
    let frase = 'Estou com raiva e triste';
    export async function click() {
        //  
        // const res = await fetch("https://mario-x4fs6sryfq-rj.a.run.app/", {mode: 'no-cors'});
        let url = "https://mario-x4fs6sryfq-rj.a.run.app/?frase=" + frase
        console.log(url)
        const res = await fetch(url, 
        {
            mode: 'cors', 
            headers: {dataType: 'json'},
        });
        // const item = await res.json();
        // return { item } ;
        emocoes = await res.json();
        emocoes = emocoes
    }   
    // let emocoes = click();
    // let emocoes = click()
    // fetch("https://mario-x4fs6sryfq-rj.a.run.app/", {mode: 'no-cors'})
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((data) => {
    //     let version = data.version;
    // })
    // let result = emocoes
    // async function fetchMario() {
    //     let options = {
    //         method: 'GET',
    //         mode: 'no-cors',
    //     }
    //     const response = await fetch("https://mario-x4fs6sryfq-rj.a.run.app/", options);
    //     const emocoes = await response.text();
    //     return emocoes
    // }

    // let emocoes = fetchMario().then(emocoes => {
    //     emocoes
    // });
    

</script>
<div class="container mx-auto">

    <div class="py-12">
        <div class="container mx-auto">
            <h2 class="my-6 mb-2 text-lg font-semibold text-gray-900 dark:text-white">Emoções</h2>
        
            <div class="mb-6">
                <label><input bind:value={frase} placeholder="first" class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></label>
                <button type="button" on:click={click} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> Clique </button>
            </div>
        
        </div>
        
        
        <ul class="max-w-md space-y-1 list-disc list-inside dark:text-gray-400">
            <li>Alegria: { Math.round(emocoes.emoções.alegria, -2) }</li>
            <li>Tristeza: { emocoes.emoções.tristeza }</li>
            <li>Medo: { emocoes.emoções.medo }</li>
            <li>Nojo: { emocoes.emoções.nojo }</li>
            <li>Raiva: { emocoes.emoções.raiva }</li>
            <li>Surpresa: { emocoes.emoções.surpresa }</li>
        </ul>
    </div>




<!-- <p>Carga: { emocoes.emoções.carga }</p> -->
<div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <p class="py-4">Mario: { emocoes.version } </p>
    <img class="rounded-full w-36 h-36" src='img/mario.png' alt="Imagem do um homem de bigodes anotando coisas em um caderno e te julgando" width="200" height="200"/>
</div>

</div>