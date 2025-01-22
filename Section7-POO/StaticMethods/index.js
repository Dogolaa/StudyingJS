class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  //Metodo de instancia
  aumentarVolume() {
    this.volume += 2;
  }

  diminuirVolume() {
    this.volume -= 2;
  }

  //metodo estatico
  static trocaPilha() {
    console.log('Ok, vou trocar');
  }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);
const controle2 = new ControleRemoto('Samsung');
console.log(controle2);
//controle1.trocaPilha(); // nao funciona, da erro
ControleRemoto.trocaPilha(); // modo de chamar um metodo estatico
