count = JSON.parse(localStorage.getItem("count"))
let sup = document.querySelector("sup")
sup.innerText = count
let container = document.querySelector(".container");
let tbody = document.querySelector("tbody")
tbody.classList.add(".bodyclass")


basket = JSON.parse(localStorage.getItem("basket"))
basket.forEach(element => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td")
    let img = document.createElement("img")
    img.setAttribute("src", element.product.img)
    img.style.width = "30%"
    let td3 = document.createElement("td");
    td3.innerText = element.product.name;
    let td4 = document.createElement("td");
    td4.innerText = element.product.price;
    let td5 = document.createElement("td");
    td5.innerHTML = `<span class="left">  <i class="fa-solid fa-circle-minus" id="leftbutton">   </i>  </span><span class="counter" >${element.count}</span><span class="right" id ="rightbutton">  <i class="fa-solid fa-circle-plus">   </i>   </span>`;
    let span1 = document.querySelector(".left")
    let span2 = document.querySelector(".right")
    tbody.classList.add(".bodyclass")

    tr.appendChild(td1);
    td1.appendChild(td2)
    td2.appendChild(img)
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tbody.appendChild(tr);
    let counter=document.querySelector(".counter")
    console.log(counter);
    let leftbutton = document.querySelector("#leftbutton")
    let rightbutton = document.querySelector("#rightbutton")
    const inputField = document.getElementById('input');
    
    leftbutton.addEventListener('click', event => {
      event.preventDefault();
      let count1 = Number(counter);
      inputField.value = count1 - 1;
    });
    
    rightbutton.addEventListener('click', event => {
      event.preventDefault();
      let count1 = Number(counter);
      couter = count1 + 1;
    });
    })