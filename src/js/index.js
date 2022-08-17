/* 



OBJETIVO 1: temos que trocar o cartão toda vez que se clica na seta
    pegar elemento do cartão
*/

const btn_avancar = document.getElementById("btn-avancar");
const btn_voltar = document.getElementById("btn-voltar");

const cartoes = document.querySelectorAll(".cartao");
var cartao_atual = 0;

btn_avancar.addEventListener("click", function()
{
    cartao_seguinte();
});

btn_voltar.addEventListener("click",function()
{
    cartao_anterior();
})

function cartao_seguinte()
{
    if(cartao_atual === cartoes.length - 1)
    {
        return
    }

    cartoes[cartao_atual].classList.remove('selecionado');
    cartao_atual++;
    cartoes[cartao_atual].classList.add('selecionado');
    cartao_selecionado = cartoes[cartao_atual];
}

function cartao_anterior()
{
    if(cartao_atual === 0)
    {
        return
    }

    cartoes[cartao_atual].classList.remove('selecionado');
    cartao_atual--;
    cartoes[cartao_atual].classList.add('selecionado');
    cartao_selecionado = cartoes[cartao_atual]
}
