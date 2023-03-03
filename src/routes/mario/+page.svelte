<script>
    import Header from "../../header.svelte";

    import Icon from 'fa-svelte';
    import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'
    import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane'
    import { faAnglesDown } from '@fortawesome/free-solid-svg-icons/faAnglesDown'
    import { faAnglesUp } from '@fortawesome/free-solid-svg-icons/faAnglesUp'
    import { escape_attribute_value } from "svelte/internal";

    let infoHidden = true;

    let icon = faCircle;
    let paperPlane = faPaperPlane;
    let hideButtonIcon = faAnglesDown;
    let hideButtonText = "Saiba mais"

    let texto_feedback_pos = "Acertou"
    let texto_feedback_neg = "Errou"

    let aval = [];
    let emocoes = {};
    let versao = 0;
    let carga = 0;
    // let data = [];
    let frase_hl = ' ';

    let frase = "É melhor, muito melhor, contentar-se com a realidade. se ela não é tão brilhante como os sonhos, tem pelo menos a vantagem de existir.";
    click();

    function hideInfo() {
        infoHidden = !infoHidden;
        if (hideButtonIcon === faAnglesDown) {
            hideButtonIcon = faAnglesUp;
            hideButtonText = "Ver menos"
        } else {
            hideButtonIcon = faAnglesDown;
            hideButtonText = "Saiba mais"
        }
    }

    export async function click() {
        // const res = await fetch("https://mario-x4fs6sryfq-rj.a.run.app/", {mode: 'no-cors'});
        let url = "https://mario-x4fs6sryfq-rj.a.run.app/?frase=" + frase;
        console.log(url);
        const res = await fetch(url, {
            mode: "cors",
            headers: { dataType: "json" },
        });
        // const item = await res.json();
        // return { item } ;
        let result = await res.json();
        aval = result.aval;
        
        
        
        versao = result.version;
        frase_hl = result.mario.frase; // .replace('/', '');
        frase_hl = frase_hl;
        // data = result.data;
        
        texto_feedback_pos = "Acertou"
        texto_feedback_neg = "Errou"

        carga = result.mario.carga;
        carga = carga;
        emocoes = result.mario.emocoes;
        emocoes = emocoes;
        // console.log(result)
    }

    async function enviar_feedback(frase, feedback, alegria, tristeza, medo, nojo, raiva, surpresa) {
        // const res = await fetch("https://mario-x4fs6sryfq-rj.a.run.app/", {mode: 'no-cors'});
        let url = "https://mario-x4fs6sryfq-rj.a.run.app/?frase=" + frase + "&feedback=" + feedback + "&alegria=" + alegria + "&tristeza=" + tristeza + "&medo=" + medo + "&nojo=" + nojo + "&raiva=" + raiva + "&surpresa=" + surpresa;
        console.log(url);
        const res = await fetch(url, {
            mode: "cors",
            method: "POST",
            headers: { dataType: "json" },
        });
    }

    function feedback_positivo() {
        enviar_feedback(frase, 1, emocoes.alegria, emocoes.tristeza, emocoes.medo, emocoes.nojo, emocoes.raiva, emocoes.surpresa)
        texto_feedback_pos = "Feedback enviado"
    }

    function feedback_negativo() {
        enviar_feedback(frase, 0, emocoes.alegria, emocoes.tristeza, emocoes.medo, emocoes.nojo, emocoes.raiva, emocoes.surpresa)
        texto_feedback_neg = "Feedback enviado"
    }

</script>

<div class="dark bg-black container min-w-full min-h-full">
    <Header/>
    <div class="container mx-auto px-10">

        <div class="py-12 mx-auto">
            <!-- <h2 class="my-6 mb-2 text-lg font-semibold text-gray-900 dark:text-white">Emoções</h2> -->

            <div class="flex justify-center mb-10">
                <iframe src="https://gifer.com/embed/6a0x" width=240 height=240 frameBorder="0" allowFullScreen></iframe>
            </div>
            
            <!-- <p><a href="https://gifer.com">via GIFER</a></p> -->

            <div class="mb-6 dark: bg-black">
                <label class="inline-flex w-full">
                    <input bind:value={frase}
                        placeholder="first"
                        class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        
                        <button type="button" on:click={click}
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            <Icon icon={paperPlane}></Icon>
                                <!-- <i class="fa-solid fa-user text-white"></i> -->
                        </button>
                </label>
            </div>

            {#if carga === 0}
                <p class="text-orange-500">Ops, não consigo determinar as emoções de sua frase. Tente uma frase maior.</p>
            {/if}

            {#if carga !== 0}
                <div class="block p-6 rounded-lg shadow-lg dark:bg-slate-900 text-white border-2 max-w-sm m-auto min-w-full">{ @html frase }</div>

                <div class="dark:text-white flex flex-row flex-wrap lg:flex-no-wrap py-16 justify-center">
                        <span class="flex-col px-4" style="scale: {emocoes.alegria + 0.8}">
                            <h2>Alegria</h2>
                            <img class="" src="img/noto_grinning-face-with-smiling-eyes.svg" alt="Emoji sorrindo">
                            <p>{(emocoes.alegria * 100).toFixed(2)}%</p>
                        </span>
                        <span class="flex-col px-4" style="scale: {emocoes.tristeza + 0.8}" >
                            <h2>Tristeza</h2>
                            <img src="img/noto_disappointed-face.svg" alt="Emoji triste">
                            <p>{(emocoes.tristeza * 100).toFixed(2)}%</p>
                        </span>
                        <span class="flex-col px-4" style="scale: {emocoes.medo + 0.8}">
                            <h2>Medo</h2>
                            <img src="img/noto_anxious-face-with-sweat.svg" alt="Emoji com cara de assustado"> 
                            <p>{(emocoes.medo * 100).toFixed(2)}%</p>
                        </span>
                        <span class="flex-col px-4" style="scale: {emocoes.nojo + 0.8}">
                            <h2>Nojo</h2>
                            <img src="img/noto_nauseated-face.svg" alt="Emoji enjoado">
                            <p>{(emocoes.nojo * 100).toFixed(2)}%</p>
                        </span>
                        <span class="flex-col px-4" style="scale: {emocoes.raiva + 0.8}" >
                            <h2>Raiva</h2>
                            <img src="img/noto_enraged-face.svg" alt="Emoji com raiva">
                            <p>{(emocoes.raiva * 100).toFixed(2)}%</p>
                        </span>
                        <span class="flex-col px-4" style="scale: {emocoes.surpresa + 0.8}">
                            <h2>Surpresa</h2>
                            <img src="img/noto_astonished-face.svg" alt="Emoji surpreso">
                            <p>{(emocoes.surpresa * 100).toFixed(2)}%</p>
                        </span>
                </div>
            {/if}

        <div class="container grid place-items-center py-4 text-white">
            <div class="flex flex-row">
                <button on:click={feedback_positivo} class="p-2 mr-2 rounded-lg border-white border-2 bg-slate-900 hover:bg-slate-500 active:bg-green-900"> { texto_feedback_pos } </button>
                <button on:click={feedback_negativo} class="p-2 ml-2 rounded-lg border-white border-2 bg-slate-900 hover:bg-slate-500 active:bg-green-900"> { texto_feedback_neg } </button>
            </div>
        </div>
            
        </div>
        <div class="container grid place-items-center">
            <button on:click={hideInfo} class="text-white">{ hideButtonText } <Icon icon={ hideButtonIcon }></Icon></button>
        </div>
        <!-- <p>Carga: { emocoes.emoções.carga }</p> -->
        <!-- dark:border-white dark:border-2  -->
        

        {#if infoHidden == false}
        <div class="min-w-full p-6 rounded-lg text-white"> 
            <p><i>Este modelo foi estatisticamente validado.</i></p>
            <!-- <p></p> -->
            <p>
                Esta I.A. foi criada para prever emoções em textos com mais do que
                10 palavras em frases completas. A acurácia para cada emoção pode ser vista na tabela abaixo:
            </p>
            
            <table class="table-auto border-collapse w-1/2 border-white border-2 mt-2">
                <thead class="text-left">
                    <tr>
                        <th>Emoção</th>
                        <th>Acurácia</th>
                        <th>Precisão</th>
                    </tr>
                </thead>
                <tbody>
                    {#each aval as item, index(item.Acc)}
                        <tr>
                            <td>{item.Emoções}</td>
                            <td>{item.Acc.toFixed(2)}</td>
                            <td>{item.Prec}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>

            <p class="py-4">{ versao }</p>
            <img
                class="rounded-full w-36 h-36"
                src="img/mario.png"
                alt="Imagem do um homem de bigodes anotando coisas em um caderno e te julgando"
                width="200"
                height="200"
            />
        </div>
        {/if}
    </div>
    This is the end.
</div>