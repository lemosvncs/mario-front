<script>
    import Header from "../../header.svelte";
    // import Quest from "../../quest.svelte";
    import Reinaldo from "../../reinaldo.svelte";
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
    <Reinaldo/>
    </div>
