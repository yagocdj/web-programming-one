const aluno1 = new Aluno('Yago', 20, '20221370018');
const aluno2 = new Aluno('Lucas', 18, '20221370016');
const aluno3 = new Aluno('Pablo', 18, '20221370015');
const aluno4 = new Aluno('Mateus', 18, '20221370017');

controladorDisciplina.inserirAlunoNaDisciplina(1, aluno1);
controladorDisciplina.inserirAlunoNaDisciplina(1, aluno2);
controladorDisciplina.inserirAlunoNaDisciplina(1, aluno3);
controladorDisciplina.inserirAlunoNaDisciplina(1, aluno4);

/* ------------------------------------ */

controladorDisciplina.atualizarNome(1, 'Prog Web 1');

