// var itemsArray = [
//     {name:'juice',price:50, quantity:3},
//     {name:'cookie',price:30, quantity:9},
//     {name:'shirt',price:880, quantity:1},
//     {name:'pen',price:100, quantity:2}
// ];

function StoreItem(name,price,quantity){
    this.name=name;
    this.price=price;
    this.quantity=quantity;
}
StoreItem.prototype.totalitem=function(){
    var total = this.price * this.quantity
    return(total);
    
}

   
   var Item1 = new StoreItem('juice',50,3)
   var Item2 = new StoreItem('cookie',30,9)
   var Item3 = new StoreItem('shirt',880,1)
   var Item4 = new StoreItem('pen',100,2)

//    console.log(Item1.totalitem());
   document.getElementById("ItemName1").innerText=Item1.name
   document.getElementById("ItemName2").innerText=Item2.name
   document.getElementById("ItemName3").innerText=Item3.name
   document.getElementById("ItemName4").innerText=Item4.name
   
   document.getElementById("price1").innerText=Item1.price
   document.getElementById("price2").innerText=Item2.price
   document.getElementById("price3").innerText=Item3.price
   document.getElementById("price4").innerText=Item4.price

   document.getElementById("quantity1").innerText=Item1.quantity
   document.getElementById("quantity2").innerText=Item2.quantity
   document.getElementById("quantity3").innerText=Item3.quantity
   document.getElementById("quantity4").innerText=Item4.quantity

   document.getElementById("totalitem1").innerText=Item1.totalitem()
   document.getElementById("totalitem2").innerText=Item2.totalitem()
   document.getElementById("totalitem3").innerText=Item3.totalitem()
   document.getElementById("totalitem4").innerText=Item4.totalitem()

   document.getElementById("alltotalitem").innerText=Item4.totalitem()+Item3.totalitem()+Item2.totalitem()+Item1.totalitem()

 
