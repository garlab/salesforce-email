const test = require('node:test')
const assert = require('node:assert')
const { isValidEmail } = require('.')

test('basic emails', () => {
  assert.strictEqual(isValidEmail('aaa@bbb.com'), true)
  assert.strictEqual(isValidEmail('kjetilk@hotmail.com'), true)
  assert.strictEqual(isValidEmail('koh.lis@gmail.com'), true)
  assert.strictEqual(isValidEmail('koh.lis+test@gmail.com'), true)
  assert.strictEqual(isValidEmail('errxn@yahoo.com'), true)
  assert.strictEqual(isValidEmail('qrczak@icloud.com'), true)
  assert.strictEqual(isValidEmail('crimsane@msn.com'), true)
  assert.strictEqual(isValidEmail('pgolle@optonline.net'), true)
  assert.strictEqual(isValidEmail('stakasa@msn.com'), true)
  assert.strictEqual(isValidEmail('denism@me.com'), true)
  assert.strictEqual(isValidEmail('matsn@verizon.net'), true)
  assert.strictEqual(isValidEmail('formis@msn.com'), true)
  assert.strictEqual(isValidEmail('kewley@att.net'), true)
  assert.strictEqual(isValidEmail('elmer@att.net'), true)
})

test('valid characters', () => {
  assert.strictEqual(
    isValidEmail(
      "abcdefg.hijklmnopqrstuvwxyz!#$%&'*/=?^_+-`{|}~0123456789@acme-inc.com"
    ),
    true
  )
  assert.strictEqual(isValidEmail('denism[]@me.com'), false)
})

test('Only one @ allowed', () => {
  assert.strictEqual(isValidEmail('denism@@me.com'), false)
  assert.strictEqual(isValidEmail('@me.com'), false)
  assert.strictEqual(isValidEmail('fooobar@'), false)
})

test('accents are not allowed', () => {
  assert.strictEqual(isValidEmail('denismé@me.com'), false)
  assert.strictEqual(isValidEmail('françois@me.com'), false)
})

test('period character', () => {
  assert.strictEqual(isValidEmail('a..a@test.jp'), true)
  assert.strictEqual(isValidEmail('a..@test.jp'), true)
  assert.strictEqual(isValidEmail('.a@test.jp'), false)
})

test('base64', () => {
  assert.strictEqual(isValidEmail('TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCB'), false)
})

test('spaces are not allowed', () => {
  assert.strictEqual(isValidEmail('xxx yyy@gmail.com'), false)
  assert.strictEqual(isValidEmail('  aaa@dot.com'), false)
  assert.strictEqual(isValidEmail('aaa@dot.com\t'), false)
})

test('comments are not allowed', () => {
  assert.strictEqual(isValidEmail('john.doe@(comment)example.com'), false)
  assert.strictEqual(isValidEmail('john.doe@example.com(comment)'), false)
})

test('domains without extension are rejected', () => {
  assert.strictEqual(isValidEmail('foo.bar@gmail'), false)
  assert.strictEqual(isValidEmail('a.b@microsoft'), false)
})
