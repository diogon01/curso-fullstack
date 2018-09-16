'use strict'

const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments();
      table.string('username',80).unique();
      table.string('email').unique();
      table.string('password',80).notNullable();
      table.integer('age');
      table.timestamps();
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UsersSchema
