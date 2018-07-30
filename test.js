import test from 'ava'
import { isValid } from '.'

test('basic emails', t => {
  t.true(isValid('aaa@bbb.com'))
  t.true(isValid('kjetilk@hotmail.com'))
  t.true(isValid('koh.lis@gmail.com'))
  t.true(isValid('koh.lis+test@gmail.com'))
  t.true(isValid('errxn@yahoo.com'))
  t.true(isValid('qrczak@icloud.com'))
  t.true(isValid('crimsane@msn.com'))
  t.true(isValid('pgolle@optonline.net'))
  t.true(isValid('stakasa@msn.com'))
  t.true(isValid('denism@me.com'))
  t.true(isValid('matsn@verizon.net'))
  t.true(isValid('formis@msn.com'))
  t.true(isValid('kewley@att.net'))
  t.true(isValid('elmer@att.net'))
})

test('valid characters', t => {
  t.true(
    isValid(
      "abcdefg.hijklmnopqrstuvwxyz!#$%&'*/=?^_+-`{|}~0123456789@acme-inc.com"
    )
  )
  t.false(isValid('denism[]@me.com'))
})

test('Only one @ allowed', t => {
  t.false(isValid('denism@@me.com'))
  t.false(isValid('@me.com'))
  t.false(isValid('fooobar@'))
})

test('accents are not allowed', t => {
  t.false(isValid('denismé@me.com'))
  t.false(isValid('françois@me.com'))
})

test('period character', t => {
  t.true(isValid('a..a@test.jp'))
  t.true(isValid('a..@test.jp'))
  t.false(isValid('.a@test.jp'))
})

test('base64', t => {
  t.false(isValid('TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCB'))
})

test('spaces are not allowed', t => {
  t.false(isValid('xxx yyy@gmail.com'))
  t.false(isValid('  aaa@dot.com'))
  t.false(isValid('aaa@dot.com\t'))
})

test('comments are not allowed', t => {
  t.false(isValid('john.doe@(comment)example.com'))
  t.false(isValid('john.doe@example.com(comment)'))
})
