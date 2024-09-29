module.exports = (req, res) => {
    const userAgent = req.headers["user-agent"];

    // Detectar si el dispositivo es móvil
    const isMobile = /mobile|android|iphone|ipad/i.test(userAgent);

    if (isMobile) {
        // Forzar el User-Agent de escritorio
        req.headers["user-agent"] =
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3";
    }

    // Redirigir a la página principal después de modificar el User-Agent
    res.writeHead(302, { Location: "/" });
    res.end();
};
