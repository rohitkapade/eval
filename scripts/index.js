//store the products array in localstorage as "data"

function Product(n,b,p,i){
    this.name=n,
    this.brand=b,
    this.price=p,
    this.img=i
}

let arr = JSON.parse(localStorage.getItem("data")) || []

function CreateData(e){
    e.preventDefault()
    let form = document.getElementById("product_form")
    let name = form.product_name.value
    let brand = form.product_brand.value
    let price = form.product_price.value
    let img = form.product_image.value

    let P1 = new Product(name,brand,price,img)

    arr.push(P1)

    localStorage.setItem("data",JSON.stringify(arr))

    
}
