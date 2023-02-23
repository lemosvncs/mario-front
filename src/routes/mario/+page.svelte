<script>
    import Header from "../../header.svelte";
    import Icon from 'fa-svelte';
    import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'
    import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane'
    let icon = faCircle;
    let paperPlane = faPaperPlane;

    let emocoes = {}
    let versao = 0;
    let carga = 0;
    // let data = [];
    let frase_hl = ' ';

    let frase = "É melhor, muito melhor, contentar-se com a realidade. se ela não é tão brilhante como os sonhos, tem pelo menos a vantagem de existir.";
    click();

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

        versao = result.version;
        frase_hl = result.mario.frase; // .replace('/', '');
        frase_hl = frase_hl;
        // data = result.data;
        

        carga = result.mario.carga;
        carga = carga;
        emocoes = result.mario.emocoes;
        emocoes = emocoes;
        // console.log(result)
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
                <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm m-auto min-w-full">{ @html frase_hl }</div>

                <div class="">
                    <ul class="max-w-md space-y-1 list-disc list-inside dark:text-gray-400 p-6 m-auto">
                        <li>Alegria: {(emocoes.alegria * 100).toFixed(2)}%</li>
                        <li>Tristeza: {(emocoes.tristeza * 100).toFixed(2)}%</li>
                        <li>Medo: {(emocoes.medo * 100).toFixed(2)}%</li>
                        <li>Nojo: {(emocoes.nojo * 100).toFixed(2)}%</li>
                        <li>Raiva: {(emocoes.raiva * 100).toFixed(2)}%</li>
                        <li>Surpresa: {(emocoes.surpresa * 100).toFixed(2)}%</li>
                    </ul>
                </div>
            {/if}
            

        </div>

        <!-- <p>Carga: { emocoes.emoções.carga }</p> -->
        <div class="min-w-full p-6 rounded-lg dark:border-white dark:border-2 text-white">
            <p><i>Este modelo foi estatisticamente validado.</i></p>
            <!-- <p></p> -->
            <p>
                Esta I.A. foi criado para prever emoções em textos com mais do que
                10 palavras em frases completas.
            </p>


            <p class="py-4">{ versao }</p>
            <img
                class="rounded-full w-36 h-36"
                src="img/mario.png"
                alt="Imagem do um homem de bigodes anotando coisas em um caderno e te julgando"
                width="200"
                height="200"
            />
        </div>
    </div>
    This is the end.
</div>