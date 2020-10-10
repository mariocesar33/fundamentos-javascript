const imprimirResultado = function(nota) {
  if(nota >= 10) {
    console.log("A sua nota foi " + nota + ", estas aprovado");
  } else {
    console.log(`A sua nota foi ${nota}, estas reprovado`);
  }
};

imprimirResultado(15.5);
imprimirResultado(8.5);