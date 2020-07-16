import Knex from "knex";

export async function up(knex :Knex){
return knex.schema.createTable('points', table=>{ //Criar tabela
    table.increments('id').primary(); //método de incremento da tabela, numero que vai subindo para cada registro, 1,2,3,4 (ID)
    table.string('image').notNullable();// ponto nao pode ser nulo,e o 'image" esta em uma string pq nao é a imagem em si e só a referencia dela
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.decimal('latitude').notNullable();
    table.decimal('longitude').notNullable();
    table.string('city').notNullable();
    table.string('uf',2).notNullable();
})
}



export async function down(knex: Knex){
    return knex.schema.dropTable('point')
}
//voltar atras, deletar tabela.