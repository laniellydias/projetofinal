let db = require("./db");
let Produtos = require("./model/Produtos");

async function sincronizar() {
    await db.sync();
}
async function inserir(obj) {
    let res = await Cliente.create(obj)
    console.log(res);
}

let P1 = {id_produto: "1", data: "18 05", quantidade: "22"};
let P2 = {id_produto: "2", data: "01 02", quantidade: "45"};
let P3 = {id_produto: "3", data: "22 10", quantidade: "45"};
let P4 = {id_produto: "4", data: "22 10", quantidade: "45"};
let P5 = {id_produto: "5", data: "08 01", quantidade: "23"};

inserir(T1);
inserir(T2);
inserir(T3);
inserir(T4);
inserir(T5);
    
async function consultar(){
    let resultado = await Produtos.findAll();
    console.log(resultado[2]);
    conseole.log(resultado[0]);
    conseole.log(resultado[1]);
    conseole.log(resultado[3]);
    conseole.log(resultado[4]);
}
    //sincronizar();
    consultar();