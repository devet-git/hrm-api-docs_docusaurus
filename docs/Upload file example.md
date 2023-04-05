---
id: upload-file
title: Upload file example 
sidebar_label: Upload file example
sidebar_position: 3
---


# Upload file example

```js title="src/service/fileService.js"
import api from "../config/api"

async function upload(filesToUpload) {
	try {
		let formData = new FormData()
		filesToUpload.forEach((file) => formData.append("files", file))
		const res = await api.post("/files", formData,
			{
				headers: { "Content-Type": "multipart/form-data", }
			}
		)
		return res.data
	} catch (error) {
		return error.response?.data || null
	}
},
```