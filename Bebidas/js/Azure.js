
(function() {
    var cliente =
        new WindowsAzure.MobileServiceClient("https://awnotepad.azure-mobile.net");
   

    var registro = function(bebida) {
        var tabla = cliente.getTable("bebidas");
        return tabla.insert(bebida.toInsert());
    };
    var busqueda = function(nom) {
        var tabla = cliente.getTable("bebidas");
        return  tabla.where({ nombre: nom }).read();

    };


    WinJS.Namespace.define("Azure", {
        Alta: registro,
        Busqueda: busqueda

    });
})();