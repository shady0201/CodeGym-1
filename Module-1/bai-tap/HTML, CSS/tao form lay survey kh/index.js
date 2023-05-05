var selectedElement = document.getElementById("myage");
selectedElement.addEventListener("change",changeFunction);

function changeFunction(){
    var selectedValue = document.getElementById("myage").value;
    alert(selectedValue);
}