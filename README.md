# salesforce-email

This package provides a function checking that a given email address is compatible with Salesforce.
It follows [the salesforce format][1] for the local part and [Mozilla regex][2] for the domain part of the email address.

In order to be compatible with Salesforce the [RFC 6532](https://tools.ietf.org/html/rfc6532) is not fully implemented and email addresses with accents or other special characters will be rejected.

Unlike Salesforce, it does not accept comments; for example john.doe@(comment)example.com, and john.doe@example.com(comment) are allowed by salesforce but rejected by this module.

## Installation

With npm:

    npm install salesforce-email

Or with yarn

    yarn add salesforce-email

## Usage

```js
import { isValidEmail } from 'salesforce-email'

console.log(isValidEmail('foo@bar.com')) // true
```

[1]: https://help.salesforce.com/articleView?id=000001145&type=1
[2]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#Validation
