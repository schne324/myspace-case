const test = require('ava')
const myspaceCase = require('./')

test('alternates between upper and lower casing', t => {
  t.is(myspaceCase('hello'), 'hElLo')
  t.is(myspaceCase('world'), 'wOrLd')
})

test('ignores input casing', t => {
  t.is(myspaceCase('HELLO'), 'hElLo')
  t.is(myspaceCase('WoRlD'), 'wOrLd')
})
