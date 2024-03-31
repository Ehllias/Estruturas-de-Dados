let f1 = [1,2,3,4,5,5,5,5];
let f2 = [1,2,3,4,5];

function comparacao(f1, f2) {
  if (f1.length > f2.length) {
    return "A f1 é maior que f2";
  } else if (f2.length > f1.length) {
    return "A f2 é maior que f1";
  } else {
    return "Ambas do mesmo tamanho";
  };
};

console.log(comparacao(f1, f2));