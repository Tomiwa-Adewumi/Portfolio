import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { getApexStats } from './api/apex-data.js';
import { getLetterboxdFilms } from './api/letterboxd-data.js';

function localApexApi(apiKey) {
  return {
    name: 'local-apex-api',
    configureServer(server) {
      server.middlewares.use('/api/apex', async (_request, response) => {
        response.setHeader('Content-Type', 'application/json');
        try {
          const result = await getApexStats(apiKey);
          response.statusCode = 200;
          response.end(JSON.stringify(result));
        } catch (error) {
          response.statusCode = error.status || 502;
          response.end(JSON.stringify({ error: error.message }));
        }
      });
    },
  };
}

function localLetterboxdApi() {
  return { name: 'local-letterboxd-api', configureServer(server) {
    server.middlewares.use('/api/letterboxd', async (_request, response) => {
      response.setHeader('Content-Type', 'application/json');
      try { response.end(JSON.stringify(await getLetterboxdFilms())); }
      catch (error) { response.statusCode = error.status || 502; response.end(JSON.stringify({ error: error.message })); }
    });
  } };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), localApexApi(env.TRACKER_API_KEY || env.APEX_API_KEY), localLetterboxdApi()],
  };
});
