# Action Cable Jwt

This project solves the following issues which the official implementation of [action cable](https://github.com/rails/rails/tree/master/actioncable) hasn't solved:

* Authenticate through jwt token

  It is solved simply by appending jwt token in the `Sec-WebSocket-Protocol` of the headers of initial WebSocket connection's. 


* Make action cable compatible with SSR frameworks , ex., [Nextjs](https://nextjs.org/).

  The original generated [action_cable.js](https://github.com/rails/rails/blob/master/actioncable/app/assets/javascripts/action_cable.js) attaches `self` value which can't be recognized by backend's Node server. It is solved by one line config in `rollup.config.js`

   ```

  intro: "var self = typeof window !== 'undefined' ? window : global;"
  ```
* Generate the asset in production mode

Besides, this project is setup as a standalone action cable js project which is ready for your play and development.

# Usage

```
yarn add actioncable-jwt
```
