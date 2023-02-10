<script>

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

<h1>Emoções</h1>

<label><input bind:value={frase} placeholder="first"></label>
<button on:click={click}> Clique </button>

<ul>
    <li>Alegria: { emocoes.emoções.alegria }</li>
    <li>Tristeza: { emocoes.emoções.tristeza }</li>
    <li>Medo: { emocoes.emoções.medo }</li>
    <li>Nojo: { emocoes.emoções.nojo }</li>
    <li>Raiva: { emocoes.emoções.raiva }</li>
    <li>Surpresa: { emocoes.emoções.surpresa }</li>
</ul>

<p>Carga: { emocoes.emoções.carga }</p>
<p>{ emocoes.version } </p>
<img src='img/mario.png' alt="Imagem do um homem de bigodes anotando coisas em um caderno e te julgando" width="200" height="200"/>