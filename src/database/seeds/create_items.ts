import Knex from 'knex'

export async function seed(knex: Knex){
    await knex('items').insert([
        {title: 'lampadas', image: 'lampadas.svg'},
        {title: 'pilhas e baterias', image: 'baterias.svg'},
        {title: 'papeis e papelao', image: 'papeis-papelao.svg'},
        {title: 'Resíduos eletronicos', image: 'eletronicos.svg'},
        {title: 'Respiduos organicos', image: 'residuos.svg'},
        {title: 'Oleo de cozinha', image: 'Oleo.svg'}
    ]);
}