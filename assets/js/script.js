// clases, polimorfismo, closures y patrón módulo.

class Multimedia {
    constructor(url) {
        let _url = url;
        this.getUrl = () => _url;
        this.setUrl = (newUrl) => _nombre = newUrl;
    }
// Get
    get url() {
        return this.getUrl();
    }
// Set
    set url(newUrl) {
        this.setUrl(newUrl);
    }

// Funcion
    setInicio() {
        console.log('Este método es para realizar un cambio en la URL del video.');
    }
}

// Clase
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        let _id = id;
        this.getId = () => _id;
        this.setId = (newId) => _id = newId;
    }
// Get
    get id() {
        return this.getId()
    }
// Set
    set id(newId) {
        this.setId(newId);
    }
// Funcion
    playMultimedia() {
        setIframe.responseSetIframePrivateFunction(this.getUrl(), this.getId());
    }
// Funcion
    setInicio(timeVideo) {
        const iframeElement = document.getElementById(this.getId());
        iframeElement.setAttribute('src', `${this.getUrl()}?start=${timeVideo}`);
    }
}

//
const setIframe = (() => {
    const setIframePrivate = (newUrl, newId) => {
        const iframeElement = document.getElementById(newId);
        iframeElement.setAttribute('src', newUrl);
    }
    return {
        responseSetIframePrivateFunction: setIframePrivate,
    }
})();

// Música
const reproductorMusica = new Reproductor('https://www.youtube.com/embed/Hyl0o8XqBzk', 'musica');
reproductorMusica.playMultimedia();
reproductorMusica.setInicio('20');

// Película
const reproductorPeliculas = new Reproductor('https://www.youtube.com/embed/NpRJ8433nWY', 'peliculas');
reproductorPeliculas.playMultimedia();
reproductorPeliculas.setInicio('150');

// Serie
const reproductorSeries = new Reproductor('https://www.youtube.com/embed/3NHWRJ4JJpo', 'series');
reproductorSeries.playMultimedia();
reproductorSeries.setInicio('130');



