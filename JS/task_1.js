const divCont = document.getElementById("container");
const divAlert = document.createElement("div");
const addButton = document.getElementById("add-item-btn");
const closeButton = document.getElementById("close-btn");

function onButtonClick() { 
    divAlert.innerHTML = '<p>Какое-то очень важное уведомление!  ˁ(🔲-🔲ᐟ)ˀ</p><input id="close-btn" class="close-btn" type="button" value="Закрыть">';
    divAlert.className = "div-alert";
    divCont.appendChild(divAlert); 

    const closeButton = document.getElementById("close-btn");
    closeButton.onclick = function() {
        divAlert.remove();
        clearTimeout(closeTimer);
    };

    const closeTimer = setTimeout(function() {
        divAlert.remove();
        }, 5000);    
};

addButton.addEventListener('click', onButtonClick);

