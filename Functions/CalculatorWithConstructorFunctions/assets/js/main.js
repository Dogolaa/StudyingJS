function Calculadora() {
  this.display = document.querySelector('.display');
  this.btnClear = document.querySelector('.btn-clear');

  this.inicia = () => {
    this.cliqueBotoes();
    this.pressionaEnter();
  };

  this.pressionaEnter = () => {
    this.display.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        this.realizaConta();
      }
    });
  };

  this.clearDisplay = () => {
    this.display.value = '';
  };

  this.apagaUm = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.realizaConta = () => {
    let conta = this.display.value;

    try {
      conta = eval(conta);
      if (!conta) {
        alert('Conta invalida');
        return;
      }

      this.display.value = String(conta);
    } catch (e) {
      alert('Conta invalida');
      return;
    }
  };

  this.cliqueBotoes = () => {
    //this -> calculadora
    document.addEventListener(
      'click',
      (e) => {
        //this passa a ser o document se for uma funcao function (e){}, mas mudamos parra arrow
        const el = e.target;

        //para reverter usar o .bind(this) ou arrow functions

        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if (el.classList.contains('btn-del')) {
          this.apagaUm();
        }

        if (el.classList.contains('btn-eq')) {
          this.realizaConta();
        }

        this.display.focus();
      } //.bind(this)
    );
  };

  this.btnParaDisplay = (valor) => {
    this.display.value += valor;
  };
}

const calculadora = new Calculadora();
calculadora.inicia();
