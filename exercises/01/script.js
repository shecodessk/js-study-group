const calculateButton = document.querySelector("button");
const ticket = document.querySelector("#ticket")
const totalCost = document.querySelector("#total");

var itemArrayMore = [];
//-----------------------Event Listeners--------------------------//\

calculateButton.addEventListener('click', addItem);
//-----------------------Functions--------------------------//

function addItem(){
  const articleInput = document.getElementById("description").value;
  const amountInput = document.getElementById("amount").value;
  const itemCost = document.getElementById("unit-cost").value;
  const totalPerArticle = amountInput*itemCost;

  if(document.getElementById("description").value.length == 0)
  {
      alert("Need a item")
      return false;
  }
  if(document.getElementById("amount").value.length == 0)
  {
      alert("Need a quantity")
      return false;
  }
  
  if(document.getElementById("unit-cost").value.length == 0)
  {
      alert("Need a price")
      return false;
  }

  if(document.getElementById("unit-cost").value <= 0)
  {
      alert("Value cannot be 0 or lower")
      return false;
  }

  itemArrayMore.push({
      name: articleInput,
      units: amountInput,
      price: totalPerArticle,
  });
  console.log("New List Array:", itemArrayMore);
  listItemsMore();
  total();

}

function listItemsMore() {
  ticket.innerHTML = "";
  for (let i = 0; i < itemArrayMore.length; i++) {
  ticket.innerHTML += `<li>${itemArrayMore[i].name} x (${itemArrayMore[i].units}) = $${itemArrayMore[i].price}</li>`};
}

function total(){
  for (let i = 0; i < itemArrayMore.length; i++) {
    
    totalCost.innerHTML = `$${itemArrayMore[i].price}`;}
}
