let prato_selecionado;
let bebida_selecionada;
let sobremesa_selecionada;
let valor_prato_selecionado;
let valor_bebida_selecionada;
let valor_sobremesa_selecionada;
let valor_total_do_pedido;
let nome;
let endereco;


function item_selecionado_prato(itemselecionado, nome_do_item, valor_do_prato) {
    prato_selecionado = nome_do_item;
    valor_prato_selecionado = valor_do_prato;
    let certinho = itemselecionado + "_certinho";
    const prato_excluido = document.querySelector(".pratos .bordaverde");
    const certo_prato_excluido = document.querySelector(".fuiselecionadoprato");
        if (prato_excluido !== null){
        prato_excluido.classList.remove('bordaverde');
        certo_prato_excluido.classList.remove('fuiselecionadoprato');
        certo_prato_excluido.classList.add('escondido');

    }
    const prato = document.querySelector(itemselecionado);
    prato.classList.add("bordaverde");
    const certo_prato = document.querySelector(certinho);
    certo_prato.classList.remove('escondido');
    certo_prato.classList.add('fuiselecionadoprato');
    todas_as_opcoes_selecionadas()
}

function item_selecionado_bebida(itemselecionado, nome_do_item, valor_da_bebida) {
    bebida_selecionada = nome_do_item;
    valor_bebida_selecionada = valor_da_bebida;
    let certinho = itemselecionado + "_certinho";
    const bebida_excluida = document.querySelector(".bebidas .bordaverde");
    const certo_bebida_excluida = document.querySelector(".fuiselecionadobebida")
    if (bebida_excluida !== null){
        bebida_excluida.classList.remove('bordaverde');
        certo_bebida_excluida.classList.remove('fuiselecionadobebida');
        certo_bebida_excluida.classList.add('escondido');
    }
    const bebida = document.querySelector(itemselecionado);
    bebida.classList.add("bordaverde");
    const certo_bebida = document.querySelector(certinho);
    certo_bebida.classList.remove('escondido');
    certo_bebida.classList.add('fuiselecionadobebida');
    todas_as_opcoes_selecionadas()
}

function item_selecionado_sobremesa(itemselecionado, nome_do_item, valor_da_sobremesa) {
    sobremesa_selecionada = nome_do_item;
    valor_sobremesa_selecionada = valor_da_sobremesa;
    let certinho = itemselecionado + "_certinho";
    const sobremesa_excluida = document.querySelector(".sobremesas .bordaverde")
    const certo_sobremesa_excluida = document.querySelector(".fuiselecionadosobremesa")
    if (sobremesa_excluida !== null){
        sobremesa_excluida.classList.remove('bordaverde');
        certo_sobremesa_excluida.classList.remove('fuiselecionadosobremesa');
        certo_sobremesa_excluida.classList.add('escondido');
    }
    const sobremesa = document.querySelector(itemselecionado)
    sobremesa.classList.add("bordaverde");
    const certo_sobremesa = document.querySelector(certinho);
    certo_sobremesa.classList.remove('escondido');
    certo_sobremesa.classList.add('fuiselecionadosobremesa');
    todas_as_opcoes_selecionadas()
}
function todas_as_opcoes_selecionadas() {
    if (prato_selecionado != null && bebida_selecionada != null && sobremesa_selecionada != null) {
    const elemento = document.querySelector(".fecharpedido");
    const completar_pedido = document.querySelector('.fecharpedidoverde');

    elemento.classList.remove ('fecharpedidodisplay');
    elemento.classList.add('escondido');

    completar_pedido.classList.remove ('escondido'); 
    completar_pedido.classList.add ('fecharpedidodisplay')
    }
}
function fechar_pedido(){
    const nome = prompt('Qual o seu nome?');
    const endereco = prompt('Qual o seu endereço?');
     
    const confirma =document.querySelector('.container_confirmar_pedido');
    confirma.classList.remove('escondido');
    confirma.classList.add('display_confirmar_pedido');

    const prato_confirmar = document.querySelector(".prato_confirmar_pedido");
    prato_confirmar.innerHTML = prato_selecionado;
    const valor_prato_confirmar = document.querySelector(".valor_prato_confirmar_pedido");
    valor_prato_confirmar.innerHTML = "R$ "+valor_prato_selecionado;

    const bebida_confirmar = document.querySelector(".bebida_confirmar_pedido");
    bebida_confirmar.innerHTML = bebida_selecionada;
    const valor_bebida_confirmar = document.querySelector(".valor_bebida_confirmar_pedido");
    valor_bebida_confirmar.innerHTML = "R$ " + valor_bebida_selecionada;

    const sobremesa_confirmar = document.querySelector(".sobremesa_confirmar_pedido");
    sobremesa_confirmar.innerHTML = sobremesa_selecionada;
    const valor_sobremesa_confirmar = document.querySelector(".valor_sobremesa_confirmar_pedido");
    valor_sobremesa_confirmar.innerHTML = "R$ " + valor_sobremesa_selecionada;

    const valor_total = document.querySelector(".valor_total_do_pedido");
    let valor_total_dos_itens = parseFloat (valor_prato_selecionado.replace(',','.')) + parseFloat(valor_bebida_selecionada.replace(',','.')) + parseFloat(valor_sobremesa_selecionada.replace(',','.'));
    let valor_arredondado = parseFloat(valor_total_dos_itens.toFixed(2));
    valor_total.innerHTML = "R$ " + valor_arredondado + "0";
    valor_total_do_pedido = valor_total;
}

function cancelar () {
    let cancela = document.querySelector('.container_confirmar_pedido');
    cancela.classList.remove('display_confirmar_pedido');
    cancela.classList.add('escondido');
}
function whatsapp (){
    let texto_whatsapp_saudacao = "Olá, gostaria de fazer o pedido:";
    let texto_whatsapp_prato = "- Prato: " + prato_selecionado;
    let texto_whatsapp_bebida = "- Bebida: " + bebida_selecionada;
    let texto_whatsapp_sobremesa = "- Sobremesa: " + sobremesa_selecionada;
    let texto_whatsapp_valor_total = "Total: R$ " + valor_total_do_pedido;
    let texto_whatsapp_nome = "Nome: " + nome;
    let texto_whatsapp_endereco = "Endereço: " + endereco;
    texto_whatsapp = texto_whatsapp_saudacao  + texto_whatsapp_prato + texto_whatsapp_bebida + texto_whatsapp_sobremesa + texto_whatsapp_valor_total + texto_whatsapp_nome + texto_whatsapp_endereco;
    const texto = encodeURI(texto_whatsapp);
    const site = "https://wa.me/5521969217949?text=" + texto;
    window.location.href = site;
}


