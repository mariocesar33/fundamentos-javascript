function soBoaNoticia(nota) {
  let not = nota;

  if(not >= 10) {
    console.log(`bota noticia, nota foi de ${not}`);
  };
};

soBoaNoticia(15);

function falaSeEVerdade(verdade) {
  if(verdade){
    console.log('Deu verdadeiro... ' + verdade);
  };
};

falaSeEVerdade();
falaSeEVerdade(null);
falaSeEVerdade(undefined);
falaSeEVerdade(NaN);
falaSeEVerdade('');
falaSeEVerdade(0);

falaSeEVerdade(-1);
falaSeEVerdade(1);
falaSeEVerdade(' ');
falaSeEVerdade('A - Z ou a - z');