import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { getLetterboxdFilms } from './api/letterboxd-data.js';

function localLetterboxdApi() {
  return { name: 'local-letterboxd-api', configureServer(server) {
    server.middlewares.use('/api/letterboxd', async (_request, response) => {
      response.setHeader('Content-Type', 'application/json');
      try { response.end(JSON.stringify(await getLetterboxdFilms())); }
      catch (error) { response.statusCode = error.status || 502; response.end(JSON.stringify({ error: error.message })); }
    });
  } };
}

export default defineConfig({
  plugins: [react(), localLetterboxdApi()],
});
