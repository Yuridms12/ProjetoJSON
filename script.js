const aluno = [
    {
      nome: 'Yuri',
      idade: 19,
      curso: 'Ciências da Computação',
      notas: [8, 9, 7],
    },
  ];
  
  console.log(aluno[0].nome);
  console.log(aluno[0].notas[0]);
  
  aluno[0].idade = 22;
  console.log(aluno[0].idade);
  
  aluno[0].notas.push(9);
  console.log(aluno[0].notas);

  let alunoString = JSON.stringify(aluno)
  console.log(alunoString)
  alunoParse = JSON.parse(alunoString)
  console.log(alunoParse)
   
  let yuri = aluno[0];
  for (let i in yuri) {
    console.log(yuri[i]);
  }
  
  let soma = aluno[0].notas.reduce((totallenght, valorAtual) => {
    return totallenght + valorAtual;
  }, 0);
  
  let mediaNotas = soma / aluno[0].notas.length;
  console.log(mediaNotas);
  
  aluno[0].endereco = {
    rua: 'xxxxxxxxxx',
    estado: 'Paraíba',
    cidade: 'João Pessoa',
  };
  
  console.log(aluno[0].endereco.estado, aluno[0].endereco.cidade);
  
  const alunos = [
    {
     ...aluno[0]
    },
    {
      nome: 'Victor José',
      idade: 20,
      curso: 'Medicina',
      notas: [6, 5, 10],
      endereco: {
        
        rua: 'rua blabla',
        estado: 'Paraíba',
        cidade: 'João Pessoa',
      },
    },
    {
      nome: 'Et Bilu',
      idade: 20,
      curso: 'Sistemas para internet',
      notas: [8, 8.7, 10],
      endereco: {...aluno[0].endereco}
    }
  ];
  
  let media;
  const nomesMaior8 = alunos.filter((aluno) => {
    let media = aluno.notas.reduce((soma, nota) => soma + nota, 0) / aluno.notas.length;
    return media > 8;
  })
  .map((aluno) => aluno.nome)
  
  console.log(`Os alunos que tiveram a média maior que 8 são ${nomesMaior8.join(', ')}. `);