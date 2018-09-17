'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {import('@adonisjs/framework/src/Route/Manager'} */
const Route = use('Route');

Route.get('/', () => {
  return {greeting: 'Hello world in JSON'}
});

Route.get('curso', () => {
  return 'Isso vai ser um retorno do estilo texto'
});

Route.get('video/:id', async ({params}) => {
  return 'Essa é nossa video aula de: ' + params.id;
});

Route.get('faz/:bebida?', async ({params}) => {
  // use Coffee as fallback when drink is not defined
  const drink = params.bebida || 'Café'

  return `Voce faz ${drink} para beber!`
})


Route.resource('usuarios', 'UserController')
  .apiOnly()
  .middleware(['auth']);


Route.post('login', 'AuthController.login');
