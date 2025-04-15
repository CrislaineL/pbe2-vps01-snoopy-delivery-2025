const express = require('express');
const router = express.Router();

const Motorista = require('./controllers/motorista.js');
const Pedido = require('./controllers/pedido.js');

router.get('/', (req, res) => {
  return res.json({ titulo: 'SNOOPY PetShop Delivery' });
});

router.post('/motoristas',Motorista.create);
router.get('/motoristas',Motorista.read);
router.get('/motoristas/:id',Motorista.readOne);
router.patch('/motoristas/:id',Motorista.update);
router.delete('/motoristas/:id',Motorista.remove);

router.post('/pedidos',Pedido.create);
router.get('/pedidos',Pedido.read);
router.get('/pedidos/:id',Pedido.readOne);
router.patch('/pedidos/:id',Pedido.update);
router.delete('/pedidos/:id',Pedido.remove);

module.exports = router;

