button_add = document.getElementById("button_add");
button_add.addEventListener("click", adicionarTarefa);

var elementos = {
    item_event: document.querySelector(".item-event"),
    content_item_event: "content-item-event"
};

function adicionarTarefa(){
    var texto = document.getElementById("to-do-input").value;
    desenharElementoTela(texto);
}

function desenharElementoTela(texto){
    var div_content_item_event = document.createElement("div");
    div_content_item_event.setAttribute("class", elementos.content_item_event);
    elementos.item_event.appendChild(div_content_item_event);

    var input = document.createElement("input");
    input.setAttribute("type", "checkbox");

    label = document.createElement("label").innerText = texto;
        
    div_content_item_event.appendChild(input);
    div_content_item_event.append(label);
    

}


