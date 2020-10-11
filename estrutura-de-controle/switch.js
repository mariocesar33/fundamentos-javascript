const imprimirResultado = function(nota) {
  switch(Math.floor(nota)) {
    case 20:
    case 19:
    case 18:
    case 17:
      console.log(`A sua nota é de ${nota}, pertences a "Quadro de Honra"`);
    break;

    case 16: case 15: case 14: case 13: case 12: case 11: case 10:
      console.log(`A sua nota é de ${nota}, estas "Aprovador"`);
    break;

    case 5: case 6: case 7: case 8: case 9:
    case 0: case 1: case 2: case 3: case 4:
      console.log(`A sua nota é de ${nota }, estas "Reprovado"`)
    break;

    default:
      console.log("Nota Invalida");
    break;
  }
}

imprimirResultado(17.9);
imprimirResultado(12);
imprimirResultado(6.5);