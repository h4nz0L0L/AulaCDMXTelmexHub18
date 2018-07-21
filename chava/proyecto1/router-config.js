app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/registro", {
        templateUrl : "registro.html"
    })
    .when("/adopcion", {
        templateUrl : "adopcion.html"
    })
    .when("/extravio", {
        templateUrl : "extravio.html"
    })
    .when("/eventos", {
        templateUrl : "eventos.html"
    })
    .when("/about", {
        templateUrl : "about.html"
    })
    .when("/ser", {
        templateUrl : "ser.html"
    })
    .when("/contacto", {
        templateUrl : "contacto.html"
    });
});