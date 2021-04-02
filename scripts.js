function item_selecionado_prato(itemselecionado) {
    if (itemselecionado != null){
        alert ("item selecionado");
        const prato_excluido = document.querySelector(".item, .steak_au_gratin")
        prato_excluido.classList.remove("bordaverde");
    }
    const prato = document.querySelector(itemselecionado)
    prato.classList.add("bordaverde");
}

function item_selecionado_bebida(itemselecionado) {
    if (itemselecionado != null){
        alert ("item selecionado");
        const prato_excluido = document.querySelector(".item, .steak_au_gratin")
        prato_excluido.classList.remove("bordaverde");
    }
    const prato = document.querySelector(itemselecionado)
    prato.classList.add("bordaverde");
}

function item_selecionado_sobremesa(itemselecionado) {
    if (itemselecionado != null){
        alert ("item selecionado");
        const prato_excluido = document.querySelector(".item, .steak_au_gratin")
        prato_excluido.classList.remove("bordaverde");
    }
    const prato = document.querySelector(itemselecionado)
    prato.classList.add("bordaverde");
}

function fechar_pedido() {
    alert ("fechar pedido");
    const elemento = document.querySelector(".fecharpedido");
    elemento.classList.add("fecharpedido2");
    const texto = document.querySelector(".paragrafo");
    texto.innerHTML = "Fechar pedido"
}
