
function displayData(){
    let data = JSON.parse(localStorage.getItem("data"))
    let cont = document.getElementById("products_data")
    data.forEach(function(ele,ind){
        let card = document.createElement("div")
        card.setAttribute("class","card")

        let img = document.createElement("img")
        img.src=ele.img
        img.setAttribute("class","img")

        let brand = document.createElement("h3")
        brand.setAttribute("class","brand")
        brand.innerText=ele.brand

        let ProName = document.createElement("p")
        brand.setAttribute("class","name")
        ProName.innerText=ele.name

        let price = document.createElement("p")
        brand.setAttribute("class","price")
        price.innerText=ele.price

        let remove = document.createElement("button")
        remove.innerText="Remove"
        remove.setAttribute("id","remove_product")
        remove.addEventListener("click", function(){
            removeItem(ind,data)
        })



        card.append(img,brand,ProName,price,remove)

        cont.append(card)
    });
}


function removeItem(ind,data){
    console.log("rohit")
    data.splice(ind,1)
    localStorage.setItem("data",JSON.stringify(data))
    window.location.reload()
}


displayData()