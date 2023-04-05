---
id: config
title: Config with Axios in React 
sidebar_label: Config with Axios in React
sidebar_position: 2
---


# Config with Axios in React

Config base URL and headers with API key

```js title="src/config/api.js"
const api = axios.create({
	baseURL: 'https://hrm-api.herokuapp.com/api/v1',
	headers: {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${apiKey}`
	}
})
export default api
```

List all employees

```js title="src/service/employeeService.js"
import api from "../config/api"

export default async function employeeService(){
	await api.get('/employees')
}
```