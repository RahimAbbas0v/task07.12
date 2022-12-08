let container = document.querySelector(".container")
let row = document.querySelector(".row")

const products = [

	phone1 = {
		id: 1,
		name: "Iphone 14 Pro",
		price: "1500$",
		img: "https://pricebey.com/wp-content/uploads/2021/11/Apple-iPhone-14-Pro-Max.jpg",
	},

	phone2 = {
		id: 2,
		name: "Iphone 13 Pro",
		price: "1200$",
		img: "https://phonesstorekenya.com/wp-content/uploads/2021/09/Apple-iPhone-13-Pro-Max-b-768x768.jpg",

	},
	phone3 = {
		id: 3,
		name: "Iphone 12 Pro",
		price: "1000$",
		img: "https://www.accessandgo.fr/pics/data/accessoires/photos/16641-32851-800x800.jpg",
	}
]
localStorage.setItem("products", JSON.stringify(products))
products.forEach(element => {
	let place = document.querySelector(".container .row")
	place.innerHTML += `<div class="col" style="flex-wrap: wrap;margin-left: 3.2rem;padding-bottom: 3rem;">
	<div class="card px-5" style="width:90%;style="flex-wrap: wrap;">
	  <img src="${element.img}"
		style="padding-top:1.rem ;" class="card-img-top" alt="...">
	  <div class="card-body" style="text-align:center">
		<h5 class="card-title" ;">${element.name}</h5>
		<p style="font-weight:bold">Price : ${element.price}</p>
		<a href="#" class="btn btn-primary" prodId=${element.id}>Add to cart</a>
	  </div>
	</div>
  </div>
  `
});
let count = 0;
let button = document.querySelectorAll(".btn btn-primary")
let sup = document.querySelector("sup")
let basket = []
container.addEventListener("click", function (e) {
	e.preventDefault()
	count += 1;
	let number = count;
	sup.innerText = number
	localStorage.setItem("count", count)

	if (basket.some(x => x.product.id == e.target.getAttribute("prodId"))) {
		basket.forEach((elem) => {
			if (elem.product.id == e.target.getAttribute("prodId")) {
				elem.count += 1;
			}
			localStorage.setItem("basket", JSON.stringify(basket))
		})}
	else {
			let newItem = {
				product: products.find(x => x.id == e.target.getAttribute("prodId")),
				count: 1,
			}
			basket.push(newItem)
		}

		
	})

$(document).ready(function () {
``
	$("#owl-demo").owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		autoPlay: true,
		autoPlay: 2000,
		autoPlayHoverPause:false,
		items: 3,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			100: {
				items: 3
			}
		}
	})
})
