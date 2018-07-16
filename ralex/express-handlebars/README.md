# Express Handlebars

[X]. Ruta que reciba el número de un blog
    
    get '/blog/:num'

    Adentro se debe de mostrar
    - en un h1 el titulo
    - en un h3 el número de articulo
    - en un p el contenido


[X] Ruta que manda a view con hbs donde capturo: título, número y contenido
    
    get '/blog/new'

[X] Ruta para un servicio POST de blogs
    
    post '/blog'
    
    recibe un body con
        titulo
        numero
        texto

1.  Ruta para la página home
    get '/'
2. Una view home.hbs donde muestra:
    - con algún estilo css link con los títulos a cada blog
    - botón "Agregar nuevo blog" que redirija  a la página de '/blog-new'
3. Ponerle un botón en la página de blog para regresar al home




