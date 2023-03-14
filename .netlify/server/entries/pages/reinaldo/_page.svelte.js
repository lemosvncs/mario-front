import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/index.js";
import { I as Icon, H as Header } from "../../../chunks/Icon.js";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
let placeholder = "1";
let inputstyle = "mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block              p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
const Reinaldo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let paperPlane = faPaperPlane;
  let idade;
  let peso;
  let altura;
  let exc_dias_por_semana;
  let reinaldo = 0;
  return `<div class="${"mx-auto text-center"}"><p>Probabilidade de você <b>NÃO</b> ser diagnosticado com hipertensão:</p>
    <h2 class="${"text-2xl"}">${escape(reinaldo.toFixed(2) * 100)}%</h2></div>

<div class="${"px-8"}"><form class="${"flex-column w-full max-w-md"}"><p>Qual sua idade?</p><input placeholder="${"48"}"${add_attribute("class", inputstyle, 0)}${add_attribute("value", idade, 0)}>
        <p class="${"my-4"}">Como você se identifica?</p>    
        <div class="${"flex"}"><label class="${"m-2"}"><input${add_attribute("value", "mulher", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Mulher</p></label>
            <label class="${"m-2"}"><input${add_attribute("value", "homem", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Homem</p></label>
            <label class="${"m-2"}"><input${add_attribute("value", "outro", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Outro</p></label></div>
        <p class="${"my-4"}">Qual seu peso em Kg?:</p><input placeholder="${"80"}"${add_attribute("class", inputstyle, 0)}${add_attribute("value", peso, 0)}>
        <p class="${"my-4"}">Qual sua altura em centímetros?</p><input placeholder="${"180"}"${add_attribute("class", inputstyle, 0)}${add_attribute("value", altura, 0)}>
        <p class="${"my-4"}">Em quantos dias da semana você costuma praticar exercícios físicos ou esporte?</p><input placeholder="${"2"}"${add_attribute("class", inputstyle, 0)}${add_attribute("value", exc_dias_por_semana, 0)}>    
        <p class="${"my-4"}">Qual o exercicio físico ou esporte que você pratica com mais frequência?</p>
        <div class="${"flex flex-col"}"><label class="${"m-2 flex inline-flex"}"><input${add_attribute("value", "caminhada", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Caminhada</p></label>
            <label class="${"m-2 flex inline-flex"}"><input${add_attribute("value", "caminhada_esteira", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Caminhada em esteira</p></label>
            <label class="${"m-2 flex inline-flex"}"><input${add_attribute("value", "corrida", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Corrida</p></label>
            <label class="${"m-2 flex inline-flex"}"><input${add_attribute("value", "musculacao", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Musculação</p></label>
            <label class="${"m-2 flex inline-flex"}"><input${add_attribute("value", "ginastica_aerobica", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Ginástica aeróbica/spinning/step/jump</p></label>
            <label class="${"m-2 flex inline-flex"}"><input${add_attribute("value", "hidro", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Hidroginástica</p></label>
            <label class="${"m-2 flex inline-flex"}"><input${add_attribute("value", "ginastica", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Ginástica / localizada/pilates/alongamento/ioga</p></label>
            <label class="${"m-2 flex inline-flex"}"><input${add_attribute("value", "natacao", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Natação</p></label>
            <label class="${"m-2 flex inline-flex"}"><input${add_attribute("value", "luta", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Artes marciais e luta</p></label>
            <label class="${"m-2 flex inline-flex"}"><input${add_attribute("value", "bicicleta", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Bicicleta/bicicleta ergométrica</p></label>
            <label class="${"m-2 flex inline-flex"}"><input${add_attribute("value", "futebol", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Futebol</p></label>
            <label class="${"m-2 flex inline-flex"}"><input${add_attribute("value", "basquete", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Basquetebol</p></label>
            <label class="${"m-2 flex inline-flex"}"><input${add_attribute("value", "volei", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Voleibol</p></label>
            <label class="${"m-2 flex inline-flex"}"><input${add_attribute("value", "tenis", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Tênis</p></label>
            <label class="${"m-2 flex inline-flex"}"><input${add_attribute("value", "danca", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Dança (com o objetivo de praticar atividade física)</p></label>
            <label class="${"m-2 flex inline-flex"}"><input${add_attribute("value", "outro", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Outro</p></label></div>
        <p class="${"my-4"}">Você fuma ou já fumou algum produto de tabaco?</p>
        <div class="${"flex"}"><label class="${"m-2"}"><input${add_attribute("value", "sim", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Sim</p></label>
            <label class="${"m-2"}"><input${add_attribute("value", "nao", 0)} type="${"radio"}"${add_attribute("placeholder", placeholder, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${add_attribute("checked", true, 1)}>
                <p>Não</p></label></div>
        ${``}
        <p class="${"my-4"}">Você já foi diagnosticado com algum tipo de doença mental, como ansiedade ou depressão?</p>
        <div class="${"flex"}"><label class="${"m-2"}"><input${add_attribute("value", 0, 0)} type="${"radio"}"${add_attribute("placeholder", placeholder, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Sim</p></label>
            <label class="${"m-2"}"><input${add_attribute("value", 1, 0)} type="${"radio"}"${add_attribute("placeholder", placeholder, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Não</p></label></div>
        <p class="${"my-4"}">Você já foi diagnosticado colesterol alto?</p>
        <div class="${"flex"}"><label class="${"m-2"}"><input${add_attribute("value", 0, 0)} type="${"radio"}"${add_attribute("placeholder", placeholder, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Sim</p></label>
            <label class="${"m-2"}"><input${add_attribute("value", 1, 0)} type="${"radio"}"${add_attribute("placeholder", placeholder, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${""}>
                <p>Não</p></label></div>
        <div class="${"flex inline-flex mt-4"}"><button type="${"button"}" class="${"w-64 h-16 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"}">${validate_component(Icon, "Icon").$$render($$result, { icon: paperPlane }, {}, {})}
                Enviar
            </button></div></form>
    sv
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"dark bg-black container min-w-full min-h-full text-white"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
    <div class="${"container mx-auto px-10 py-12"}"><div class="${"flex justify-center mb-10"}"><img class="${"rounded-full w-60 h-60 border-white border-4"}" src="${"img/reinaldo3.png"}" alt="${"Imagem do um homem de bigodes anotando coisas em um caderno e te julgando"}" width="${"200"}" height="${"200"}">
            </div></div>
        ${validate_component(Reinaldo, "Reinaldo").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
