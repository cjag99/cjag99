const fs = require("fs");
const path = require("path");
const axios = require("axios");

const username = "cjag99"; // tu usuario de GitHub
const theme = "onedark";
const countPrivate = true;
const token = process.env.GH_TOKEN;

const url = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${theme}&count_private=${countPrivate}`;

axios.get(url, {
  headers: {
    Authorization: `token ${token}`
  },
  responseType: "arraybuffer"
})
.then(res => {
  fs.writeFileSync(path.join(__dirname, "stats.svg"), res.data);
  console.log("stats.svg generado correctamente");
})
.catch(err => {
  console.error("Error generando stats:", err.message);
});
