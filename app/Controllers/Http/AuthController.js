'use strict';

class AuthController {
  async login ({ request, auth}){
    const {email, password} = request.all();
    const {token} = await auth.attempt(email, password);
    return token;
  }
}

module.exports = AuthController;
