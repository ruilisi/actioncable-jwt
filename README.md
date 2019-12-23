# Action Cable Jwt

This package provides authentication through [JWT](https://jwt.io/) for [action cable](https://github.com/rails/rails/tree/master/actioncable) and other features.
The recommended ways for handling connections of `acitoncable-jwt` are:
* Gem [devise-jwt](https://github.com/waiting-for-dev/devise-jwt)
* Rails starter kit [rails-pangu](https://github.com/ruilisi/rails-pangu)

## Install

```
npm install --save actioncable-jwt
yarn add actioncable-jwt
```

## Usage
```javascript
import { createConsumer } from 'actioncable-jwt'
const consumer = createConsumer(ACTIONCABLE_URL, JWT_TOKNE) 
```


## Features

Besides that this package is setup as a standalone action cable project, features below are provided:

* Authenticate through jwt token

  It is solved simply by appending jwt token in the `Sec-WebSocket-Protocol` of the headers of initial WebSocket connection's. 


* Make action cable compatible with SSR frameworks , ex., [Nextjs](https://nextjs.org/).

  The original generated [action_cable.js](https://github.com/rails/rails/blob/master/actioncable/app/assets/javascripts/action_cable.js) attaches `self` value which can't be recognized by backend's Node server. It is solved by one line config in `rollup.config.js`

   ```

  intro: "var self = typeof window !== 'undefined' ? window : global;"
  ```
* Generate the asset in production mode
* The original actioncable package does not deal with backend disconnection event with an `unauthorized` reason, this package does.
