const os = require("os");
console.log(`The system is up for ${os.uptime() / 60} minutes`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
