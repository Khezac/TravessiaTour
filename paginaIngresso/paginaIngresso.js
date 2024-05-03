const usuario = document.getElementById("nome")
const form = document.getElementById("formulario-ingresso")
form.addEventListener('submit', comprarIngresso);

var select = document.getElementsByClassName("dias")

function comprarIngresso(e){
    e.preventDefault()
    const div = document.createElement("div");
    div.className = "aviso";
    div.innerHTML = `<p>${usuario.value}, seu passeio foi agendado com sucesso!!</p>`;

    form.append(div);

    setTimeout(() => {
        div.remove()
        // form.submit()
    }, 2000);
};

function precoPasseio(){
    const divPreco = document.getElementsByClassName("preco")

    console.log(divPreco)

    var checked;
    var preco;

    for(i = 0; i < select.length; i++){
        if(select[i].checked){
            checked = select[i]
        }
    }

    if(checked.value == 2){
        preco = 200.00
    } else if(checked.value == 3){
        preco = 250.00
    }

    const div = document.createElement("div");

    div.className = "preco";
    div.innerHTML = `<label id="valor-label" for="passeio-valor">Valor: R$</label><input id="passeio-valor" name="passeio-valor" type="text" readonly value="${preco.toFixed(2)}"></input>`;
    form.append(div);

    if(preco){
        divPreco[0].remove();
        form.append(div);
    }
}