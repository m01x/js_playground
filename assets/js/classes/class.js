class Persona {
  static _conteo = 0
  nombre = ''
  codigo = ''
  frase = ''
  comida = ''

  constructor(
    nombre = 'Sin nombre',
    codigo = 'Sin codigo',
    frase = 'Sin frase'
  ) {
    //if (!nombre) throw Error('Necesitamos el nombre!')
    this.nombre = nombre
    this.codigo = codigo
    this.frase = frase

    Persona._conteo++
  }
  //sets y gets
  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase()
  }

  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`
  }
  static get getInstancias() {
    return `${Persona._conteo} instancias de la clase Persona.`
  }
  //metodos
  quienSoy() {
    console.log(`Soy ${this.nombre} , y mi identidad es ${this.codigo}`)
  }

  miFrase() {
    console.log(`${this.codigo} dice: ${this.frase}`)
  }
}

const spiderman = new Persona('Peter parker', 'spider', 'soy tu vecino spidey')
const ironman = new Persona('Tony stark', 'Ironman', 'Yo soy ironman!')
// console.log(spiderman)
// console.log(ironman.quienSoy())
//console.log(spiderman.miFrase())
spiderman.setComidaFavorita = 'El Pie de Cereza de la tia May'
console.log(`Las instancias de persona son: ${Persona._conteo}`)
console.log(Persona.getInstancias)
