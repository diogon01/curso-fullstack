'use strict';

const User = use('App/Models/User');

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
    const all = request.all();
    const user = await User.create(all);
    return user;
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
   * Render a form to update an existing user.
   * GET users/:id/edit
   */
  async edit({params, request, response, view}) {
  }

  /**
   * Update user details.
   * PUT or PATCH users/:id
   */
  async update({params, request, response}) {
  }

  /**
   * Delete a user with id.
   * DELETE users/:id
   */
  async destroy({params, request, response}) {
  }
}

module.exports = UserController;
