let innerContainer = document.querySelector("#container>.innerContainer")

let getData = async()=>{
    let res = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries")
    let res2 = await res.json()
    let data = res2.data
    let card = document.querySelector("#container>.innerContainer>.card")
    
    function displayData(data){
        card.innerHTML = ""
        data.forEach(function(ele){
            
            let div = document.createElement("div")
            let h2 = document.createElement("h2")
            let id = document.createElement("p")
            let name = document.createElement("p")
            let population = document.createElement("p")
    
            h2.innerText = `Rank : ${ele.Rank}`;
            id.innerText = `Id : ${ele.id}`;
            name.innerText = `Name : ${ele.country}`;
            population.innerText = `Population : ${ele.population}`;
    
            div.append(h2,id,name,population)
            card.append(div)
    
        })
    }
    displayData(data)


    let sortPop = document.querySelector("#sortPop")
    sortPop.addEventListener("change",function(){
        let Val3 = sortPop.value;
        let filtProduct
        if(Val3=="Low to High"){
            filtProduct = data.sort(function(a, b) {
            return a.population - b.population;
            });
        
        }
        else if(Val3=="High to Low"){
            filtProduct = data.sort(function(a, b) {
            return b.population - a.population;
            });
        
        }
    
        displayData(filtProduct)

    })

    
}

getData()