class Singleton {
  static instancia
  nombre = ''

  constructor(nomnbre = '') {
    console.log(Singleton.instancia)
  }
}

const instancia1 = new Singleton('ironman')
