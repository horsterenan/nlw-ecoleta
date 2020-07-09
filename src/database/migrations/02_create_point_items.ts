import Knex from "knex";

export async function up(knex :Knex){
return knex.schema.createTable('point_items', table=>{ //Criar tabela
    table.increments('id').primary(); //método de incremento da tabela, numero que vai subindo para cada registro, 1,2,3,4 (ID)
    table.integer('point_id')
        .notNullable()
        .references('id')
        .inTable('points')
    table.integer('item_id')
    .notNullable()
    .references('id')
    .inTable('items')
})
}



export async function down(knex: Knex){
    return knex.schema.dropTable('point_items')
}
//voltar atras, deletar tabela.