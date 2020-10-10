Number.prototype.entre = function(inicio, fim) {
  return (
    this >= inicio && this <= fim 
  );
};

const imprimirResultado = function(nota) {
  if (nota.entre(17.5, 20)) {
    console.log(`A sua nota é de ${nota}, pertences a "Quadro de Honra"`)
  } else if(nota.entre(9.5, 17.4)) {
    console.log(`A sua nota é de ${nota}, estas "Aprovador"`)
  } else if(nota.entre(0, 9.4)) {
    console.log(`A sua nota é de ${nota }, estas "Reprovado"`)
  }else {
    console.log("Nota Invalida");
  }
}

imprimirResultado(50);