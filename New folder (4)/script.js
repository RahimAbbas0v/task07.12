
let container=document.querySelector(".container")
let row=document.querySelector(".row")
const products=[
	
	phone1={
		id:1,
		name:"Iphone 14 Pro",
		price:"1500$",
		img:"https://pricebey.com/wp-content/uploads/2021/11/Apple-iPhone-14-Pro-Max.jpg",
		
	},

	phone2={
		id:2,
		name:"Iphone 13 Pro",
		price:"1200$",
		img:"https://phonesstorekenya.com/wp-content/uploads/2021/09/Apple-iPhone-13-Pro-Max-b-768x768.jpg"
		
	},
	phone3={
		id:3,
		name:"Iphone 12 Pro",
		price:"1000$",
		img:"https://assets-global.website-files.com/5cb49305f78568899df7dc13/5fa3dc75d464fe2caa320d5f_iphone-12-pro-max-gold-min.png"

	}
]
localStorage.setItem("products",products)
products.forEach(element => {
	let place = document.querySelector(".container .row")
	place.innerHTML += `<div class="col-4 d-flex">
	<div class="card px-5" style="width: 18rem;">
	  <img src="${element.img}"
		style="padding-top:1.rem ;" class="card-img-top" alt="...">
	  <div class="card-body">
		<h5 class="card-title" style="padding-top:1.4rem ;">${element.name}</h5>
		<a href="#" class="btn btn-primary" id="btn12">Add Product</a>
	  </div>
	</div>
  </div>`
});
let count=0;
let basket=[]
let sup=document.querySelector("sup")
container.addEventListener("click",function(e){
	e.preventDefault()
	count++
	if(e.target.className=="btn btn-primary"){
		if(basket.some((x) => x.product.name == phone1.name)){
			basket.forEach((elem)=> {
				if(elem.product.name==phone1.name){
					elem.count++;
					return;
				}
			})
		}
		else{
			let newitem={
				product:phone1,
				count:1
			}
			basket.push(newitem)
		}
		if(basket.some((x) => x.product.name == phone2.name)){
			basket.forEach((elem)=> {
				if(elem.product.name==phone2.name){
					elem.count++;
					return;
				}
			})
		}
		else{
			let newitem={
				product:phone2,
				count:1
			}
			basket.push(newitem)
		}
		if(basket.some((x) => x.product.name == phone3.name)){
			basket.forEach((elem)=> {
				if(elem.product.name==phone3.name){
					elem.count++;
					return;
				}
			})
		}
		else{
			let newitem={
				product:phone3,
				count:1
			}
			basket.push(newitem)
		}
	}
	localStorage.setItem("basket",JSON.stringify(basket))
	localStorage.setItem("count",count)
	let number=count
	sup.innerText=number
})

