(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            document.getElementById("btnReg").addEventListener("click",
                function() {
                    WinJS.Navigation.navigate("/pages/registro/registro.html",
                        WinJS.Navigation.state);


                });
            document.getElementById("btnBus").addEventListener("click",
                function () {
                    WinJS.Navigation.navigate("/pages/buscador/buscar.html",
                        WinJS.Navigation.state);
                    });
        }
    });
})();
