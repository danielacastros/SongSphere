const Database = require('../utils/database');
const conexao = new Database();

class CadastroModel {
    #usuarioID;
    #usuarioNome;
    #usuarioEmail;
    #usuarioSenha;
    #usuarioConfSenha;
    #usuarioCelular;
    #usuarioNascimento;
    #usuarioEndereco;
    #usuarioCidade;
    #usuarioEstado;
    #usuarioCEP;

    constructor(usuarioID, usuarioNome, usuarioEmail, usuarioSenha, usuarioConfSenha, usuarioCelular, usuarioNascimento, usuarioEndereco, usuarioCidade, usuarioEstado, usuarioCEP) {
        this.#usuarioID = usuarioID;
        this.#usuarioNome = usuarioNome;
        this.#usuarioEmail = usuarioEmail;
        this.#usuarioSenha = usuarioSenha;
        this.#usuarioConfSenha = usuarioConfSenha;
        this.#usuarioCelular = usuarioCelular;
        this.#usuarioNascimento = usuarioNascimento
        this.#usuarioEndereco = usuarioEndereco;
        this.#usuarioCidade = usuarioCidade;
        this.#usuarioEstado = usuarioEstado;
        this.#usuarioCEP = usuarioCEP;
    }

    get usuarioID() { return this.#usuarioID }
    set usuarioID(usuarioID) { this.#usuarioID = usuarioID }
    get usuarioNome() { return this.#usuarioNome }
    set usuarioNome(usuarioNome) { this.#usuarioNome = usuarioNome }
    get usuarioEmail() { return this.#usuarioEmail }
    set usuarioEmail(usuarioEmail) { this.#usuarioEmail = usuarioEmail }
    get usuarioSenha() { return this.#usuarioSenha }
    set usuarioSenha(usuarioSenha) { this.#usuarioSenha = usuarioSenha }
    get usuarioConfSenha() { return this.#usuarioConfSenha }
    set usuarioConfSenha(usuarioConfSenha) { this.#usuarioConfSenha = usuarioConfSenha }
    get usuarioCelular() { return this.#usuarioCelular }
    set usuarioCelular(usuarioCelular) { this.#usuarioCelular = usuarioCelular }
    get usuarioNascimento() { return this.#usuarioNascimento }
    set usuarioNascimento(usuarioNascimento) { this.#usuarioNascimento = usuarioNascimento }
    get usuarioEndereco() { return this.#usuarioEndereco }
    set usuarioEndereco(usuarioEndereco) { this.#usuarioEndereco = usuarioEndereco }
    get usuarioCidade() { return this.#usuarioCidade }
    set usuarioCidade(usuarioCidade) { this.#usuarioCidade = usuarioCidade }
    get usuarioEstado() { return this.#usuarioEstado }
    set usuarioEstado(usuarioEstado) { this.#usuarioEstado = usuarioEstado }
    get usuarioCEP() { return this.#usuarioCEP }
    set usuarioCEP(usuarioCEP) { this.#usuarioCEP = usuarioCEP }

    async gravar() {
        let result = false;
        if (this.#usuarioID == 0) {
            let sql = "insert into tb_usuario (usu_nome,usu_email,usu_senha,usu_confSenha, usu_celular,usu_nascimento,usu_endereco,usu_cidade,usu_estado,usu_CEP) values (?,?,?,?,?,?,?,?,?,?)"
            let valores = [this.#usuarioNome, this.#usuarioEmail, this.#usuarioSenha, this.#usuarioConfSenha, this.#usuarioCelular, this.#usuarioNascimento, this.#usuarioEndereco, this.#usuarioCidade, this.#usuarioEstado, this.#usuarioCEP];
            result = await conexao.ExecutaComandoNonQuery(sql, valores);
        }
        else {
            let sql = "update tb_usuario set usu_nome = ?, usu_email = ?, usu_senha = ?,usu_confSenha = ?, usu_celular = ?,usu_nascimento = ?, usu_endereco = ?, usu_cidade = ?, usu_estado = ?, usu_CEP = ? where usu_id = ?"
            let valores = [this.#usuarioNome, this.#usuarioEmail, this.#usuarioSenha, this.#usuarioSenha, this.#usuarioConfSenha, this.#usuarioCelular, this.#usuarioNascimento, this.#usuarioEndereco, this.#usuarioCidade, this.#usuarioEstado, this.#usuarioCEP, this.#usuarioID];
            result = await conexao.ExecutaComandoNonQuery(sql, valores);
        }
        return result
    }

    async autenticarUsuario(email, senha) {
        let sql = "select * from tb_usuario where usu_email = ? and usu_senha = ?";

        let valores = [email, senha];
        let pesquisa = await conexao.ExecutaComando(sql, valores);
        if (pesquisa > 0) {
            return new CadastroModel(pesquisa[0]["usu_id"], pesquisa[0]["usu_nome"], pesquisa[0]["usu_email"], pesquisa[0]["usu_senha"], pesquisa[0]["usu_confSenha"], pesquisa[0]["usu_celular"], pesquisa[0]["usu_nascimento"], pesquisa[0]["usu_endereco"], pesquisa[0]["usu_cidade"], pesquisa[0]["usu_estado"], pesquisa[0]["usu_cep"]);
        }
        return null
    }

}

module.exports = CadastroModel;