function item_selecionado() {
    alert ("item selecionado");
	let elemento = document.querySelector(".item");
    elemento.classList.add("bordaverde");
}

function fechar_pedido() {
    alert ("fechar pedido");
    const elemento = document.querySelector(".fecharpedido");
    elemento.classList.add("fecharpedido2");
    const texto = document.querySelector(".paragrafo");
    texto.innerHTML = "Fechar pedido"
}
