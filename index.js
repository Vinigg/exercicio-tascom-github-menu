let opcao
let usuarios = []

function showMenu(){
    alert('Bem vindo ao menu! \n [1]Cadastrar Usuário\n [2]Alterar Usuário\n [3]Deletar Usuário\n [4]Ler Usuários\n [5]Sair')
    opcao = prompt('Escolha uma opção')
}
function cadastrarUsuario(db){
    let nome = prompt('Digite o nome do Usuário')
    let email = prompt('Digite o email do Usuário')
    let cpf = prompt('Digite o cpf do Usuário')

    db.push({nome: nome, email: email,cpf:cpf})
}
function mostrarUsuarios(db){
    for (let i = 0; i < db.length; i++) {
        const element = db[i];

       let nome = element.nome
       let email = element.email
       let cpf = element.cpf


        console.log(`${nome}\n${email}\n${cpf}`)
    }
}

do {
    showMenu()
    switch (opcao) {
        case '1':
            cadastrarUsuario(usuarios)
            break;
        case '2':
            alert('Usuario alterado!')
            break;
        case '3':
            alert('Usuario apagado!')
            break;
        case '4':
            mostrarUsuarios(usuarios)
            break;
        case '5':
            alert('Saindo do menu.')
            break;
        default:
            alert('Escolha uma opção válida')
            break;
    }
} while (opcao != '5');

