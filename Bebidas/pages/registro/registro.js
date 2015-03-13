// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/registro/registro.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.

        registar: function() {

            var b = new Modelo.Bebida(0, document.getElementById("txtNom").value,
                document.getElementById("txtPre").value);

            Azure.Alta(b).done(function(res) {
                if (res.id) {
                    new Windows.UI.Popups.MessageDialog("Registrado").showAsync();
                    WinJS.Navigation.back(1);

                } else {
                    new Windows.UI.Popups.MessageDialog("Error").showAsync();

                }

            });

        },

        ready: function (element, options) {

            document.getElementById("btnRunReg").addEventListener("click",
                this.registar);

        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        }
    });
})();
