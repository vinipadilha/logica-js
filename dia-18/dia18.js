class Livro{
    Titulo 
    Autor
    Editora
    AnoPublicação
    Disponibilidade = true
    
    constructor(titulo, autor, editora, anoDePublicacao){
        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora 
        this.AnoPublicação = anoDePublicacao
    }
}


let Livros = []
Livros.push(new Livro("LivroA", "joão", "Editora1", 2020))
Livros.push(new Livro("LivroB", "marcos", "Editora2", 1990))
Livros.push(new Livro("LivroC", "jonas", "Editora3", 2001))
Livros.push(new Livro("LivroD", "lucas", "Editora4", 2006))
Livros.push(new Livro("LivroE", "igor", "Editora5", 1970))


class Biblioteca{
    Nome
    Endereço
    Telefone
    AcervoDeLivros = []//livros existentes
    constructor(nome, endereco, telefone, acervo){
        this.nome = nome
        this.Endereço = endereco
        this.Telefone = telefone
        this.AcervoDeLivros = acervo
    }

    buscar(titulo){
        this.AcervoDeLivros.forEach(livro => {
            if (livro.Titulo == titulo) {
                console.log(livro)
                
            }
        })     
    }


    emprestimo(titulo) {
        let livroEmprestimo = false;
        this.AcervoDeLivros.forEach(livro => {
            if (livro.Titulo === titulo && livro.Disponibilidade) {
                console.log("Livro disponível para empréstimo");
                livro.Disponibilidade = false;
                livroEmprestimo = true;
            }
        });
        if (!livroEmprestimo) {
            console.log("Livro não está disponível ");
        }
    }

    devolucao(titulo){
        Livros.forEach(livro => {
            if(livro.Titulo == titulo){
                livro.Disponibilidade = true
                console.log("Livro Devolvido")

            }
        })


    }
           
}


let biblioteca = new Biblioteca("Biblioteca do Vini", "1233321", "Rua 12", Livros);

biblioteca.buscar("LivroA")
biblioteca.emprestimo("LivroB")
biblioteca.devolucao("LivroB")












