<script>
    import Icon from 'fa-svelte';
    // import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'
    import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane'
    import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner'
    import { faKeyboard } from '@fortawesome/free-solid-svg-icons/faKeyboard'
    import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons/faCircleExclamation'
    import { faFaceSmileWink } from '@fortawesome/free-solid-svg-icons/faFaceSmileWink';
    
    let paperPlane = faPaperPlane;
    let spinner = faSpinner;
    let keyboard = faKeyboard;
    let warning = faCircleExclamation;
    let wink = faFaceSmileWink;

    let placeholder = '1';

    export let peso;//  = '1';         
    export let altura;//  = '1';      
    export let refrigerante;//  = '1';
    export let verdura ;// = '1';     
    export let alcool;//  = '1';      
    export let exercicio;//  = '1';   
    export let cigarro ;// = '1';    
    
    function reginaldoRaiz (idade=48.92,
                            sexo='2',
                            peso=73.40,
                            altura=1.65,
                            exc_dias_por_semana=3.61,
                            exc_qual='caminhada',
                            idade_comecou_fumar=17.34,
                            diag_doenca_mental='nao',
                            diag_colesterol='nao') {

        let diag_colesterol_b = 0;
        let diag_doenca_mental_b = 0;

        let sexo_b = 0;
        let imc = peso / altura * altura;
        let exc_qual_2 = 0;
        let exc_qual_3 = 0;
        let exc_qual_4 = 0;
        let exc_qual_5 = 0;
        let exc_qual_6 = 0;
        let exc_qual_7 = 0;
        let exc_qual_8 = 0;
        let exc_qual_9 = 0;
        let exc_qual_10 = 0;
        let exc_qual_11 = 0;
        let exc_qual_12 = 0;
        let exc_qual_13 = 0;
        let exc_qual_14 = 0;
        let exc_qual_15 = 0;
        let exc_qual_16 = 0;
        let exc_qual_17 = 0;

        if (diag_colesterol == 'nao') {
            diag_colesterol_b = 1;
        } else {
            diag_colesterol_b = 0;
        }

        if (diag_doenca_mental == 'nao') {
            diag_doenca_mental_b = 1;
        } else {
            diag_doenca_mental_b = 0;
        }


        switch (exc_qual) {
            case 'caminhada_esteira':
                exc_qual_2 = 1;
            case 'corrida':
                exc_qual_3 = 1;
            case 'corrida_esteira':
                exc_qual_4 = 1;
            case 'musculacao':
                exc_qual_5 = 1;
            case 'ginastica_aerobica':
                exc_qual_6 = 1;
            case 'hidro':
                exc_qual_7 = 1;
            case 'ginastica':
                exc_qual_8 = 1;
            case 'natacao':
                exc_qual_9 = 1;
            case 'luta':
                exc_qual_10 = 1;
            case 'bicicleta':
                exc_qual_11 = 1;
            case 'futebol':
                exc_qual_12 = 1;
            case 'basquete':
                exc_qual_13 = 1;
            case 'volei':
                exc_qual_14 = 1;
            case 'tenis':
                exc_qual_15 = 1;
            case 'danca':
                exc_qual_16 = 1;
            case 'outro':
                exc_qual_17 = 1;
        }

        switch (sexo) {
            case 'homem':
                sexo_b = 0;
                break;
            case 'mulher':
                sexo_b = 1;
                break;
            default:
                sexo_b = 0;
        }

        

        let t = 6.58 + idade*-0.063 + sexo_b*-0.153 + peso*0.007 + imc*-0.10 +
            exc_qual_2*0.131 + exc_qual_3*0.423 + exc_qual_4*0.381 + exc_qual_5*0.536 + exc_qual_6*0.206 + exc_qual_7*0.031 + exc_qual_8*0.318 + exc_qual_9*0.415 + exc_qual_10*0.860 + exc_qual_11*0.215 + exc_qual_12*0.537 + exc_qual_13*12.95 + exc_qual_14*0.542 + exc_qual_15*-0.607 + exc_qual_16*-0.170 + exc_qual_17*0.230 + 
            idade_comecou_fumar*0.0035 + diag_doenca_mental_b*0.001 + diag_colesterol_b*0.778
        let p = 1/1+(Math.pow(2.71828, -t))
        
    }
    
    async function getReinaldo( peso,         
                                altura,       
                                refrigerante, 
                                verdura,      
                                alcool,       
                                exercicio,    
                                cigarro,     ) {
        
        let cigarro_ = 'nao'
        if (cigarro === '1') {
            cigarro_ = '1oumaispordia'
        } else if (cigarro === '2') {
            cigarro_ = '1oumaisporsemana'
        } else if (cigarro === '3') {
            cigarro_ = '1menosporsemana'
        } else if (cigarro === '4') {
            cigarro_ = '1menospormes'
        } else if (cigarro === '5') {
            cigarro_ = 'nao'
        } 

        let refrigerante_ = 'sim'
        if (refrigerante === '1') {
            refrigerante_ = 'sim'
        } else if (refrigerante) {
            refrigerante_ = 'nao'
        }

        let url = "https://reinaldo-x4fs6sryfq-rj.a.run.app?peso=" + peso + "&altura=" + altura + "&refrigerante=" + refrigerante_ + "&verdura=" + verdura + "&alcool=" + alcool + "&exercicio=" + exercicio + "&cigarro=" + cigarro_;
        console.log(url);
        const res = await fetch(url, {
            mode: "cors",
            headers: { dataType: "json" },
        });

        const reinaldo_res = await res.json();

        if (res.ok) {
            let reinaldo = reinaldo_res
            console.log(reinaldo)
            // estado_botao = true;
            return reinaldo;
        } else {
            throw new Error(reinaldo_res);
        }
    }

    let promise = getReinaldo();
    function handleClick() {
        peso = peso;         
        altura = altura;      
        refrigerante = refrigerante;
        verdura = verdura;     
        alcool = alcool;      
        exercicio = exercicio;   
        cigarro = cigarro;     
        promise = getReinaldo(peso,         
                                altura,       
                                refrigerante, 
                                verdura,      
                                alcool,       
                                exercicio,    
                                cigarro);
    }

</script>
{#await promise}
<div class="text-center text-center animate-spin">
    <Icon icon={spinner}/>
</div>
{:then reinaldo} 
<div class="text-center opacity-0">
    <Icon icon={spinner}/>
</div>
{#if reinaldo.prev == 1}
    <Icon icon={ warning } class="animate-ping"/>
    <p>Pessoas com os seus hábitos costumam ser diagnosticadas com hipertensão!</p>
    <p>Chance de você ser diagnosticado: {1-reinaldo.prob_nao}</p>
{:else}
    <Icon icon={ wink }/>
    <p>Baixa chance de hipertensão!</p>
    <p>Chance de você ser diagnosticado: {1-reinaldo.prob_nao}</p>
{/if}
{:catch error}
<div class="text-center text-center animate-bounce">
    <Icon icon={keyboard}/>
</div>
{/await}
<form class="flex-column w-full">
    <p>Qual seu peso em Kg?:</p><input bind:value={peso}                                                                    placeholder=80 class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block              p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    <p>Qual sua altura em centímetros?</p><input bind:value={altura}                                                        placeholder=180 class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block             p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    <p>Você tomou refrigerante ontem?</p>
    <div class="flex">
        <label class="m-2">
            <input bind:group={refrigerante} value={1} type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            <p>Não</p>
        </label>
        <label class="m-2">
            <input bind:group={refrigerante} value={2} type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            <p>Sim</p>
        </label>
    </div>
    <p>Em quantos dias da semana você costuma comer pelo menos um tipo de verdura ou legume?</p><input bind:value={verdura} placeholder=2 class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block               p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    <p>Em quantos dias da semana você costuma consumir algum tipo de bebida alcóolica?</p><input bind:value={alcool}        placeholder=3 class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block               p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    <p>Em geral, por quantas horas você se exercita, nos dias em que se exercita?</p><input bind:value={exercicio}          placeholder=0.5 class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block             p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    <p>Você fuma algum produto de tabaco?</p>
    <div class="flex">
        <label class="m-2">
            <input bind:group={cigarro} value={1} type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            <p>Um ou mais por dia</p>
        </label>
        <label class="m-2">
            <input bind:group={cigarro} value={2} type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            <p>Um ou mais por semana</p>
        </label>
        <label class="m-2">
            <input bind:group={cigarro} value={3} type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            <p>Menos que uma vez por semana</p>
        </label>
        <label class="m-2">
            <input bind:group={cigarro} value={4} type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            <p>Menos do que um por mês</p>
        </label>
        <label class="m-2">
            <input bind:group={cigarro} value={5} type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            <p>Não fuma este produto </p>
        </label>
    </div>
    <button type="button"
        on:click={handleClick}
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        <Icon icon={paperPlane}></Icon>
            <!-- <i class="fa-solid fa-user text-white"></i> -->
    </button>
</form>