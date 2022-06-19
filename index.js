(async () => {
    //Verificando conexão
    const db = require("./db");
    console.log("Passou por aqui");


    //Inserindo na tabela
    console.log('INSERT INTO CLIENTES');
    const result = await db.insertCustomer({ nome: "CaraChato", idade: "180", uf: "MG" });
    console.log(result);

    //Selecionando na tabela
    console.log('SELECT * FROM CLIENTES');
    const clientes = await db.selectCustomer();
    console.log(clientes);

    //update na tabela
    console.log('UPDATE FROM CLIENTES')
    const result2 = await db.updateCustomer(6, { nome: "OcaraChato", idade: "20", uf: "SC", });
    console.log(result2);

    //Deletando dados na tabela
    console.log('DELETE FROM TABELA');
    const result3 = await db.deleteCustomer(7)
    console.log(result3);
})();
