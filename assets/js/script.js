button_add = document.getElementById("button_add");
button_add.addEventListener("click", adicionarTarefa);

var array = [];

const ElementosHTML = {
    item_event: document.querySelector(".item-event"),
    content_item_event: "content-item-event"
};

function adicionarTarefa() {
    var texto = document.getElementById("to-do-input").value;
    // zerar o valor
    document.getElementById("to-do-input").value = "";

    // verificar se ele é nulo
    if (texto == "") {
        window.alert("Não tem nada na tarefa");
        return;
    }
    // verificar se ja existe a tarefa
    for (var i = 0; i < array.length; i++) {
        if (array[i] == texto) {
            window.alert("Você não pode adicionar a mesma tarefa");
            return;
        }
    }
    array.push(texto);
    desenharElementoTela(texto);
}

function desenharElementoTela(texto) {
    document.querySelector(".to-do-list-event").style.visibility  = "visible";
    var div_content_item_event = document.createElement("div");

    div_content_item_event.setAttribute("class", ElementosHTML.content_item_event);
    ElementosHTML.item_event.appendChild(div_content_item_event);

    var input = document.createElement("input");

    input.setAttribute("type", "checkbox");
    input.setAttribute("class", "checkbox");

    var tarefa = document.createElement("tarefa");

    tarefa.setAttribute("class", 'tarefa_event');
    tarefa.innerHTML = texto;

    div_content_item_event.appendChild(input);
    div_content_item_event.appendChild(tarefa);

    // adiciona o evento de checkbox
    input.addEventListener("change", function () {
        if (input.checked) {
            tarefa.style.textDecoration = "line-through";
        }
        else {
            tarefa.style.textDecoration = "none";
        }
    });

}
