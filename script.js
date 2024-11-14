var document;
var window;

//gets all modals and stores them in an array called modalNode
var modalNode = document.getElementsByClassName("modal");
//gets all buttons and stores them in an array called dropbtnNode
var dropbtnNode = document.getElementsByClassName("dropbtn");

//var spanNode = document.getElementsByClassName("close");
//when the user clioks the button, the corresponding modal opens
function setDataIndex() {

    for (var i = 0; i < dropbtnNode.length; i++) {
        dropbtnNode[i].setAttribute('data-index', i);
        modalNode[i].setAttribute('data-index', i);
        //spanNode[i].setAttribute('data-index', i);
    }
}

for (var i = 0; i < dropbtnNode.length; i++) {
    dropbtnNode[i].onclick = function() {
        var ElementIndex = this.getAttribute('data-index');
        modalNode[ElementIndex].style.display = "block";
    };

    //When the user clickjs on the <span> (x), close modal
    //spanNode.onclick = function() {
    //let ElementIndex = this.getAttribute('data-index');
    //modalNode[ElementIndex].style.display = "none";
    //};
}

window.onload = function() {
    setDataIndex();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modalNode[event.target.getAttribute('data-index')]) {
        modalNode[event.target.getAttribute('data-index')].style.display = "none";
    }
};