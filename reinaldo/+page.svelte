<script>
    import Header from "../src/header.svelte";
    import Quest from "../src/quest.svelte";
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
                <Quest/>
            </div>
        </div>
        {:then reinaldo}
            {#if reinaldo.prev == 1}
                <p>Pessoas com os seus hábitos costumam ser diagnosticadas com hipertensão!</p>
                <p>Chance de você ser diagnosticado: {1-reinaldo.prob_nao}</p>
            {:else}
                Baixa chance de hipertensão!
            {/if}
            <!-- <p>{reinaldo.prev}</p> -->
            <div class="container mb-6 dark: bg-black mx-auto">
                <Quest/>
            </div>
        {:catch error}
        <div class="container mb-6 dark: bg-black mx-auto">
            <Quest/>
        </div>
        {/await}
    </div>
        
    </div>
