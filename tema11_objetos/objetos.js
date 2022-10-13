class Estudiante {
    nombre;
    asignaturas = ["Javascript", "HTML", "CSS"]
    constructor (nombre, asignaturas){
        this.nombre = nombre,
        this.asignaturas = asignaturas
        
    }
   
    obtenDatos(){
        console.log(`Mi nombre es: ${this.nombre}  estidio: ${this.asignaturas}`)
    }


}

const nuevo_estudiante = new Estudiante("Jonatan", ["Javascript", "HTML", "CSS"])
//console.log(nuevo_estudiante)


nuevo_estudiante.obtenDatos()

