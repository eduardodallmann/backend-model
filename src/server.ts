import dotenv from 'dotenv';
import { appDataSource } from './config/db';
import app from './routes';

dotenv.config();
const PORT = process.env.PORT || 8000;

async function run() {
  try {
    await appDataSource.initialize();

    app.listen(PORT, () => {
      console.info('Server is running on port', PORT);
    });
  } catch (error) {
    console.error(error);
  }
}

run();
