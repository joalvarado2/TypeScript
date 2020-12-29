(function(){

    function activar(                       // Parametros opcionales
        quien: string,                      // Obligatorios
        momento? :string,                   // Opcionales
        objeto : string = "batiseñal"       // Por defecto
    ){
        if(momento){
            console.log(`${quien} activó la ${objeto} en la ${momento}`)
        } else {
            console.log(`${quien} activó la ${objeto}`)
        }
    }

    activar("gordon", "tarde");
})()