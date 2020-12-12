const db = require('../../knexfile.js')

/**
 * Inserir um aviso no banco de dados
 * @param {object} aviso O aviso deve estar no seguinte formato:
 * {titulo: <string>, data: <date>, mensagem: <string>}
 * @returns {object} Mensagem de sucesso ou de erro
 */
function salvar(aviso){

  //INSERT INTO avisos(titulo, data, mensagem) VALUES ('Prova d...', '2020-10...', 'Estudar para não...')
  //db.insert(<obj com os dados>).into(<'nome da tabela'>)
  return db.insert(aviso).into('avisos')
    .then( _ =>{
      return{tipo:"sucesso", corpo:"Aviso cadastrado com sucesso" }
    })
    .catch(err =>{
      return{tipo:"erro", corpo:"Erro:"+err}
    })  
}//fim salvar

module.exports = {salvar}

