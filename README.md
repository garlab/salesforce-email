# salesforce-email

Check that email respect the Salesforce format.
This follow [the salesforce format][1] for the local-part and [Mozilla regex][2] for the domain-part.

It also rejects the comment blocks, for example john.doe@(comment)example.com, and john.doe@example.com(comment) are allowed by salesforce but rejected by this module.

## Installation

With npm:

    npm i salesforce-email

Or with yarn

    yarn install salesforce-email

## Usage

    import { isValidEmail } from 'salesforce-email'

    console.log(isValidEmail('foo@bar.com')) // true

[1]: https://help.salesforce.com/articleView?id=000001145&type=1
[2]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#Validation
