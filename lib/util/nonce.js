'use strict'

let last = Date.now() * 1000

module.exports = () => {
  let next = Date.now() * 1000
  if (next > last) last = next
  return last++
}
