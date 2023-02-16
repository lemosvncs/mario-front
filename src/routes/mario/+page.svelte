<script>
    let emocoes = {}
    let versao = 0;
    // let data = [];
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
        // data = result.data;
        emocoes = result.mario.emocoes;
        emocoes = emocoes;
        // console.log(result)
    }

</script>

<div class="container mx-auto">
    <div class="py-12">
        <div class="container mx-auto">
            <h2
                class="my-6 mb-2 text-lg font-semibold text-gray-900 dark:text-white"
            >
                Emoções
            </h2>

            <div class="mb-6">
                <label
                    ><input
                        bind:value={frase}
                        placeholder="first"
                        class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    /></label
                >
                <button
                    type="button"
                    on:click={click}
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Clique
                </button>
            </div>
        </div>

        <ul class="max-w-md space-y-1 list-disc list-inside dark:text-gray-400">
            <li>Alegria: {(emocoes.alegria * 100).toFixed(2)}%</li>
            <li>Tristeza: {(emocoes.tristeza * 100).toFixed(2)}%</li>
            <li>Medo: {(emocoes.medo * 100).toFixed(2)}%</li>
            <li>Nojo: {(emocoes.nojo * 100).toFixed(2)}%</li>
            <li>Raiva: {(emocoes.raiva * 100).toFixed(2)}%</li>
            <li>Surpresa: {(emocoes.surpresa * 100).toFixed(2)}%</li>
        </ul>
    </div>

    <!-- <p>Carga: { emocoes.emoções.carga }</p> -->
    <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
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
