document.addEventListener("DOMContentLoaded", function () {
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
                initialSkin: {
                    url: "/static/emisoras/skins/Sony CDX-MP3.wsz"
                }
            });

            webamp.renderWhenReady(document.getElementById("winamp-container")).then(() => {
                // Centrar la ventana
                const windowManager = webamp.__internalWindowManager;
                const mainWindow = windowManager?.getWindow?.("main");

                if (mainWindow) {
                    const screenWidth = window.innerWidth;
                    const screenHeight = window.innerHeight;
                    const winWidth = 275;
                    const winHeight = 116;

                    mainWindow.setPosition(
                        Math.floor((screenWidth - winWidth) / 2),
                        Math.floor((screenHeight - winHeight) / 2)
                    );
                }

                // Agrega los listeners a los botones para cambiar skins
                document.querySelectorAll('#skin-buttons button').forEach(button => {
                    button.addEventListener('click', () => {
                        const newSkinUrl = button.getAttribute('data-skin');
                        webamp.setSkinFromUrl(newSkinUrl);
                    });
                });
            });
        });
});
