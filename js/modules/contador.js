export default function contador() {
  const operation = document.querySelector('[data-semana]');
  const activeClass = 'aberto';

  const dataOperating = () => ({
    diasSemana: operation.dataset.semana.split(',').map(Number),
    horarioSemana: operation.dataset.horario.split(',').map(Number),
  });

  let dataOp;
  if (operation) dataOp = dataOperating();

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
      hora: ((dataOp.horarioSemana[0] - time.horarioAtual) - 1),
      minuto: 59 - time.minutoAtual,
      segundo: 59 - time.segundoAtual,
    };
  };

  const formatTime = () => {
    const open = getTimeToOpen();
    let { hora, minuto, segundo } = open;
    if (hora < 0) hora += 24;
    hora = (hora < 10) ? `0${hora}` : hora;
    minuto = (minuto < 10) ? `0${minuto}` : minuto;
    segundo = (segundo < 10) ? `0${segundo}` : segundo;

    return {
      hora,
      minuto,
      segundo,
    };
  };

  const initCountDown = () => {
    operation.classList.remove(activeClass);
    const count = setInterval(() => {
      const format = formatTime();
      operation.innerText = `${format.hora}:${format.minuto}:${format.segundo}`;
      const isTimeToOpen = (format.hora === '00') && (format.minuto === '00') && (format.segundo === '00');
      if (isTimeToOpen) {
        open();
        clearInterval(count);
      }
    }, 1000);

    return count;
  };

  const open = () => {
    operation.classList.add(activeClass);
    operation.innerText = 'Aberto';
  };

  const onDayMatches = () => {
    const time = getActualTime();
    const semanaAberto = dataOp.diasSemana.indexOf(time.diaAtual) !== -1;
    const horarioAberto = (time.horarioAtual >= dataOp.horarioSemana[0]
      && time.horarioAtual < dataOp.horarioSemana[1]);

    const countdown = initCountDown();
    if (semanaAberto && horarioAberto) {
      clearInterval(countdown);
      open();
    }
  };

  if (operation && dataOp.diasSemana && dataOp.horarioSemana) {
    onDayMatches();
  }
}
