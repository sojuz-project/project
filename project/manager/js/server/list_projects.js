const fs = require('fs-extra');
module.exports = {
  responce: (pDir) => {
    const responce = fs.readdirSync(pDir).filter(function(file) {
      return fs.statSync(pDir + '/' + file).isDirectory();
    });
    console.log(responce, typeof responce);
    return responce;
  },
};
