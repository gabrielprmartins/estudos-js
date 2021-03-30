export default function contador() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const getActualTime = () => {
    const dataAtual = new Date();
    return {
      diaAtual: dataAtual.getDay(),
      horarioAtual: dataAtual.getHours(),
      minutoAtual: dataAtual.getMinutes(),
      segundoAtual: dataAtual.getSeconds(),
    };
  };

  const getTimeToOpen = () => {
    const time = getActualTime();
    return {
      hora: (horarioSemana[0] - time.horarioAtual) - 1,
      minuto: 59 - time.minutoAtual,
      segundo: 59 - time.segundoAtual,
    };
  };

  const initCountDown = () => {
    funcionamento.classList.remove('aberto');
    const count = setInterval(() => {
      const open = getTimeToOpen();
      funcionamento.innerText = `${open.hora}:${open.minuto}:${open.segundo}`;
    }, 1000);

    return count;
  };

  const open = () => {
    funcionamento.classList.add('aberto');
    funcionamento.innerText = 'Aberto';
  };

  const onDayMatches = () => {
    const time = getActualTime();
    const semanaAberto = diasSemana.indexOf(time.diaAtual) !== -1;
    const horarioAberto = (time.horarioAtual >= horarioSemana[0]
      && time.horarioAtual < horarioSemana[1]);

    const countdown = initCountDown();
    if (semanaAberto && horarioAberto) {
      clearInterval(countdown);
      open();
    }
  };

  if (funcionamento && diasSemana && horarioSemana) {
    onDayMatches();
  }
}
