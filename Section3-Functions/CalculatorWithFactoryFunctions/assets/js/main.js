function criaCalculadora() {
  return {
    display: document.querySelector('.display'),
    btnClear: document.querySelector('.btn-clear'),

    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    clearDisplay() {
      this.display.value = '';
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    realizaConta() {
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
    },

    cliqueBotoes() {
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
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
