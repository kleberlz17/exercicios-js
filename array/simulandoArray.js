const quaseArray = { 0: "Rafael", 1: "Janet", 2: "Stuart" };
Object.defineProperty(quaseArray, "toString", {
  value: function () {
    return Object.values(this);
  },
  enumerable: false,
});

console.log(quaseArray[0]);

const meuArray = ["Rafael", "Janet", "Stuart"];
console.log(quaseArray.toString(), meuArray);
