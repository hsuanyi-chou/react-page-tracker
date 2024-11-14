const esbuild = require('esbuild');
const path = require('path');
const fs = require('fs');

const outputDir = 'dist';

const compressFiles = (dir) => {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      compressFiles(fullPath); // 遞迴處理子目錄
    } else if (file.endsWith('.js')) {
      console.log(`Compressing ${fullPath}`);
      esbuild
        .build({
          entryPoints: [fullPath],
          outfile: fullPath, // 壓縮後覆蓋原檔案
          minify: true,
          allowOverwrite: true,
        })
        .catch((err) => console.error(`Error compressing ${fullPath}:`, err));
    }
  });
};

compressFiles(outputDir);
