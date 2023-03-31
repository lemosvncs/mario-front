<script>
    import { onDestroy, onMount } from 'svelte';
    // import { browser } from '$app/environment';
    // import Icon from 'fa-svelte';
    // import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'
    // import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane'
    // import { faAnglesDown } from '@fortawesome/free-solid-svg-icons/faAnglesDown'
    // import { faAnglesUp } from '@fortawesome/free-solid-svg-icons/faAnglesUp'
    // import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner'

    // let icon = faCircle;
    // let paperPlane = faPaperPlane;
    // let hideButtonIcon = faAnglesDown;
    // let spinner = faSpinner;

    import Header from "../../header.svelte";

    let rick = '<iframe src="https://giphy.com/embed/g7GKcSzwQfugw" width="50" height="50" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/rick-roll-g7GKcSzwQfugw">via GIPHY</a></p>"';
    let a = "a";

    let stream;
    let mediaRecorder;
    let recordButton;
    let chunks = [];
    let clips = [];
    let state = "waiting";

    let rec_black = '<img width=40 height=40 src="img/rec_black.png">';
    let rec_red = '<img width=50 height=50 src="img/rec_red.png">';

    function onStop(e) {
        console.log("recorder stopped");
        console.log(chunks);

        const blob = new Blob(chunks, {type: "audio/mpeg"});
        chunks = [];

        const audioURL = window.URL.createObjectURL(blob);
        console.log(audioURL);

        clips = [
            {
                ...clips,
                src: audioURL,
            },
        ];
        console.log(clips);

        ///////////////////////////////////

        // const blob = new Blob(chunks);
        // url = URL.createObjectURL(blob);
        // download = 'audioRec.wav';

        let audioData = new FormData();
        audioData.append('audio', blob, 'audioRec.wav');

        console.log("VVVVVVV Audio data: ", audioData);
        fetch('https://bioaudio-x4fs6sryfq-rj.a.run.app/upload-audio', {
          mode: 'cors',
          method: 'POST',
          body: audioData,})
        .then((response) => response.json())
        .then((body) => {
            console.log("BODY:", body);
            state="received";
          cough = body.prediction.cough;
          covid = body.prediction.covid;
        });
        // console.log("----------------------------------\nChunks:", chunks)
        console.log(covid, cough);
    }

    async function setup() {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            console.log("getUserMedia supported.");
            stream = await navigator.mediaDevices.getUserMedia({audio: true});
            // options = {mimeType: 'audio/webm'};
            mediaRecorder = new MediaRecorder(stream, {mimeType: 'audio/webm'});
                mediaRecorder.ondataavailable = (e) => {
                    if (e.data.size > 0) chunks.push(e.data);
                    // console.log(e.data);
                    // chunks.push(e.data);
                }
            mediaRecorder.onstop = onStop;
        }
    }

    onMount(async () => setup());

    function record() {
        console.log("recorder started");
        state="recording"
        mediaRecorder.start();
        
        recordButton.style.background = "red";
        recordButton.style.color = "black";
    }

    function stop() {
        state="sending"
        mediaRecorder.stop();
        console.log(mediaRecorder.state);
        console.log("recorder stopped");
        
        recordButton.style.background = "";
        recordButton.style.color = "";

        // enviar_audio(chunks);
    }

    let cough;
    let covid;
    let url;
    let download;

</script>



<Header/>
<div class="container max-auto px-10 w-full">
    <!-- <div class="py-12"> -->
        <div class="flex justify-center mb-10 py-12">
            <img
            class="rounded-full w-60 h-60 border-white border-4"
            src="img/quail3.jpeg"
            alt="Imagem do um homem de bigodes anotando coisas em um caderno e te julgando"
            width="200"
            height="200"/>
            <!-- <iframe src="https://gifer.com/embed/6a0x" width=240 height=240 frameBorder="0" allowFullScreen></iframe> -->
        </div>
    <!-- </div> -->

    <div class="flex justify-items-center text-center">
        <div class="flex flex-col justify-center mx-auto text-center">
            <div class="text-white h-8">
                {#if state=="waiting"}
                    <p></p>
                    <!-- <img class="animate-spin" src="img/loading.svg" alt="Loading" width=40 height=40> -->
                {:else if state=="recording"}
                    <p></p>
                    <!-- <img class="animate-spin" src="img/loading.svg" alt="Loading" width=40 height=40> -->
                {:else if state=="sending"}
                    <img class="animate-spin" src="img/loading.svg" alt="Loading" width=40 height=40>
                    <!-- <p>Enviando</p> -->
                {:else}
                    <p></p>
                {/if}    
            </div>

            <div id="buttons" class="mx-auto h-28">
                <button class="record text-white"   on:click={record} bind:this={recordButton}><p>Gravar</p>{@html rec_black}</button>
                <button class="stop text-white"     on:click={stop}><p>Parar</p><img width=50 height=50 src="img/stop.png"></button>
            </div>

            <div class="h-28">
                {#if cough == undefined}
                    <div class="text-white">
                        <h1>Tosse: </h1>
                        <h1>COVID: </h1>
                        <!-- <a href={url}>Donwload</a> -->
                    </div>
        
                {:else}
                    <div class="text-white">
                        <h1>Tosse: {cough}</h1>
                        <h1>COVID: {covid}</h1>
                        <!-- <a href={url}>Donwload</a> -->
                    </div>
                {/if}        
        
                <section class="sound-clips">
                    {#each clips as clip}
                        <article class="clip">
                            <p>clip</p>
                            <audio src={clip.src} controls/>
                            <button>Delete</button>
                        </article>
                    {/each}
                </section>
            </div>


            
        </div>
    </div>

</div>
