const server = require("./api/server");

const PORT = process.env.PORT || 9980;
server.listen(PORT, () => {

  console.log(`\n== API running on port ${PORT} ==\n`);
});
