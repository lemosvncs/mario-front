<script>
    import Icon from 'fa-svelte';
    
    import Header from "../../header.svelte";
    import Emocoes from "../emocoes.svelte";


    import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'
    import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane'
    import { faAnglesDown } from '@fortawesome/free-solid-svg-icons/faAnglesDown'
    import { faAnglesUp } from '@fortawesome/free-solid-svg-icons/faAnglesUp'
    import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner'
    import { faThumbsUp } from '@fortawesome/free-solid-svg-icons/faThumbsUp'
    import { faThumbsDown } from '@fortawesome/free-solid-svg-icons/faThumbsDown'
    // import { escape_attribute_value } from "svelte/internal";
    // import { LOGNAME } from "$env/static/private";

    let infoHidden = true;
    let scaleFactor = 20;
    let carregando = false;

    let icon = faCircle;
    let paperPlane = faPaperPlane;
    let hideButtonIcon = faAnglesDown;
    let spinner = faSpinner;
    let thumbs_up = faThumbsUp;
    let thumbs_down = faThumbsDown;

    let hideButtonText = "Saiba mais"

    let texto_feedback_pos =  "Acertou"
    let texto_feedback_neg =  "Errou"

    let aval = [];
    let emocoes = {};
    let versao = 0;
    let carga = 0;
    // let data = [];
    let frase_hl = ' ';

    let frase = '';
    let placeholder = "Escreva uma frase e clique em enviar"; // "É melhor, muito melhor, contentar-se com a realidade. se ela não é tão brilhante como os sonhos, tem pelo menos a vantagem de existir.";

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

    let promise = getEmocao('');
    // let mario_promise = {}
    async function getEmocao(frase) {
        let url = "https://mario-x4fs6sryfq-rj.a.run.app/?frase=" + frase;
        console.log(url);
        const res = await fetch(url, {
            mode: "cors",
            headers: { dataType: "json" },
        });

        const mariores = await res.json();

        if (res.ok) {
            let mario = mariores
            estado_botao = true;
            return mario;
        } else {
            throw new Error(mariores);
        }
    }

    function handleClick() {
        frase = frase;
        promise = getEmocao(frase);
    }

    // export async function click() {
    //     carregando = true;
    //     // const res = await fetch("https://mario-x4fs6sryfq-rj.a.run.app/", {mode: 'no-cors'});
    //     let url = "https://mario-x4fs6sryfq-rj.a.run.app/?frase=" + frase;
    //     console.log(url);
    //     const res = await fetch(url, {
    //         mode: "cors",
    //         headers: { dataType: "json" },
    //     });
    //     // const item = await res.json();
    //     // return { item } ;
    //     let result = await res.json();

    //     aval = result.aval;
        
    //     versao = result.version;
    //     frase_hl = result.mario.frase; // .replace('/', '');
    //     frase_hl = frase_hl;
    //     // data = result.data;
        
    //     texto_feedback_pos = "Acertou"
    //     texto_feedback_neg = "Errou"

    //     carga = result.mario.carga;
    //     carga = carga;
    //     emocoes = result.mario.emocoes;
    //     emocoes = emocoes;
    //     // console.log(result)
    // }
    // let feedback_promise = Promise.resolve();
    // let feedback_promise = enviar_feedback();
    let estado_botao = true;
    async function enviar_feedback(frase, feedback, alegria, tristeza, medo, nojo, raiva, surpresa) {
        // const res = await fetch("https://mario-x4fs6sryfq-rj.a.run.app/", {mode: 'no-cors'});
        let url = "https://mario-x4fs6sryfq-rj.a.run.app/?frase=" + frase + "&feedback=" + feedback + "&alegria=" + alegria + "&tristeza=" + tristeza + "&medo=" + medo + "&nojo=" + nojo + "&raiva=" + raiva + "&surpresa=" + surpresa;
        console.log(url);
        const res = await fetch(url, {
            mode: "cors",
            method: "POST",
            headers: { dataType: "json",
            authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IllJZm9NekpyV19GakNEOF9adFp0aCJ9.eyJpc3MiOiJodHRwczovL2JsdWV4LnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJQWkRtMWdKeHJ3NGVkVk9NRmZEcWNyRUJ6VTJYdmEwbUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9ibHVleC51cy5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTY4MDgxMjQyNiwiZXhwIjoxNjgwODk4ODI2LCJhenAiOiJQWkRtMWdKeHJ3NGVkVk9NRmZEcWNyRUJ6VTJYdmEwbSIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.a6y5m47JpR8nvjz7Xv-s7m4TJ3MBtd-Z85RLbXmhewZbE_9JB7Sc2wJ2Ec96TJxZNIoSOzFGiCrfciG2IIuZf65bl3AFowwvPN6GHhaPrfyC3CkNBJKNuHmf-p37vunRvi-UD9mqfwRGEbvK0bR65BiNxHZ1nfpBboKtj9jEPcee3Zlvj7aV0A2qa3J1unZiN7rb78LFSQFiK_eMaQeI9Xytu7eZriV9zwomAUzfsSR02Gif_r41I4vjUSgIXy1qram8yahS8eP-H5lqXAO_2TPDY76OTMDQQQq_3l72HCcKjkmoAkLeFbWeFKbbTtc5O2DiBcuFv1fb2msAyfhtFQ"},
        });

        const text = res.text();
        if (res.ok) {
            estado_botao = false;
        } else {
            estado_botao = true;
            throw new Error(text);
        }
    }

</script>

<div class="dark bg-black container min-w-full min-h-full">
    <Header/>
    <div class="container mx-auto px-10">

        <div class="py-12 mx-auto">
            <!-- <h2 class="my-6 mb-2 text-lg font-semibold text-gray-900 dark:text-white">Emoções</h2> -->

            <div class="flex justify-center mb-10">
                <img
                class="rounded-full w-60 h-60 border-white border-4"
                src="img/mario3.jpeg"
                alt="Imagem do um homem de bigodes anotando coisas em um caderno e te julgando"
                width="200"
                height="200"/>
                <!-- <iframe src="https://gifer.com/embed/6a0x" width=240 height=240 frameBorder="0" allowFullScreen></iframe> -->
            </div>
            <div class="flex justify-center">
                <h1 class="text-white text-6xl">Mário</h1>
            </div>
            <div class="text-white">
                {#await promise}
                    <div class="text-center animate-spin">
                        <Icon icon={spinner}/>
                    </div>
                    <Emocoes alegria=0.0 tristeza=0.0 medo=0.0 nojo=0.0 raiva=0.0 surpresa=0.0 scaleFactor=1.0/>
                    <div class="mb-6 dark: bg-black">
                        <label class="inline-flex w-full">
                            <input bind:value={frase}
                                on:submit={handleClick}
                                placeholder={placeholder}
                                class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    
                                <button type="button"
                                    on:click={handleClick}
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    <Icon icon={paperPlane}></Icon>
                                        <!-- <i class="fa-solid fa-user text-white"></i> -->
                                </button>
                        </label>
                    </div>

                    <div class="container grid place-items-center py-4 text-white">
                        <div class="flex flex-row">
                            <p class="text-white">A avaliação está correta?</p>
                            <button class="p-2 mr-2 rounded-full opacity-20 border-white border-2 bg-slate-900 hover:bg-slate-500 active:bg-green-900"> <Icon icon={paperPlane}></Icon> </button>
                            <button class="p-2 ml-2 rounded-full opacity-20 border-white border-2 bg-slate-900 hover:bg-slate-500 active:bg-green-900"> <Icon icon={paperPlane}></Icon> </button>
                        </div>
                    </div>

                {:then mario}
                    <div class="text-center opacity-0">
                        <Icon icon={spinner}/>
                    </div>
                    <Emocoes alegria={ mario.mario.emocoes.alegria } tristeza={ mario.mario.emocoes.tristeza } medo={ mario.mario.emocoes.medo } nojo={ mario.mario.emocoes.nojo } 
                                raiva={ mario.mario.emocoes.raiva } surpresa={ mario.mario.emocoes.surpresa } scaleFactor={scaleFactor.toString()}/>
                                <div class="mb-6 dark: bg-black">
                                    <label class="inline-flex w-full">
                                        <input bind:value={frase}
                                            on:submit={handleClick}
                                            placeholder={placeholder}
                                            class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                
                                            <button type="button"
                                                on:click={handleClick}
                                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                                <Icon icon={paperPlane}></Icon>
                                                    <!-- <i class="fa-solid fa-user text-white"></i> -->
                                            </button>
                                    </label>
                                </div>
                                {#if estado_botao === true}
                                    <div class="container grid place-items-center py-4 text-white">
                                        <p class="text-white mb-2">A avaliação está correta?</p>
                                        <div class="flex flex-row">
                                            <button on:click={() => enviar_feedback(frase, 1, mario.mario.emocoes.alegria, mario.mario.emocoes.tristeza, mario.mario.emocoes.medo, mario.mario.emocoes.nojo, mario.mario.emocoes.raiva, mario.mario.emocoes.surpresa)} class="p-2 mr-2 rounded-full border-white border-2 bg-slate-900 hover:bg-slate-500 active:bg-green-900"> <Icon icon={thumbs_up}></Icon>    </button>
                                            <button on:click={() => enviar_feedback(frase, 0, mario.mario.emocoes.alegria, mario.mario.emocoes.tristeza, mario.mario.emocoes.medo, mario.mario.emocoes.nojo, mario.mario.emocoes.raiva, mario.mario.emocoes.surpresa)} class="p-2 ml-2 rounded-full border-white border-2 bg-slate-900 hover:bg-slate-500 active:bg-green-900"> <Icon icon={thumbs_down}></Icon>  </button>
                                        </div>
                                    </div>
                                {/if}
                                {#if estado_botao === false}
                                    <div class="container grid place-items-center py-4 text-white">
                                        <p class="text-white mb-2">A avaliação está correta?</p>
                                        <div class="flex flex-row">
                                            <button class="p-2 mr-2 rounded-full opacity-20 border-white border-2 bg-slate-900 hover:bg-slate-500 active:bg-green-900"><Icon icon={thumbs_up}></Icon>    </button>
                                            <button class="p-2 ml-2 rounded-full opacity-20 border-white border-2 bg-slate-900 hover:bg-slate-500 active:bg-green-900"><Icon icon={thumbs_down}></Icon>  </button>
                                        </div>
                                    </div>
                                {/if}
                {:catch error}
                    <div class="text-center opacity-0">
                        <Icon icon={spinner}/>
                    </div>
                    <Emocoes alegria=0.0 tristeza=0.0 medo=0.0 nojo=0.0 raiva=0.0 surpresa=0.0 scaleFactor=1.0/>
                    <div class="mb-6 dark: bg-black">
                        <label class="inline-flex w-full">
                            <input bind:value={frase}
                                on:submit={handleClick}
                                placeholder={placeholder}
                                class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    
                                <button type="button"
                                    on:click={handleClick}
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    <Icon icon={paperPlane}></Icon>
                                        <!-- <i class="fa-solid fa-user text-white"></i> -->
                                </button>
                        </label>
                    </div>
                    <div class="container grid place-items-center py-4 text-white">
                        <p class="text-white mb-2">A avaliação está correta?</p>
                        <div class="flex flex-row">
                            <button class="p-2 mr-2 rounded-full opacity-20 border-white border-2 bg-slate-900 hover:bg-slate-500 active:bg-green-900"><Icon icon={thumbs_up}></Icon>    </button>
                            <button class="p-2 ml-2 rounded-full opacity-20 border-white border-2 bg-slate-900 hover:bg-slate-500 active:bg-green-900"><Icon icon={thumbs_down}></Icon>  </button>
                        </div>
                    </div>
                {/await}
                <div class="text-sm py-20 text-zinc-500">
                    <p>Esta I.A. foi criada para prever emoções em textos com mais do que
                        10 palavras em frases completas.</p>
                    <p><i>Este modelo foi estatisticamente validado para obter uma acurácia de mais do que 80% em frases com mais do que 10 palavras.</i></p>
                    <p><b>Mário está em constante aprendizado :)</b></p>
                    <!-- <p></p> -->
                </div>
            </div>

        

        <!-- <div class="flex justify-center min-w-full pt-20 rounded-lg text-white"> 
            <p><i>Este modelo foi estatisticamente validado.</i></p>
        </div> -->

        
            
        <!-- </div> -->
        <!-- <div class="container grid place-items-center"> -->
            <!-- <button on:click={hideInfo} class="text-white">{ hideButtonText } <Icon icon={ hideButtonIcon }></Icon></button> -->
        </div>
        <!-- <p>Carga: { emocoes.emoções.carga }</p> -->
        <!-- dark:border-white dark:border-2  -->
        
        
        {#if infoHidden == false}
        <div class="min-w-full p-6 rounded-lg text-white"> 
            <p><i>Este modelo foi estatisticamente validado.</i></p>
            <!-- <p></p> -->
            <p>Esta I.A. foi criada para prever emoções em textos com mais do que
            10 palavras em frases completas.</p>
            
            <!-- <p>A acurácia para cada emoção pode ser vista na tabela abaixo:</p>
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
            </table> -->

            <!-- <p class="py-4">{ versao }</p>
            <img
                class="rounded-full w-36 h-36"
                src="img/mario3.jpeg"
                alt="Imagem do um homem de bigodes anotando coisas em um caderno e te julgando"
                width="200"
                height="200"
            /> -->
        </div>
        {/if}
    </div>
</div>