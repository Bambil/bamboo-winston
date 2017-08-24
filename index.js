/*
 * +===============================================
 * | Author:        Parham Alvani <parham.alvani@gmail.com>
 * |
 * | Creation Date: 24-08-2017
 * |
 * | File Name:     index.js
 * +===============================================
 */
const winstond = require('winstond')
const config = require('config')

const server = winstond.nssocket.createServer({
  services: ['collect', 'query', 'stream'],
  port: config.winstond.port,
  host: config.winstond.host
})

server.add(winstond.transports.Console, {
  colorize: true,
  json: false,
  stringify: true,
  prettyPrint: true
})

server.listen()
