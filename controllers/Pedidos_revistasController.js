const PedidoRevista = require('../models/pedido_revista');


const getAll = async(req, res) => {
    try{
        const pedidos = await PedidoRevista.find();
        return res.status(200).json(pedidos)
    }catch(error){
      console.log(error)
        return res.status(500).send('Não foi possível concluir requisição.');
    }
}

const store = async(req, res) => {
    try {
        const { nome, classe, tipoRevista } = req.body;
        const quantidade = Number(req.body.quantidade);
        
        const novoPedido = new PedidoRevista({
          nome,
          classe,
          tipo_revista: tipoRevista,
          quantidade
        });
    
        await novoPedido.save();
        res.status(200).json(novoPedido);
      } catch (error) {
        res.status(400).json({ message: 'Erro ao salvar pedido de revista.', error });
      }
}

module.exports = {
  getAll, store
}