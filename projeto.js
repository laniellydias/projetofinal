const { Pool } = require("pg");

const{POLL} = requiere ("pg");
async function CriarConexao() {
    const poll = new POLL( {
        connectionString ='postgres: sksuogynhrncrj : cc8e38ebb22ab9e3ed6ac62042c20c1db7cb8473652d262b1794dca315be2abd @ ec2-54-159-175-113.compute-1.amazonaws.com : 5432 / d39g8tuvc0ukuu',
        ssl: {
            rejectUnawthorized: false
    }
});
let con = await pool.connect();
 let ingrediente = await con.query(`
    creat table Produtos(
        id serial primary Key, 
        datas integer,
        quantidade integer,
        descricao integer,
    )`
 ); 
 await con.query("insert into Produtos(datas, quantidade, descricao) valores ($1), ($2), ($3)",
  ["25/03/2021", "01/06/2021", "04/09/2021"],
  ["10 pacotes", "25 pacotes",  "20 pacotes"], ["789 051098 133 8", "789 902514 244 9", "789 635489 584 7"]);
 await con.query("update Produtos set datas = $1 where id = $2", ["04/09/2021", 3]);
 await con.query("delete from Produtos where upper(data) like '04/09/2021' ");
 let res = await con.query("select * from Produtos");
 let tuplas = res.rows;
 for (let tupla of tuplas) {
     console.log(tupla);
 }
     console.log(Produtos);
 con.release();
}
 CriarConexao();