import fs from 'fs';
import tar from 'tar';
import path from 'path';

const backupDir = './backups';

export const createBackupDir = () => {
  const date = new Date();
  const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  const dirPath = path.join(backupDir, dateString);

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  return dirPath;
};

export const compressBackup = async (backupDir, backupFile) => {
  const tarPath = `${backupDir}/backup-${backupFile}.tar.gz`;
  await tar.c({ gzip: true, file: tarPath }, [backupFile]);
  fs.unlinkSync(path.join(backupDir, backupFile));
  return tarPath;
};
