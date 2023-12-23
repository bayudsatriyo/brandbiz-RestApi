import { app } from './applications/app.js';
import { logger } from './applications/logging.js';

app.listen(8080, () => {
  logger.info('App listen in port 8080');
});
