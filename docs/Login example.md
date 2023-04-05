---
id: login
title: Login example 
sidebar_label: Login example
sidebar_position: 3
---


# Login example

```js title="src/service/authService.js"
import api from "../config/api"

export default async function authService(){
	const response = await api.post('/auth/login', {email:"your email", password:"your password"})
}
```