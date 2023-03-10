<script>
    import Header from "../../header.svelte";

    import Icon from 'fa-svelte';
    import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'
    import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane'
    import { faAnglesDown } from '@fortawesome/free-solid-svg-icons/faAnglesDown'
    import { faAnglesUp } from '@fortawesome/free-solid-svg-icons/faAnglesUp'
    import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner'

    let icon = faCircle;
    let paperPlane = faPaperPlane;
    let hideButtonIcon = faAnglesDown;
    let spinner = faSpinner;

    let placeholder = '1';
    let peso;//  = '1';         
    let altura;//  = '1';      
    let refrigerante;//  = '1';
    let verdura ;// = '1';     
    let alcool;//  = '1';      
    let exercicio;//  = '1';   
    let cigarro ;// = '1';     
    
    async function getReinaldo( peso,         
                                altura,       
                                refrigerante, 
                                verdura,      
                                alcool,       
                                exercicio,    
                                cigarro,     ) {
        
        // if cigarro === '1' {
        //     let cigarro_ = '1oumaispordia'
        // } elif cigarro === '2' {
        //     let cigarro_ = '1oumaisporsemana'
        // }

        let url = "https://reinaldo-x4fs6sryfq-rj.a.run.app?peso=" + peso + "&altura=" + altura + "&refrigerante=" + refrigerante + "&verdura=" + verdura + "&alcool=" + alcool + "&exercicio=" + exercicio + "&cigarro=" + cigarro;
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

<div class="dark bg-black container min-w-full min-h-full text-white">
    <Header/>
    <div class="container mx-auto px-10 py-12">
        <div class="flex justify-center mb-10">
            <img
            class="rounded-full w-60 h-60 border-white border-4"
            src="img/mario.png"
            alt="Imagem do um homem de bigodes anotando coisas em um caderno e te julgando"
            width="200"
            height="200"/>
            <!-- <iframe src="https://gifer.com/embed/6a0x" width=240 height=240 frameBorder="0" allowFullScreen></iframe> -->
        </div>
    </div>
    <div>
        {#await promise}
        <div class="container mb-6 dark: bg-black">
            <div class="container mb-6 dark: bg-black mx-auto">
                <label class="flex-column w-full">
                    <p>Qual seu peso em Kg?:</p><input bind:value={peso}                                                                    placeholder=80 class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block              p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <p>Qual sua altura em centímetros?</p><input bind:value={altura}                                                        placeholder=180 class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block             p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <p>Você tomou refrigerante ontem?</p><input bind:value={refrigerante}                                                   placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <p>Em quantos dias da semana você costuma comer pelo menos um tipo de verdura ou legume?</p><input bind:value={verdura} placeholder=2 class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block               p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <p>Em quantos dias da semana você costuma consumir algum tipo de bebida alcóolica?</p><input bind:value={alcool}        placeholder=3 class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block               p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <p>Em geral, por quantas horas você se exercita, nos dias em que se exercita?</p><input bind:value={exercicio}          placeholder=0.5 class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block             p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <p>Você fuma algum produto de tabaco?</p><input bind:value={cigarro}                                                    placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <button type="button"
                        on:click={handleClick}
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        <Icon icon={paperPlane}></Icon>
                            <!-- <i class="fa-solid fa-user text-white"></i> -->
                    </button>
                </label>
            </div>
        </div>
        {:then reinaldo}
            {#if reinaldo.prev == 1}
                Baixa chance de hipertensão!
            {:else}
                Pessoas com os seus hábitos costumam ser diagnosticadas com hipertensão!
                Chance de você ser diagnosticado: 
            {/if}
            <p>{reinaldo.prev}</p>
            <div class="container mb-6 dark: bg-black mx-auto">
                <form class="flex-column w-full">
                    <p>Qual seu peso em Kg?:</p><input bind:value={peso}                                                                    placeholder=80 class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block              p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <p>Qual sua altura em centímetros?</p><input bind:value={altura}                                                        placeholder=180 class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block             p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <p>Você tomou refrigerante ontem?</p>
                    <label>
                        <input bind:group={refrigerante} value={1} type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </label>
                    <label>
                        <input bind:group={refrigerante} value={2} type="radio"                                                  placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </label>
                    <p>Em quantos dias da semana você costuma comer pelo menos um tipo de verdura ou legume?</p><input bind:value={verdura} placeholder=2 class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block               p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <p>Em quantos dias da semana você costuma consumir algum tipo de bebida alcóolica?</p><input bind:value={alcool}        placeholder=3 class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block               p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <p>Em geral, por quantas horas você se exercita, nos dias em que se exercita?</p><input bind:value={exercicio}          placeholder=0.5 class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block             p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <p>Você fuma algum produto de tabaco?</p><input bind:value={cigarro}                                                    placeholder={placeholder} class="mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <button type="button"
                        on:click={handleClick}
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        <Icon icon={paperPlane}></Icon>
                            <!-- <i class="fa-solid fa-user text-white"></i> -->
                    </button>
                </form>
            </div>
        {:catch error}
        <div class="container mb-6 dark: bg-black mx-auto">
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
        </div>
        {/await}
    </div>
        
    </div>
