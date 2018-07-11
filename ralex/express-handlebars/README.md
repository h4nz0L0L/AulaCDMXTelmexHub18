# Express Handlebars

1. Ruta que reciba el número de un blog
    
    get '/blog/:num'

    Adentro se debe de mostrar
    - en un h1 el titulo
    - en un h3 el número de articulo
    - en un p el contenido

2. Ruta que manda a view con hbs donde capturo: título, número y contenido
    
    get '/blog/new'

3. Ruta para un servicio POST de blogs
    
    post '/blog'
    
    recibe un body con
        titulo
        numero
        contenido

