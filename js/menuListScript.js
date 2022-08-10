function handleMenuTextClick(type) {
  var suzukiType = document.querySelector(`${type}`);
  suzukiType.classList.toggle("show");

  var menuPlusIcon = document.querySelector(".sp-plus-icon");
  var menuMinusIcon = document.querySelector(".sp-minus-icon");
  menuPlusIcon.classList.toggle("hide");
  menuMinusIcon.classList.toggle("show");
}

function handleMenuSubTextClick(type) {
  var suzukiType = document.querySelector(`${type}`);
  suzukiType.classList.toggle("show");
}

function handleMenuItemClick(item) {
  document.getElementById("selected-item").innerHTML = item;
}

var selectedItemValue = localStorage.getItem("selectedItem");
document.getElementById("selected-item").innerHTML = selectedItemValue;
