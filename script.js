const container=document.querySelector('.container')

 let sorted=countries_data.sort((a,b)=>b.population-a.population)

 function calcWorldPop(){
    let toplam=0
    sorted.forEach(country=>{
        toplam+=country.population
    })
    return toplam
 }
 
for(let i=0; i<10; i++){
    let country=sorted[i]
    const div=document.createElement('div')
    const name=document.createElement('h2')
    const graphic=document.createElement('div')
    const population=document.createElement('p')

    let percent=(country.population/calcWorldPop())*100
   
    div.style.display='grid'
    div.style.gridTemplateColumns='150px 1fr 150px'
    div.style.margin='20px 0px'
    graphic.style.background='orange'
    graphic.style.width=`${percent}%`
    

    name.textContent=country.name
    population.textContent=country.population

    div.appendChild(name)
    div.appendChild(graphic)
    div.appendChild(population)

    container.appendChild(div)
}
