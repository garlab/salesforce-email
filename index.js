const regex = /^[-+`{|}~a-z0-9!#$%&'*/=?_^][-+`{|}~a-z0-9!#$%&'*/=?_.^]*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

exports.isValid = email => !!String(email).match(regex)
