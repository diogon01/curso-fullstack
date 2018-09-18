'use strict'

class StoreUser {
  get rules () {
    return {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password:'required'
    }
  }

  async fails (errorMessages) {
    return this.ctx.response.status(413).send(errorMessages);
  }

  get messages() {
    return{
      'username.required': 'Campo nome de usuario é obrigatorio',
      'username.unique': 'Usuario ja cadastrado no sistema',
      'email.required': 'Campo é obrigatorio',
      'email.email': 'Campo temm que ser um e-mail valido',
      'email.unique': 'Email ja cadastrado no sistema',
      'password.required': 'Campo senha obrigatorio'
    }

  }

}

module.exports = StoreUser;
