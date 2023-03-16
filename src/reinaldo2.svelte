<script>

    import Icon from 'fa-svelte';
    // import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'
    import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane'
    import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner'
    import { faKeyboard } from '@fortawesome/free-solid-svg-icons/faKeyboard'
    import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons/faCircleExclamation'
    import { faFaceSmileWink } from '@fortawesome/free-solid-svg-icons/faFaceSmileWink';
    import { faArrowsUpToLine } from '@fortawesome/free-solid-svg-icons/faArrowsUpToLine';
    
    let paperPlane = faPaperPlane;
    let spinner = faSpinner;
    let keyboard = faKeyboard;
    let warning = faCircleExclamation;
    let wink = faFaceSmileWink;
    let back_to_top = faArrowsUpToLine;

    let placeholder = '1';

    let idade               =48.92;
    let sexo                ='homem';
    let peso                =73.40;
    let altura              =165;
    let exc_dias_por_semana =3.61;
    let exc_qual            ='caminhada';
    let idade_comecou_fumar =17.34;
    let diag_doenca_mental  ='nao';
    let diag_colesterol     ='nao';
    let cigarro             ='nao';
    let reinaldo = 0;
    let imc = 20;
    let prob = 0;

    // export let peso;//  = '1';         
    // export let altura;//  = '1';      
    // export let refrigerante;//  = '1';
    // export let verdura ;// = '1';     
    // export let alcool;//  = '1';      
    // export let exercicio;//  = '1';   
    // export let cigarro ;// = '1';    
    
    // function reinaldoRaiz (idade               =48.92,
    //                         sexo                ='mulher',
    //                         peso                =73.40,
    //                         altura              =165,
    //                         exc_dias_por_semana =3.61,
    //                         exc_qual            ='caminhada',
    //                         idade_comecou_fumar =17.34,
    //                         diag_doenca_mental  ='nao',
    //                         diag_colesterol     ='nao',
    //                         cigarro             ='nao',) {
        
    //     let diag_colesterol_b = 0;
    //     let diag_doenca_mental_b = 0;

    //     let sexo_b = 0;
    //     let imc = Number(peso) / ((Number(altura)/100) * (Number(altura)/100));
    //     // console.log( Number(peso) / ((Number(altura)/100) * (Number(altura)/100)))
    //     let exc_qual_2 = 0;
    //     let exc_qual_3 = 0;
    //     let exc_qual_4 = 0;
    //     let exc_qual_5 = 0;
    //     let exc_qual_6 = 0;
    //     let exc_qual_7 = 0;
    //     let exc_qual_8 = 0;
    //     let exc_qual_9 = 0;
    //     let exc_qual_10 = 0;
    //     let exc_qual_11 = 0;
    //     let exc_qual_12 = 0;
    //     let exc_qual_13 = 0;
    //     let exc_qual_14 = 0;
    //     let exc_qual_15 = 0;
    //     let exc_qual_16 = 0;
    //     let exc_qual_17 = 0;

    //     if (cigarro === 'nao') {
    //         idade_comecou_fumar = 100;
    //     }

    //     if (diag_colesterol === 'nao') {
    //         diag_colesterol_b = 1;
    //     } else {
    //         diag_colesterol_b = 0;
    //     }

    //     if (diag_doenca_mental === 'nao') {
    //         diag_doenca_mental_b = 1;
    //     } else {
    //         diag_doenca_mental_b = 0;
    //     }


    //     switch (exc_qual) {
    //         case 'caminhada_esteira':
    //             exc_qual_2 = 1;
    //         case 'corrida':
    //             exc_qual_3 = 1;
    //         case 'corrida_esteira':
    //             exc_qual_4 = 1;
    //         case 'musculacao':
    //             exc_qual_5 = 1;
    //         case 'ginastica_aerobica':
    //             exc_qual_6 = 1;
    //         case 'hidro':
    //             exc_qual_7 = 1;
    //         case 'ginastica':
    //             exc_qual_8 = 1;
    //         case 'natacao':
    //             exc_qual_9 = 1;
    //         case 'luta':
    //             exc_qual_10 = 1;
    //         case 'bicicleta':
    //             exc_qual_11 = 1;
    //         case 'futebol':
    //             exc_qual_12 = 1;
    //         case 'basquete':
    //             exc_qual_13 = 1;
    //         case 'volei':
    //             exc_qual_14 = 1;
    //         case 'tenis':
    //             exc_qual_15 = 1;
    //         case 'danca':
    //             exc_qual_16 = 1;
    //         case 'outro':
    //             exc_qual_17 = 1;
    //     }

    //     switch (sexo) {
    //         case 'homem':
    //             sexo_b = 0;
    //             break;
    //         case 'mulher':
    //             sexo_b = 1;
    //             break;
    //         default:
    //             sexo_b = 0;
    //     }

    //     console.log({
    //         'idade': idade,
    //         'sexo': sexo_b,
    //         'peso': peso,
    //         'altura': altura,
    //         'imc': imc,
    //         'exc_qual': exc_qual,
    //         'idade_fumar': idade_comecou_fumar,
    //         'diag_doenca_mental': diag_doenca_mental_b,
    //         'diag_colesterol': diag_colesterol_b,
    //     })

    //     let t = 6.58 + idade*-0.063 + sexo_b*-0.153 + peso*0.007 + imc*-0.10 +
    //         exc_qual_2*0.131 + exc_qual_3*0.423 + exc_qual_4*0.381 + exc_qual_5*0.536 + exc_qual_6*0.206 + exc_qual_7*0.031 + exc_qual_8*0.318 + exc_qual_9*0.415 + exc_qual_10*0.860 + exc_qual_11*0.215 + exc_qual_12*0.537 + exc_qual_13*12.95 + exc_qual_14*0.542 + exc_qual_15*-0.607 + exc_qual_16*-0.170 + exc_qual_17*0.230 + 
    //         idade_comecou_fumar*0.0035 + diag_doenca_mental_b*0.001 + diag_colesterol_b*0.778
    //     let p = 1/(1+Math.exp(-t))
    //     console.log(p)
    //     // console.log('log odds:', t);
    //     // console.log('prob:', p);
    //     return p;
    // }

    async function reinaldoIsBack(
                            idade               =48.92,
                            sexo                ='homem',
                            peso                =73.40,
                            altura              =165,
                            exc_dias_por_semana =3.61,
                            exc_qual            ='caminhada',
                            idade_comecou_fumar =17.34,
                            diag_doenca_mental  ='nao',
                            diag_colesterol     ='nao',
                            cigarro             ='nao',) 
                            {
        let url = "https://reinaldo-x4fs6sryfq-rj.a.run.app/?idade=" + idade + 
            "&sexo=" + sexo + 
            "&peso=" + peso + 
            "&altura=" + altura + 
            "&exc_dias_por_semana=" + exc_dias_por_semana +
            "&exc_qual=" + exc_qual + 
            "&idade_comecou_fumar=" + idade_comecou_fumar +
            "&diag_doenca_mental=" + diag_doenca_mental +
            "&diag_colesterol=" + diag_colesterol +
            "&cigarro=" + cigarro;
            
        // console.log(url);
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

    let promise = reinaldoIsBack();
    // console.log(reinaldo.reinaldo.probabilidade_nao)

    function handleClick() {
        idade               = idade              ;
        sexo                = sexo               ;
        peso                = peso               ;
        altura              = altura             ;
        exc_dias_por_semana = exc_dias_por_semana;
        exc_qual            = exc_qual           ;
        idade_comecou_fumar = idade_comecou_fumar;
        diag_doenca_mental  = diag_doenca_mental ;
        diag_colesterol     = diag_colesterol    ;
        
        promise = reinaldoIsBack(  idade,              
                                    sexo,               
                                    peso,               
                                    altura,             
                                    exc_dias_por_semana,
                                    exc_qual,           
                                    idade_comecou_fumar,
                                    diag_doenca_mental, 
                                    diag_colesterol);
        // reinaldo = reinaldo;
    }

    let inputstyle = "mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block              p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    
    // idade               = idade              ;
    // sexo                = sexo               ;
    // peso                = peso               ;
    // altura              = altura             ;
    // exc_dias_por_semana = exc_dias_por_semana;
    // exc_qual            = exc_qual           ;
    // idade_comecou_fumar = idade_comecou_fumar;
    // diag_doenca_mental  = diag_doenca_mental ;
    // diag_colesterol     = diag_colesterol    ;

    prob=prob;

    console.log(idade, sexo, peso, altura)
    // reinaldo = reinaldo;
    
</script>
<div id="top"></div>
<div class="mx-auto text-center border-white border-4 w-80 rounded-md p-4">
    {#await promise}
        <p>Probabilidade de você <b>NÃO</b> ser diagnosticado com hipertensão:</p>
        <h2 class="text-2xl">{0.00}%</h2>
    {:then reinaldo} 
        <p>Probabilidade de você <b>NÃO</b> ser diagnosticado com hipertensão:</p>
        <h2 class="text-2xl">{(reinaldo.reinaldo.probabilidade_nao * 100).toFixed(2)}%</h2>
    {:catch error}
        <p>Probabilidade de você <b>NÃO</b> ser diagnosticado com hipertensão:</p>
        <h2 class="text-2xl">{0.1}%</h2>
    {/await}
</div>


<div class="px-8">
    <input type="hidden" name="form-name" value="name_of_my_form" />
    <form  class="flex-column w-full max-w-md ml-10 mt-10 mb-10">
        <p>Qual sua idade?</p><input bind:value={idade} placeholder=48 class={inputstyle}/>
        <p class="my-4">Como você se identifica?</p>    
        <div class="flex">
            <label class="m-2">
                <input name="sexo" bind:group={sexo} value='mulher' type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <p>Mulher</p>
            </label>
            <label class="m-2">
                <input name="sexo" bind:group={sexo} value='homem' type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <p>Homem</p>
            </label>
            <label class="m-2">
                <input name="sexo" bind:group={sexo} value='outro' type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <p>Outro</p>
            </label>
        </div>
        <p class="my-4">Qual seu peso em Kg?:</p><input bind:value={peso} placeholder=80 class={inputstyle}/>
        <p class="my-4">Qual sua altura em centímetros?</p><input bind:value={altura} placeholder=180 class={inputstyle}/>
        <p class="my-4">Em quantos dias da semana você costuma praticar exercícios físicos ou esporte?</p><input bind:value={exc_dias_por_semana} placeholder=2 class={inputstyle}/>    
        <p class="my-4">Qual o exercicio físico ou esporte que você pratica com mais frequência?</p>
        <div class="flex flex-col">
            <label class="m-2 flex inline-flex">
                <input name="exc_qual" bind:group={exc_qual} value='caminhada' type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <p>Caminhada</p>
                
            </label>
            <label class="m-2 flex inline-flex">
                <input name="exc_qual" bind:group={exc_qual} value='caminhada_esteira' type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <p>Caminhada em esteira</p>
            </label>
            <label class="m-2 flex inline-flex">
                <input  name="exc_qual" bind:group={exc_qual} value='corrida' type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <p>Corrida</p>
            </label>
            <label class="m-2 flex inline-flex">
                <input name="exc_qual" bind:group={exc_qual} value='musculacao' type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <p>Musculação</p>
            </label>
            <label class="m-2 flex inline-flex">
                <input name="exc_qual" bind:group={exc_qual} value='ginastica_aerobica' type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <p>Ginástica aeróbica/spinning/step/jump</p>
            </label>
            <label class="m-2 flex inline-flex">
                <input name="exc_qual" bind:group={exc_qual} value='hidro' type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <p>Hidroginástica</p>
            </label>
            <label class="m-2 flex inline-flex">
                <input name="exc_qual" bind:group={exc_qual} value='ginastica' type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <p>Ginástica / localizada/pilates/alongamento/ioga</p>
            </label>
            <label class="m-2 flex inline-flex">
                <input name="exc_qual" bind:group={exc_qual} value='natacao' type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <p>Natação</p>
            </label>
            <label class="m-2 flex inline-flex">
                <input name="exc_qual" bind:group={exc_qual} value='luta' type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <p>Artes marciais e luta</p>
            </label>
            <label class="m-2 flex inline-flex">
                <input name="exc_qual" bind:group={exc_qual} value='bicicleta' type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <p>Bicicleta/bicicleta ergométrica</p>
            </label>
            <label class="m-2 flex inline-flex">
                <input name="exc_qual" bind:group={exc_qual} value='futebol' type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <p>Futebol</p>
            </label>
            <label class="m-2 flex inline-flex">
                <input name="exc_qual" bind:group={exc_qual} value='basquete' type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <p>Basquetebol</p>
            </label>
            <label class="m-2 flex inline-flex">
                <input name="exc_qual" bind:group={exc_qual} value='volei' type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <p>Voleibol</p>
            </label>
            <label class="m-2 flex inline-flex">
                <input name="exc_qual" bind:group={exc_qual} value='tenis' type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <p>Tênis</p>
            </label>
            <label class="m-2 flex inline-flex">
                <input name="exc_qual" bind:group={exc_qual} value='danca' type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <p>Dança (com o objetivo de praticar atividade física)</p>
            </label>
            <label class="m-2 flex inline-flex">
                <input  name="exc_qual" bind:group={exc_qual} value='outro' type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <p>Outro</p>
            </label>
        </div>
        <p class="my-4">Você fuma ou já fumou algum produto de tabaco?</p>
        <div class="flex">
            <label class="m-2">
                <input name="cigarro" bind:group={cigarro} value='sim' type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <p>Sim</p>
            </label>
            <label class="m-2">
                <input name="cigarro" bind:group={cigarro} value='nao' type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <p>Não</p>
            </label>
        </div>
        {#if cigarro=='sim'}
            <p class="my-4">Com quantos anos você começou a fumar?</p><input bind:value={idade_comecou_fumar}        placeholder=98 class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block               p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>    
        {/if}
        <p class="my-4">Você já foi diagnosticado com algum tipo de doença mental, como ansiedade ou depressão?</p>
        <div class="flex">
            <label class="m-2">
                <input name="diag_doenca_mental" bind:group={diag_doenca_mental} value='sim' type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <p>Sim</p>
            </label>
            <label class="m-2">
                <input name="diag_doenca_mental" bind:group={diag_doenca_mental} value='nao' type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <p>Não</p>
            </label>
        </div>
        <p class="my-4">Você já foi diagnosticado colesterol alto?</p>
        <div class="flex">
            <label class="m-2">
                <input name="diag_colesterol" bind:group={diag_colesterol} value='sim' type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <p>Sim</p>
            </label>
            <label class="m-2">
                <input name="diag_colesterol" bind:group={diag_colesterol} value='nao' type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <p>Não</p>
            </label>
        </div>
        <div class="flex inline-flex mt-4">
            <button type="button"
                on:click={handleClick}
                class="w-64 h-16  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <!-- <Icon icon={paperPlane}></Icon> -->
                Enviar
            </button>
        </div>
    </form>
    <div class="mx-auto text-center mb-10">
        <a href="#top" class=" border-white border-4 w-80 rounded-md p-4">
            <button type="button">Voltar ao topo</button>
        </a>
    </div>
</div>
