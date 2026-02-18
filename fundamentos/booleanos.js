let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); // uma ! ele inverte, duas !! mostra oq ele realmente é

console.log("os verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!!"texto");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("os falsos...");
console.log(!!0);
console.log(!!""); //"" fechado é false, aberto é true.
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false)); // vai dar false pq o isAtivo é true.

console.log("pra finalizar...");
console.log(!!("" || 0 || " ")); // só do ultimo ser true, ele sai como true.

let nome = "Junior";
console.log(nome || "Desconhecido"); // se tirar o valor de nome, sai "Desconhecido".
// Se não, sai Junior e o "Desconhecido" é ignorado.
