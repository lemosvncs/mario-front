import { c as create_ssr_component, e as escape, v as validate_component, i as is_promise, n as noop, d as add_attribute } from "../../../chunks/index.js";
import { H as Header, I as Icon } from "../../../chunks/Icon.js";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons/faAnglesDown";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
const Emocoes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { alegria } = $$props;
  let { tristeza } = $$props;
  let { medo } = $$props;
  let { nojo } = $$props;
  let { raiva } = $$props;
  let { surpresa } = $$props;
  let { scaleFactor } = $$props;
  if ($$props.alegria === void 0 && $$bindings.alegria && alegria !== void 0)
    $$bindings.alegria(alegria);
  if ($$props.tristeza === void 0 && $$bindings.tristeza && tristeza !== void 0)
    $$bindings.tristeza(tristeza);
  if ($$props.medo === void 0 && $$bindings.medo && medo !== void 0)
    $$bindings.medo(medo);
  if ($$props.nojo === void 0 && $$bindings.nojo && nojo !== void 0)
    $$bindings.nojo(nojo);
  if ($$props.raiva === void 0 && $$bindings.raiva && raiva !== void 0)
    $$bindings.raiva(raiva);
  if ($$props.surpresa === void 0 && $$bindings.surpresa && surpresa !== void 0)
    $$bindings.surpresa(surpresa);
  if ($$props.scaleFactor === void 0 && $$bindings.scaleFactor && scaleFactor !== void 0)
    $$bindings.scaleFactor(scaleFactor);
  return `<div class="${"dark:text-white flex flex-row flex-wrap lg:flex-no-wrap py-16 justify-center"}"><span class="${"flex-col px-4 text-center"}" style="${"scale: " + escape(Number(alegria) + Number(scaleFactor), true)}"><h2>Alegria</h2>
        <img class="${"mx-auto"}" src="${"img/noto_grinning-face-with-smiling-eyes.svg"}" alt="${"Emoji sorrindo"}">
        <p>${escape((Number(alegria) * 100).toFixed(2))}%</p>
        </span>
    <span class="${"flex-col px-4 text-center"}" style="${"scale: " + escape(Number(tristeza) + Number(scaleFactor), true)}"><h2>Tristeza</h2>
        <img class="${"mx-auto"}" src="${"img/noto_disappointed-face.svg"}" alt="${"Emoji triste"}">
        <p>${escape((Number(tristeza) * 100).toFixed(2))}%</p></span>
    <span class="${"flex-col px-4 text-center"}" style="${"scale: " + escape(Number(medo) + Number(scaleFactor), true)}"><h2>Medo</h2>
        <img class="${"mx-auto"}" src="${"img/noto_anxious-face-with-sweat.svg"}" alt="${"Emoji com cara de assustado"}"> 
        <p>${escape((Number(medo) * 100).toFixed(2))}%</p></span>
    <span class="${"flex-col px-4 text-center"}" style="${"scale: " + escape(Number(nojo) + Number(scaleFactor), true)}"><h2>Nojo</h2>
        <img class="${"mx-auto"}" src="${"img/noto_nauseated-face.svg"}" alt="${"Emoji enjoado"}">
        <p>${escape((Number(nojo) * 100).toFixed(2))}%</p></span>
    <span class="${"flex-col px-4 text-center"}" style="${"scale: " + escape(Number(raiva) + Number(scaleFactor), true)}"><h2>Raiva</h2>
        <img class="${"mx-auto"}" src="${"img/noto_enraged-face.svg"}" alt="${"Emoji com raiva"}">
        <p>${escape((Number(raiva) * 100).toFixed(2))}%</p></span>
    <span class="${"flex-col px-4 text-center"}" style="${"scale: " + escape(Number(surpresa) + Number(scaleFactor), true)}"><h2>Surpresa</h2>
        <img class="${"mx-auto"}" src="${"img/noto_astonished-face.svg"}" alt="${"Emoji surpreso"}">
        <p>${escape((Number(surpresa) * 100).toFixed(2))}%</p></span></div>`;
});
let texto_feedback_pos = "Acertou";
let texto_feedback_neg = "Errou";
let placeholder = "Escreva uma frase e clique em enviar";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let paperPlane = faPaperPlane;
  let hideButtonIcon = faAnglesDown;
  let spinner = faSpinner;
  let hideButtonText = "Saiba mais";
  let frase = "";
  let promise = getEmocao("");
  async function getEmocao(frase2) {
    let url = "https://mario-x4fs6sryfq-rj.a.run.app/?frase=" + frase2;
    console.log(url);
    const res = await fetch(url, {
      mode: "cors",
      headers: { dataType: "json" }
    });
    const mariores = await res.json();
    if (res.ok) {
      let mario = mariores;
      estado_botao = true;
      return mario;
    } else {
      throw new Error(mariores);
    }
  }
  let estado_botao = true;
  return `<div class="${"dark bg-black container min-w-full min-h-full"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
    <div class="${"container mx-auto px-10"}"><div class="${"py-12 mx-auto"}">

            <div class="${"flex justify-center mb-10"}"><img class="${"rounded-full w-60 h-60 border-white border-4"}" src="${"img/mario.png"}" alt="${"Imagem do um homem de bigodes anotando coisas em um caderno e te julgando"}" width="${"200"}" height="${"200"}">
                </div>

            <div class="${"text-white"}">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
                    <div class="${"text-center animate-spin"}">${validate_component(Icon, "Icon").$$render($$result, { icon: spinner }, {}, {})}</div>
                    ${validate_component(Emocoes, "Emocoes").$$render(
        $$result,
        {
          alegria: "0.0",
          tristeza: "0.0",
          medo: "0.0",
          nojo: "0.0",
          raiva: "0.0",
          surpresa: "0.0",
          scaleFactor: "1.0"
        },
        {},
        {}
      )}
                    <div class="${"mb-6 dark: bg-black"}"><label class="${"inline-flex w-full"}"><input${add_attribute("placeholder", placeholder, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${add_attribute("value", frase, 0)}>
    
                                <button type="${"button"}" class="${"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"}">${validate_component(Icon, "Icon").$$render($$result, { icon: paperPlane }, {}, {})}
                                        </button></label></div>
                    <div class="${"container grid place-items-center py-4 text-white"}"><div class="${"flex flex-row"}"><button class="${"p-2 mr-2 rounded-lg opacity-20 border-white border-2 bg-slate-900 hover:bg-slate-500 active:bg-green-900"}">${escape(texto_feedback_pos)}</button>
                            <button class="${"p-2 ml-2 rounded-lg opacity-20 border-white border-2 bg-slate-900 hover:bg-slate-500 active:bg-green-900"}">${escape(texto_feedback_neg)}</button></div></div>

                `;
    }
    return function(mario) {
      return `
                    <div class="${"text-center opacity-0"}">${validate_component(Icon, "Icon").$$render($$result, { icon: spinner }, {}, {})}</div>
                    ${validate_component(Emocoes, "Emocoes").$$render(
        $$result,
        {
          alegria: mario.mario.emocoes.alegria,
          tristeza: mario.mario.emocoes.tristeza,
          medo: mario.mario.emocoes.medo,
          nojo: mario.mario.emocoes.nojo,
          raiva: mario.mario.emocoes.raiva,
          surpresa: mario.mario.emocoes.surpresa,
          scaleFactor: "0.8"
        },
        {},
        {}
      )}
                                <div class="${"mb-6 dark: bg-black"}"><label class="${"inline-flex w-full"}"><input${add_attribute("placeholder", placeholder, 0)} class="${"mr-4 mb-2 dark:border-white dark:border-2 dark:bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${add_attribute("value", frase, 0)}>
                
                                            <button type="${"button"}" class="${"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"}">${validate_component(Icon, "Icon").$$render($$result, { icon: paperPlane }, {}, {})}
                                                    </button></label></div>
                                ${estado_botao === true ? `<div class="${"container grid place-items-center py-4 text-white"}"><div class="${"flex flex-row"}"><button class="${"p-2 mr-2 rounded-lg border-white border-2 bg-slate-900 hover:bg-slate-500 active:bg-green-900"}">${escape(texto_feedback_pos)}</button>
                                            <button class="${"p-2 ml-2 rounded-lg border-white border-2 bg-slate-900 hover:bg-slate-500 active:bg-green-900"}">${escape(texto_feedback_neg)}</button></div></div>` : ``}
                                ${estado_botao === false ? `<div class="${"container grid place-items-center py-4 text-white"}"><div class="${"flex flex-row"}"><button class="${"p-2 mr-2 rounded-lg opacity-20 border-white border-2 bg-slate-900 hover:bg-slate-500 active:bg-green-900"}">${escape(texto_feedback_pos)}</button>
                                            <button class="${"p-2 ml-2 rounded-lg opacity-20 border-white border-2 bg-slate-900 hover:bg-slate-500 active:bg-green-900"}">${escape(texto_feedback_neg)}</button></div></div>` : ``}
                `;
    }(__value);
  }(promise)}</div>

        

        </div>
        <div class="${"container grid place-items-center"}"><button class="${"text-white"}">${escape(hideButtonText)} ${validate_component(Icon, "Icon").$$render($$result, { icon: hideButtonIcon }, {}, {})}</button></div>
        
        
        
        
        ${``}</div>
    This is the end.
</div>`;
});
export {
  Page as default
};
