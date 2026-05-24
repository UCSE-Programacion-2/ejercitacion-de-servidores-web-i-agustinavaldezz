/**
 * Módulo que crea y configura el servidor HTTP
 */
const http = require('http');

/**
 * Crea un servidor HTTP que utiliza la función router para manejar las solicitudes
 * @returns {http.Server} Instancia del servidor HTTP
 */
function createServer() {
  const server = http.createServer((req, res) => {
    /* Aquí la lógica del enrutador */
    const headers = { 'Content-Type': 'text/plain; charset=utf-8' }; //Definimos los encabezados que usaremos en todas las rutas

    if (req.url === '/') {
      res.writeHead(200, headers);
      res.end('Bienvenid@s! Gracias por tu visita.');
    } else if (req.url === '/nosotros') {
      res.writeHead(200, headers);
      res.end('Bienvenid@s a saber + de nosotros :)');
    } else if (req.url === '/cursos') {
      res.writeHead(200, headers);
      res.end('Te interesan nuestros cursos. Vení a conocer la oferta!');
    } else if (req.url === '/contacto') {
      res.writeHead(200, headers);
      res.end('Si querés contactarnos, hacelo a este Email: :)');
    } else {
      //cualquier otra ruta
      res.writeHead(404, headers);
      res.end('No se ha encontrado la ruta ingresada.');
    }
  });

  return server;
}

module.exports = createServer;
