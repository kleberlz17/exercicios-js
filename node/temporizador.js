// tarefa temporizada
const schedule = require("node-schedule");

// 5 em 5 min, as 12 horas da terça feira.
const tarefa1 = schedule.scheduleJob("*/5 * 12 * * 2", function () {
  console.log("Executando Tarefa 1!", new Date().getSeconds());
});

setTimeout(function () {
  tarefa1.cancel();
  console.log("Cancelando Tarefa 1!");
}, 20000);

// Outra tarefa temporizada.
const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)];
regra.hour = 12;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, function () {
  console.log("Executando Tarefa 2!", new Date().getSeconds());
});
