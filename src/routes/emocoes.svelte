<script lang='ts'>
    export let alegria:string;
    export let tristeza:string;
    export let medo:string;
    export let nojo:string;
    export let raiva:string;
    export let surpresa:string;
    export let scaleFactor:string;
</script>

<div class="dark:text-white flex flex-row flex-wrap lg:flex-no-wrap py-16 justify-center">
    <span class="flex-col px-4" style="scale: {Number(alegria) + Number(scaleFactor)}">
        <h2>Alegria</h2>
        <img class="" src="img/noto_grinning-face-with-smiling-eyes.svg" alt="Emoji sorrindo">
        <p>{( Number(alegria) * 100).toFixed(2)}%</p>
        <!-- {console.log(Number(alegria))} -->
    </span>
    <span class="flex-col px-4" style="scale: { Number(tristeza) + Number(scaleFactor)}" >
        <h2>Tristeza</h2>
        <img src="img/noto_disappointed-face.svg" alt="Emoji triste">
        <p>{( Number(tristeza) * 100).toFixed(2)}%</p>
    </span>
    <span class="flex-col px-4" style="scale: { Number(medo) + Number(scaleFactor)}">
        <h2>Medo</h2>
        <img src="img/noto_anxious-face-with-sweat.svg" alt="Emoji com cara de assustado"> 
        <p>{( Number(medo) * 100).toFixed(2)}%</p>
    </span>
    <span class="flex-col px-4" style="scale: { Number(nojo) + Number(scaleFactor)}">
        <h2>Nojo</h2>
        <img src="img/noto_nauseated-face.svg" alt="Emoji enjoado">
        <p>{( Number(nojo) * 100).toFixed(2)}%</p>
    </span>
    <span class="flex-col px-4" style="scale: { Number(raiva) + Number(scaleFactor) }" >
        <h2>Raiva</h2>
        <img src="img/noto_enraged-face.svg" alt="Emoji com raiva">
        <p>{( Number(raiva) * 100).toFixed(2)}%</p>
    </span>
    <span class="flex-col px-4" style="scale: { Number(surpresa) + Number(scaleFactor)}">
        <h2>Surpresa</h2>
        <img src="img/noto_astonished-face.svg" alt="Emoji surpreso">
        <p>{( Number(surpresa) * 100).toFixed(2)}%</p>
    </span>
</div>