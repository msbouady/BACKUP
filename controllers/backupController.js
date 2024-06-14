const { execPromise } = require('../utils/execPromise');
const { createBackupDir, compressBackup } = require('../backup');
const { pgUser, pgHost, pgDatabase, pgPassword, pgPort } = require('../config');

const performBackup = async () => {
  const backupDir = createBackupDir();
  const date = new Date();
  const backupFile = `backup-${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}.sql`;

  try {
    const dumpCommand = `pg_dump --dbname=postgresql://${pgUser}:${pgPassword}@${pgHost}:${pgPort}/${pgDatabase} > ${path.join(backupDir, backupFile)}`;
    await execPromise(dumpCommand);

    const compressedBackup = await compressBackup(backupDir, backupFile);
    console.log('Backup and compression completed:', compressedBackup);
  } catch (error) {
    console.error('Error during backup:', error);
  }
};

module.exports = {
  performBackup,
};
