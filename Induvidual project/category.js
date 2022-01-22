//Category page start

var products = [
    {
      // product1
      name: "Cheat Sheet Anti-Aging Mask",
      img:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-anti-aging-mask-12775753744467.jpg?v=1619113715",
      price: "Rs.30.00",
    }, {
        name: "Charcoal Patrol Face Mask",
      img:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-face-mask-12775752564819.jpg?v=1619113688",
      price: "Rs.99.00"
      ,
    }, {
      name: "Charcoal Patrol Face Mask",
    img:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-face-mask-12775752564819.jpg?v=1619113688",
    price: "Rs.99.00"
    ,
  }, {
    name: "Charcoal Patrol Face Mask",
  img:
    "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-face-mask-12775752564819.jpg?v=1619113688",
  price: "Rs.99.00"
  ,
}, {
  name: "Charcoal Patrol Face Mask",
img:
  "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-face-mask-12775752564819.jpg?v=1619113688",
price: "Rs.99.00"
,
}, {
  name: "Charcoal Patrol Face Mask",
img:
  "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-face-mask-12775752564819.jpg?v=1619113688",
price: "Rs.99.00"
,
}, {
  name: "Charcoal Patrol Face Mask",
img:
  "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-face-mask-12775752564819.jpg?v=1619113688",
price: "Rs.99.00"
,
}, {
  name: "Charcoal Patrol Face Mask",
img:
  "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-face-mask-12775752564819.jpg?v=1619113688",
price: "Rs.99.00"
,
}
]

var cart = JSON.parse(localStorage.getItem("cartItems")) || []

function work(products) {


    products.map(function(item) {
      // var ink = document.createElement("p")
      // console.log(item.name)

      // var name1 = document.getElementById("product-name")

      var name1 = document.createElement("div")
      name1.setAttribute("id","product-name")
      name1.textContent = item.name

      var proPrice = document.createElement("div")
      proPrice.setAttribute("id","product-price")
      proPrice.textContent = item.price

      // var img1 = document.getElementById("product-img")
      // img1.src = item.img

      var img1 = document.createElement("img")
      img1.setAttribute("id", "product-img")
      img1.src = item.img

      var product = document.createElement("div")
      product.setAttribute("id", "product-block")

      var btn = document.createElement("button")
      btn.setAttribute("id", "add-to-cart")
      btn.textContent = "ADD TO CART"

      btn.addEventListener("click", function(){
        addToCart(item);
      })

      var products = document.getElementById("products-block")

      product.append(img1,name1, proPrice, btn)
      products.append(product)

    })



    function addToCart(item) {
      console.log(item);
      cart.push(item)
      localStorage.setItem("cartItems", JSON.stringify(cart))
    }
}

work(products)


//Category page end