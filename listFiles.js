const { exec } = require('child_process')

exec('ls -lh', (error, stdout, stderr) => {
  if (error) {
    console.error(`error: ${error.message}`);
    return;
   }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
   }
    console.log(`stdout:\n${stdout}`);
});
