let tbody=document.createElement("tbody")
let container=document.queryCommandValue(".container")
let counter=document.querySelector("span")
let basket=[]
let basketcount=0
baket=JSON.parse(localStorage.getItem("basket"))??[];
if(basket){
    basket.forEach((element)=>{
        basketcount+=count
        counter.innerText=basketcount;
    });
}
basket=JSON.parse(localStorage.getItem("basket"))
basket.forEach(element=>{
      let tr=document.createElement("tr")
      let tdimg=document.createElement("td")
      let img=document.createElement("img")
      img.setAttribute("src",element.product.img)
      let tdname=document.createElement("td")
      tdname.innerText=element.product.name;
      let tdprice=document.createElement("td")
      tdprice.innerText=element.product.price;
      let tdcount=document.createElement("td")
      tdcount.innerText=`<span>${element.count}</span>`
      tr.appendChild(tdimg)
      tdimg.appendChild(img)
      tr.appendChild(tdname)
      tr.appendChild(tdprice)
      tr.appendChild(tdcount)
      tbody.appendChild(tr)
})