const  hbs  =  require ( 'hbs' )  // Llamar

/ * 
AYUDANTES
Funciones que me permiten trabajar dentro hbs
* /
hbs . registerHelper ( 'getAnio' ,  ( )  =>  {  / * Me retorna el ano * /
    volver  nueva  fecha ( ) . getFullYear ( )
} ) ;
hbs . registerHelper ( 'capitalizar' ,  ( texto )  =>  {  // cambiar a mayusculas y minusculas (Resive un texto)
    / * Manejo de caracteres * /
    let  palabras  =  texto . dividir ( '' ) ;  // Genera una lista de cadenas separada por algo en blanco
    Palabras . forEach ( ( palabra ,  idx )  =>  {  // forEach -> dentro de una lista: la palabra y el indice
        palabras [ idx ]  =  palabra . charAt ( 0 ) . toUpperCase ( )  +  palabra . rebanada ( 1 ) . toLowerCase ( )
            / * caracter posicion cero y se reliza la mayuscula + cojer el resto y trozar y from hay todo minuscula * /
    } ) ;
    devolver  palabras . unirse ( '' ) ;  / * junta todos los elementos del vector y ponga un espacio el unirse es lo contrario del split * /


} ) ;
