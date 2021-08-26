"""Web Routes."""

from masonite.routes import Get, Post

ROUTES = [
    # Get('/', 'WelcomeController@show').name('welcome'),
    Get('/', 'HomeController@show').name('home'),
    Get('/registration', 'RegistrationController@show').name('registration'),
]
