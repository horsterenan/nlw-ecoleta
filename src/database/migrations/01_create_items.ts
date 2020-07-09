import Knex from "knex";

export async function up(knex :Knex){
return knex.schema.createTable('items', table=>{ //Criar tabela
    table.increments('id').primary(); //método de incremento da tabela, numero que vai subindo para cada registro, 1,2,3,4 (ID)
    table.string('image').notNullable();// ponto nao pode ser nulo,e o 'image" esta em uma string pq nao é a imagem em si e só a referencia dela
    table.string('title').notNullable();
    
})
}



export async function down(knex: Knex){
    return knex.schema.dropTable('items')
}
//voltar atras, deletar tabela.