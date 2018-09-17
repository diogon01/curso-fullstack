'use strict';

const User = use('App/Models/User');
const Database = use('Database');

/**
 * Resourceful controller for interacting with users
 */
class UserController {
  /**
   * Show a list of all users.
   * GET users
   */
  async index({request, response, view}) {

    return await User.query().orderBy('id', 'desc').paginate(1, 50);
  }

  /**
   * Create/save a new user.
   * POST users
   */
  async store({request, response}) {
    const trx = await Database.beginTransaction();
    const all = request.all();

    try {
      const user = await User.create(all,trx);
    trx.commit();
    return response.status(201).send(user);
  }
    catch (e) {
      trx.rollback();
      return response.status(500).send(e);
    }

  }

  /**
   * Display a single user.
   * GET users/:id
   */
  async show({params, request, response, view}) {
    const user = await User.findBy('id', params.id);
    return user;
  }

  /**
   * Update user details.
   * PUT or PATCH users/:id
   */
  async update({params, request, response}) {
    const user = await User.findBy('id', params.id);
    const all = request.all();
    user.merge(all);
    await user.save();
    return user;
  }

  /**
   * Delete a user with id.
   * DELETE users/:id
   */
  async destroy({params, request, response}) {
    const user = await User.findByOrFail('id', params.id);
    await user.delete();
    return user;
  }
}

module.exports = UserController;
