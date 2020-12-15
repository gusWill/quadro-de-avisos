//conexão com o banco de dados
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


/**
 * Alterar um aviso no banco de dados
 * @param {object} aviso O aviso deve estar no seguinte formato:
 * {titulo: <string>, data: <date>, mensagem: <string>}
 * @param {int} id ID do aviso
 * @returns {object} Mensagem de sucesso ou de erro
 */
function editar(aviso, id){
  return db('avisos').where('ID_avisos',  id).update(aviso)
  .then( _ =>{
    return{tipo:"sucesso", corpo:"Aviso alterado com sucesso" }
  })
  .catch(err =>{
    return{tipo:"erro", corpo:"Erro:"+err}
  })  
}//fim do editar

/**
 * Seleciona todos os avisos cadastrados
 * @returns {object} Objeto com todos os avisos cadastrados ou
 * uma mensagem de erro 
 */
function selecionartodos(){
  return db.select('*').from('avisos').orderBy('data', 'DESC')
  .then(avisos =>{
    return avisos
  })
  .catch(err =>{
    return{tipo:"erro", corpo:"Erro:"+err}
  })  
}//fim do selecionartodos

/**
 * Seleciona um aviso
 * @param {*} id Id do aviso que será selecionado
 * @returns {object} Objeto com o aviso selecionado
 */
function selecionarAviso(id){
  return db.select('*').from('avisos').where('ID_avisos', id).first()
    .then(avisos => {return avisos})
    .catch(err =>{
      return{tipo:"erro", corpo:"Erro:"+err}
    })  
}//fim do selecionarAviso


/**
 * Função que exclui um aviso do banco de dados
 * @param {int} id Id do aviso
 */
function excluir(id){
  return db.del().from('avisos').where('ID_avisos', id)
}

module.exports = {
  salvar,
  selecionartodos,
  selecionarAviso,
  excluir,
  editar
}  

