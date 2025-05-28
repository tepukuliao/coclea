document.addEventListener("DOMContentLoaded",function() {
    const webamp = new Webamp({
        initialTracks: [
            {
                metaData: {
                    artist: "Radio Concierto",
                    title: "Transmisión en vivo",
                },
                url: "https://playerservices.streamtheworld.com/api/livestream-redirect/CONCIERTO.mp3",
                duration: 99999999 // stream, duración indefinida
            },
            {
                metaData: {
                    artist: "Radio Bío Bío",
                    title: "Transmisión en vivo",
                },
                url: "http://redirector.dps.live/biobiosantiago/aac/playlist.m3u8",
                duration: 99999999 // stream, duración indefinida
            }
        ],
        availableSkins: [
            {
                url: "static/emisoras/skins/Frutiger_Aero.wsz",
                name: "Frutiger aero"
            }
        ],
        initialSkin: {
            url: "/static/emisoras/skins/Frutiger_Aero.wsz"
        }
    });

    webamp.renderWhenReady(document.getElementById("winamp-container"));
});