const  htpp  =  require ( 'http' ) ;  // traemos e incorporamos al libreria
htpp . createServer ( ( req ,  res )  =>  {
        // crea el servidor con Una función htpp resiviendo el req y res; req: viene del cliente y el res: es lo que yo respodere al cliente
        / * res.write ('Hola mundo desde la WEB') // cuando haga clic en escribir en la Web en un texto simple * /

        res . writeHead ( 200 ,  {  'Content-Type' : 'application / json'  } ) ;  // 200 la respuesta fue corecta
        // El tipo de contenido le voy a decir que le voy a enviar un json
        / * Respondemos un Json * /
        let  content  =  {  // contenido
                nombre : "Morales" ,
                edad : 23 ,
                url : req . url  //
            }
            // enviando un json al cliente
        res . escribir ( JSON . stringify ( contenido ) )
            // La peticion vamos a llamar la URL y va mandar a strificar al objeto Json 

        res . end ( )  // finalizas la escritura del servidor
    } ) . escuchar ( 8000 )  // por que puerto voy a escuchar esto


consola . log ( "escuchando al servidor con el puerto 8000" ) ;

/ * 
aplicación para probarlo node 
 npm expreso - guardar
* /

/ * 
https://handlebarsjs.com/
instalacion manillares: npm install hbs --save
* /
