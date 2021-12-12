window.addEventListener("load", function () {
    //Konstante Variable für das Eingabefeld festlegen
    var input = document.getElementById("toDo");
    //Elemtent mit der Id todoWrapper wird herausgesucht und als Variable abgelegt
    var wrapper = document.getElementById("todoWrapper");
    //Variable in der die Anzahl der Tasks gespeichert wird
    var todoCount = 0;
    //mit einem Eventlistener prüfen ob Enter gedrückt wurde 
    //Eventlistener wird an Input angefügt -> nur wenn man sich in der Textbox befindet und Enter drückt, wird die Aufgabe in die Liste übernommen
    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            createToDo();
            clearInput();
        }
    });
    // Wert für Counter wird auf Wert von todoCount gesetzt
    function updateCounter() {
        document.querySelector("#counterToDos").innerHTML = String(todoCount);
    }
    // Eingabefeld leeren wenn auf Trash Button gedrückt wird
    function clearInput() {
        input.value = "";
    }
    function createToDo() {
        //Counter wird hochgezählt wenn Aufgabe in die Liste gefügt wird
        todoCount++;
        updateCounter();
        // Vier HTML ELemente werden created
        var todoItem = document.createElement("div");
        var checkbox = document.createElement("input");
        var label = document.createElement("label");
        var trashButton = document.createElement("i");
        // an das todoItem wird die Classe "todoItem" hinzugefügt
        todoItem.className = "todoItem";
        //für die Checkbox wird der Typ "checkbox" definiert
        checkbox.type = "checkbox";
        //der Checkbox wird die Klasse "checkbox" hinzugefügt
        checkbox.className = "checkBox";
        // die Eingabe im Eingabefeld wird als label Inhalt gesetzt
        label.innerHTML = input.value;
        // dem label wird die Klasse "divlabel" hinzugefügt
        label.className = "divLabel";
        // dem Trash Button wird die Klasse "fas fa-trash-alt" hinzugefügt
        trashButton.className = "fas fa-trash-alt";
        // dem wrapper wird das zuvor erzeugte Element "todoItem" angehängt
        wrapper.appendChild(todoItem);
        // dem todoItem wird das Element "checkbox" angehängt
        todoItem.appendChild(checkbox);
        // dem todoItem wird das Element "label" angehängt
        todoItem.appendChild(label);
        // dem TodoITem wird das Element "trashbutton" angehängt
        todoItem.appendChild(trashButton);
        // Eventlistener wird dem Trashbutton hinzugefügt, sobal dieser geklickt wird, wird die Aufgabe aus der Liste gelöscht
        trashButton.addEventListener("click", function () {
            deleteItem(todoItem);
        });
    }
    function deleteItem(item) {
        //HTML ELement wird aus Wrapper entfernt
        wrapper.removeChild(item);
        // Counter wird um 1 verringert wenn der Trash Button gedrückt wird
        todoCount--;
        updateCounter();
    }
});
//# sourceMappingURL=script.js.map