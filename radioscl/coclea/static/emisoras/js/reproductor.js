document.addEventListener("DOMContentLoaded", function() {
    fetch("/emisoras-json/")
        .then(response => response.json())
        .then(data => {
            const tracks = data.map(emisora => ({
                metaData: {
                    artist: emisora.artist,
                    title: emisora.title
                },
                url: emisora.url,
                duration: 99999999
            }));

            const webamp = new Webamp({
                initialTracks: tracks,
                availableSkins: [
                    {
                        url: "/static/emisoras/skins/Khoa_Vuong.wsz",
                        name: "Frutiger aero"
                    }
                ],
                initialSkin: {
                    url: "/static/emisoras/skins/Khoa_Vuong.wsz"
                }
            });

            webamp.renderWhenReady(document.getElementById("winamp-container")).then(() => {
                // Centra la ventana principal de Webamp manualmente
                const windowManager = webamp.__internalWindowManager;
                const mainWindow = windowManager.getWindow("main");

                const screenWidth = window.innerWidth;
                const screenHeight = window.innerHeight;

                const winWidth = 275; // Ancho estimado de la ventana principal
                const winHeight = 116; // Alto estimado

                mainWindow.setPosition(
                    Math.floor((screenWidth - winWidth) / 2),
                    Math.floor((screenHeight - winHeight) / 2)
                );
            });
        });
});
