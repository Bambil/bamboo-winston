/*
 * +===============================================
 * | Author:        Parham Alvani <parham.alvani@gmail.com>
 * |
 * | Creation Date: 24-08-2017
 * |
 * | File Name:     index.js
 * +===============================================
 */
const happyWinston = require('happy-winston')
const config = require('config')

const server = new happyWinston.Winstond({
  services: ['collect', 'query'],
  port: config.winstond.port,
  host: config.winstond.host
})

server.add(happyWinston.transports.Console, {
  colorize: true,
  timestamp: true,
  stringify: true,
  prettyPrint: true
})

server.listen()
