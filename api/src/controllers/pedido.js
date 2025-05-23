const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const pedido = await prisma.pedido.create({
            data: req.body
        });
        res.status(201).json(pedido).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}
const read = async (req, res) => {
    try {
        const pedidos = await prisma.pedido.findMany();
        const total = pedidos.reduce((soma, { valor }) => soma + (Number(valor) || 0), 0);
        
        return res.json({ pedidos, total });
    } catch (error) {
        console.error(error); 
        return res.status(500).json({ erro: 'Erro ao buscar pedidos' });
    }
};

const readOne = async (req, res) => {
    const pedidos = await prisma.pedido.findMany({
        where: {
            pedido_id: Number(req.params.id)
        },
        include: {
            motorista: true,
          
        }
    });
    res.json(pedidos);
}

const update = async (req, res) => {
    try {
        const pedido = await prisma.pedido.update({
            data: req.body,
            where: {
                pedido_id: Number(req.params.id)
            }
        });
        res.status(202).json(pedido).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

const remove = async (req, res) => {
    try {
        const pedido = await prisma.pedido.delete({
            where: {
                pedido_id: Number(req.params.id)
            }
        });
        res.status(204).json(pedido).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

module.exports = {
    create,
    read,
    readOne,
    update,
    remove
}