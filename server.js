const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send("I Need To Make Bot Always Online")
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("Bot is ready.")
  })
}

module.exports = keepAlive
