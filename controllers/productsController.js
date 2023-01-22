const db = require('../models');
//require operators
const Op = db.sequelize.Op;

module.exports = {
    list: (req,res) =>{
        db.Products.findAll().then(products =>{
            res.status(200).json({
                total:products.length,
                data:products,
                status: 200
            });
        });
    },

    showOne: (req, res) => {
        db.Products.findByPk(req.params.id).then(
            product => {res.status(200).json({
                data:product,
                status: 200
            })}
        )
    },

    store: (req,res) => {
        // res.json(req.body);
        db.Products.create(req.body).then(product => {
            res.status(200).json({
                data:product,
                status:200
            })
        })
    },

    delete: (req,res) => {
        db.Products.destroy({where:{ id: req.params.id}}).then(
            res.json(response)
        )
    },

    update:(req,res) => {
        db.Products.update({...req.body},{where:{ id: req.params.id}}).then(product => {
            res.json({
                data:product,
                status:200
            })
    })
    },
//fix------------------------------
    search:(req,res) => {
        //using Op like
        // se usa en la url search?keyword=loqueseaqueestesbuscando
        db.Products.findAll({where:{ name:{ [Op.like]: '%' + req.query.keyword + '%'}}}).then(products => {
            res.status(200).json(products)})
        }

    
    
};

