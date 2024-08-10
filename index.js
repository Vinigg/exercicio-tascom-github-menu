let opcao
let usuarios = [{
    nome: "Paulo",
    email: "paulo@email.com",
    cpf: 12345
},
{
    nome: "João",
    email: "joao@email.com",
    cpf: 54321
},
]

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
    let text = 'Lista de usuários:\n'
    for (let i = 0; i < db.length; i++) {
        const element = db[i];

        let nome = element.nome
        let email = element.email
        let cpf = element.cpf
        
        text = text + '\n' + `${nome}\n${email}\n${cpf} \n`

    }
    alert(text)
}

function alterarUsuario(db){

    nomeProcurado = prompt('Digite o nome do usuário que deseja alterar.')

    for (let i = 0; i < db.length; i++) {
        if (db[i].nome === nomeProcurado) {
            nome = prompt('Digite novo nome')
            email = prompt('Digite novo email')
            cpf = prompt('Digite novo cpf')

            db[i].nome = nome
            db[i].email = email
            db[i].cpf = cpf
            return alert('Usuário alterado com sucesso!')
        }        
    }

    return alert('Usuário não encontrado')

}

function apagarUsuario(db){

    nomeProcurado = prompt('Digite o nome do usuário que deseja deletar.')
    for (let i = 0; i < db.length; i++) {
        if (db[i].nome === nomeProcurado) {
            novoDb = db.filter(user => user.nome != nomeProcurado)
            console.log(novoDb)
            db = novoDb
            return alert(`Usuário ${nomeProcurado} deletado.`)
        }        
    }

    return alert(`Usuário ${nomeProcurado} não encontrado.`)

}

do {
    showMenu()
    switch (opcao) {
        case '1':
            cadastrarUsuario(usuarios)
            break;
        case '2':
            alterarUsuario(usuarios)
            break;
        case '3':
            apagarUsuario(usuarios)
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

