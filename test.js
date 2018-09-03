import test from 'ava'
import { isValidEmail } from '.'

test('basic emails', t => {
  t.true(isValidEmail('aaa@bbb.com'))
  t.true(isValidEmail('kjetilk@hotmail.com'))
  t.true(isValidEmail('koh.lis@gmail.com'))
  t.true(isValidEmail('koh.lis+test@gmail.com'))
  t.true(isValidEmail('errxn@yahoo.com'))
  t.true(isValidEmail('qrczak@icloud.com'))
  t.true(isValidEmail('crimsane@msn.com'))
  t.true(isValidEmail('pgolle@optonline.net'))
  t.true(isValidEmail('stakasa@msn.com'))
  t.true(isValidEmail('denism@me.com'))
  t.true(isValidEmail('matsn@verizon.net'))
  t.true(isValidEmail('formis@msn.com'))
  t.true(isValidEmail('kewley@att.net'))
  t.true(isValidEmail('elmer@att.net'))
})

test('valid characters', t => {
  t.true(
    isValidEmail(
      "abcdefg.hijklmnopqrstuvwxyz!#$%&'*/=?^_+-`{|}~0123456789@acme-inc.com"
    )
  )
  t.false(isValidEmail('denism[]@me.com'))
})

test('Only one @ allowed', t => {
  t.false(isValidEmail('denism@@me.com'))
  t.false(isValidEmail('@me.com'))
  t.false(isValidEmail('fooobar@'))
})

test('accents are not allowed', t => {
  t.false(isValidEmail('denismé@me.com'))
  t.false(isValidEmail('françois@me.com'))
})

test('period character', t => {
  t.true(isValidEmail('a..a@test.jp'))
  t.true(isValidEmail('a..@test.jp'))
  t.false(isValidEmail('.a@test.jp'))
})

test('base64', t => {
  t.false(isValidEmail('TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCB'))
})

test('spaces are not allowed', t => {
  t.false(isValidEmail('xxx yyy@gmail.com'))
  t.false(isValidEmail('  aaa@dot.com'))
  t.false(isValidEmail('aaa@dot.com\t'))
})

test('comments are not allowed', t => {
  t.false(isValidEmail('john.doe@(comment)example.com'))
  t.false(isValidEmail('john.doe@example.com(comment)'))
})

test('domains without extension are rejected', t => {
  t.false(isValidEmail('foo.bar@gmail'))
	t.false(isValidEmail('a.b@microsoft'))
})
