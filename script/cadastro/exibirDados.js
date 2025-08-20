import { pegarDados } from "./pegarDados.js";

export function exibirDados() {
    const dados = pegarDados();

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
        <h2>Dados Cadastrados</h2>
        <p><strong>ID:</strong> ${dados.id}</p>
        <p><strong>Nome:</strong> ${dados.nome}</p>
        <p><strong>Sobrenome:</strong> ${dados.sobrenome}</p>
        <p><strong>Email:</strong> ${dados.email}</p>
        <p><strong>Telefone:</strong> ${dados.telefone}</p>
        <p><strong>Idade:</strong> ${dados.idade}</p>
        <p><strong>Sexo:</strong> ${dados.sexo}</p>
        <p><strong>Cargo:</strong> ${dados.cargoAtual}</p>
        <p><strong>Escolaridade:</strong> ${dados.grauEscolaridade}</p>
        <p><strong>Endereço:</strong> ${dados.endereco}</p>
        <p><strong>Salário:</strong> R$ ${dados.salario}</p>
        <p><strong>Vale Transporte:</strong> ${dados.vt}</p>
        ${dados.vt === "sim" ? `<p><strong>Valor da Passagem:</strong> R$ ${dados.valorPassagem}</p>` : ""}
        <p><strong>Histórico:</strong> ${dados.historico}</p>

    `;

    console.log("Dados exibidos:", dados);
}