let add_to_card = document.getElementsByClassName("btn-primary");
let main_container = document.getElementsByTagName("tbody")[0];
let quantity_feild = document.getElementsByClassName("num");
let remove_btn = document.getElementsByClassName("btn-danger");

for(let i = 0; i < add_to_card.length; i++){
    add_to_card[i].addEventListener("click" , addTocard)
}

function addTocard(event){
  let btn = event.target
  let parent = btn.parentElement;
  let btn_parent = btn.parentElement.parentElement;
  let name = parent.children[0].innerText;
  let img = btn_parent.children[0].src;
  let price = parent.children[1].innerText;
  let item_container = document.createElement("tr");
  item_container.innerHTML = `
  <td id="im"><img src="${img}" alt=""></td>
  <td class="name">${name}</td>
  <td class="pric"><h3>${price}</h3></td>
  <td><button class="btn-danger" id="remo">Remove</button></td>
<td scope="col"><input class="num" type="number" value="1"></td>
  <td scope="col" class="totalprice"><h3>${price}</h3></td>
  
  `  
  main_container.append(item_container);
  for(let i = 0; i < quantity_feild.length; i++){
    quantity_feild[i].addEventListener("click" , updatetotal)
  }
  grandtotal();

  for(let i = 0; i < remove_btn.length; i++){
    remove_btn[i].addEventListener("click" , removeItem)
}
}

function updatetotal(event){
number_item = event.target;
number_item_parent = number_item.parentElement.parentElement;
price_feild =number_item_parent.getElementsByClassName("pric")[0];
total_price =number_item_parent.getElementsByClassName("totalprice")[0];
price_feild_content = price_feild.children[0].innerText.replace("RS:" , "");
total_price.children[0].innerText = "RS:" + number_item.value * price_feild_content;
if (isNaN(number_item.value) || number_item.value < 0){
  number_item.value = 0
}
grandtotal()
}

function grandtotal(){
  total = 0;
  let grand_total = document.getElementsByClassName("grand_total")[0];
  let total_prices = document.getElementsByClassName("totalprice");
  for(let i = 0 ; i < total_prices.length ; i++){
    total_price_content = Number(total_prices[i].innerText.replace("RS:" , ""));
    total += total_price_content;
  }
   grand_total.children[0].innerText = "RS" + total;
}

function removeItem(event){
    remove = event.target;
   remove_parent = remove.parentElement.parentElement.remove();
   grandtotal()
  //  remove_parent.remove();
}