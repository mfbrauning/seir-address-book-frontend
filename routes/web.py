"""Web Routes."""

from masonite.routes import Get, Post, Put, Delete, RouteGroup

ROUTES = [
    Get("/", "WelcomeController@show").name("welcome"),
    RouteGroup([
        Get("/", "ContactController@index").name("index"),
        Get("/@id", "ContactController@show").name("show"),
        Post("/", "ContactController@create").name("create"),
        Put("/@id", "ContactController@update").name("update"),
        Delete("/@id", "ContactController@destroy").name("destroy")
        ], prefix="/contacts", name="contacts")
]
