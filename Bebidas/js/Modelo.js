(function() {
    var Bebida = WinJS.Class.define(function (id, nombre, precio) {

        this.id = id;
        this.nombre = nombre;
        this.precio = precio;


    },
        {
            toInsert: function () {

                return { nombre: this.nombre, precio: this.precio }

            }


        }
    );

    WinJS.Namespace.define("Modelo", {
        Bebida: Bebida

    });

})();