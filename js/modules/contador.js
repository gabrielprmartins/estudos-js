export default class Contador {
  constructor(funcionamento) {
    this.funcionamento = document.querySelector(funcionamento);
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  getActualTime() {
    this.dataAtual = new Date();
    this.diaAtual = this.dataAtual.getDay();
    this.horarioAtual = this.dataAtual.getHours();
    this.minutoAtual = this.dataAtual.getMinutes();
    this.segundoAtual = this.dataAtual.getSeconds();
  }

  getTimeToOpen() {
    this.getActualTime();
    this.horarioSemana.forEach((hora) => hora > 0);
    this.hora = (this.horarioSemana[0] - this.horarioAtual);
    this.minuto = 59 - this.minutoAtual;
    this.segundo = 59 - this.segundoAtual;
  }

  initCountDown() {
    this.funcionamento.classList.remove('aberto');
    this.count = setInterval(() => {
      this.getTimeToOpen();
      this.funcionamento.innerText = `${this.hora}:${this.minuto}:${this.segundo}`;
    }, 1000);

    return this.count;
  }

  open() {
    clearInterval(this.count);
    this.funcionamento.classList.add('aberto');
    this.funcionamento.innerText = 'Aberto';
  }

  onDayMatches() {
    this.getActualTime();
    this.semanaAberto = this.diasSemana.indexOf(this.diaAtual) !== -1;
    this.horarioAberto = (this.horarioAtual >= this.horarioSemana[0]
      && this.horarioAtual < this.horarioSemana[1]);

    this.initCountDown();
    if (this.semanaAberto && this.horarioAberto) {
      this.open();
    }
  }

  init() {
    if (this.funcionamento && this.diasSemana && this.horarioSemana) {
      // this.onDayMatches();
    }
    return this;
  }
}
