import { c as create_ssr_component, d as add_attribute, e as escape } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let emocoes = {
    version: 0.1,
    emoções: {
      alegria: 0,
      raiva: 0,
      nojo: 0,
      medo: 0,
      tristeza: 0,
      surpresa: 0,
      carga: 0
    }
  };
  let frase = "Estou com raiva e triste";
  async function click() {
    let url = "https://mario-x4fs6sryfq-rj.a.run.app/?frase=" + frase;
    console.log(url);
    const res = await fetch(url, {
      mode: "cors",
      headers: { dataType: "json" }
    });
    emocoes = await res.json();
    emocoes = emocoes;
  }
  if ($$props.click === void 0 && $$bindings.click && click !== void 0)
    $$bindings.click(click);
  return `<h1>Emoções</h1>

<label><input placeholder="${"first"}"${add_attribute("value", frase, 0)}></label>
<button>Clique </button>

<ul><li>${escape(emocoes.emoções.alegria)}</li>
    <li>${escape(emocoes.emoções.tristeza)}</li>
    <li>${escape(emocoes.emoções.medo)}</li>
    <li>${escape(emocoes.emoções.nojo)}</li>
    <li>${escape(emocoes.emoções.raiva)}</li>
    <li>${escape(emocoes.emoções.surpresa)}</li></ul>

<p>Carga: ${escape(emocoes.emoções.carga)}</p>
<p>${escape(emocoes.version)}</p>
<img src="${"img/mario.png"}" alt="${"Imagem do um homem de bigodes anotando coisas em um caderno e te julgando"}" width="${"200"}" height="${"200"}">`;
});
export {
  Page as default
};
