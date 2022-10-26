const parrafos = document.querySelectorAll(".parrafo")
const img = document.querySelectorAll(".imagen")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        event.dataTransfer.setData("id",parrafo.id)
      
    })

    parrafo.addEventListener("dragend", () => {
        parrafo.remove("id",parrafo.id);
    })

    
})

img.forEach(imagen => {
    imagen.addEventListener("dragover", event => {
        event.preventDefault()
        
    })

    imagen.addEventListener("drop", event => {
        event.preventDefault()
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(event.dataTransfer.getData(id_parrafo) )
    })
})










