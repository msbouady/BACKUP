import express from 'express';
import { performBackup } from './controllers/backupController.js';
import { port } from './config.js';
import cron from 'node-cron';

const app = express();

// Schedule backups every six months
cron.schedule('0 0 1 1,7 *', performBackup); // At midnight on January 1st and July 1st

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
