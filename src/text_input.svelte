<script>
    export let frase;
    export let handleClick
    export let placeholder
</script>
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