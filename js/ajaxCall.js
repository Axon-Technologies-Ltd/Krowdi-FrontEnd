var baseUrl = 'https://fu16gr4a77.execute-api.us-east-1.amazonaws.com/dev'

function ajaxProductionJson(serviceUrl, param, methodType) {
	let url =
		'https://20uom9hh19.execute-api.us-east-1.amazonaws.com/Krowdy-UAT'
	var resp
	var headers = {}
	$.ajax({
		type: methodType,
		url: url + '' + serviceUrl,
		data: param,
		datatype: 'application/json',
		contentType: 'application/json',
		async: false,

		success: function (result, arguments, text) {
			if (arguments == 'success') {
				var data = text.responseText
				try {
					resp = JSON.parse(data)
				} catch (e) {}
			} else {
				resp = 'error'
			}
		},
		error: function (xhr, status, text) {
			console.log(xhr)
			var responseStatus = xhr.status
			if (responseStatus == 403) {
				document.cookie = ''
				window.location.href = './index.html'
			}
			console.log('Failure!')
			resp = false
		},
	})
	return resp
}

function ajaxCallJson(serviceUrl, param, methodType) {
	var resp
	var headers = {}
	$.ajax({
		type: methodType,
		url: baseUrl + '' + serviceUrl,
		data: param,
		datatype: 'application/json',
		contentType: 'application/json',
		async: false,

		success: function (result, arguments, text) {
			if (arguments == 'success') {
				var data = text.responseText
				try {
					resp = JSON.parse(data)
				} catch (e) {}
			} else {
				resp = 'error'
			}
		},
		error: function (xhr, status, text) {
			console.log(xhr)
			var responseStatus = xhr.status
			if (responseStatus == 403) {
				document.cookie = ''
				window.location.href = './index.html'
			}
			console.log('Failure!', text)
			resp = false
		},
	})
	return resp
}

function ajaxCallJsonForLoraWAN(serviceUrl, param, methodType) {
	var resp
	var headers = {
		origin: '*',
	}
	$.ajax({
		type: methodType,
		url: serviceUrl,
		data: param,
		datatype: 'application/json',
		contentType: 'application/json',
		async: false,

		success: function (result, arguments, text) {
			if (arguments == 'success') {
				var data = text.responseText
				try {
					resp = JSON.parse(data)
				} catch (e) {}
			} else {
				resp = 'error'
			}
		},
		error: function (xhr, status, text) {
			console.log(xhr)
			var responseStatus = xhr.status
			if (responseStatus == 403) {
				document.cookie = ''
				window.location.href = './index.html'
			}
			console.log('Failure!')
			resp = false
		},
	})
	return resp
}

function ajaxCallJsonWithSession(serviceUrl, param, methodType) {
	var resp
	var cookies = document.cookie.split(';')
	var authToken
	for (var i = 0; i < cookies.length; i++) {
		if (cookies[i].split('=')[0].trim() == 'auth-token') {
			authToken = cookies[i].split('=')[1]
			break
		}
	}
	var headers = {
		'auth-token': authToken,
	}
	$.ajax({
		type: methodType,
		url: baseUrl + '' + serviceUrl,
		data: param,
		datatype: 'application/json',
		contentType: 'application/json',
		headers: headers,
		async: false,

		success: function (result, arguments, text) {
			if (arguments == 'success') {
				var data = text.responseText
				try {
					resp = JSON.parse(data)
				} catch (e) {}
			} else {
				resp = 'error'
			}
		},
		error: function (xhr, status, text) {
			console.log(xhr)
			var responseStatus = xhr.status
			if (responseStatus == 403) {
				document.cookie = ''
				window.location.href = './index.html'
			}
			console.log('Failure!')
			resp = false
		},
	})
	return resp
}

function ajaxCallIamJsonWithSession(serviceUrl, param, methodType) {
	var resp
	var cookies = document.cookie.split(';')
	var authToken
	for (var i = 0; i < cookies.length; i++) {
		if (cookies[i].split('=')[0].trim() == 'auth-token') {
			authToken = cookies[i].split('=')[1]
			break
		}
	}
	var headers = {
		'auth-token': authToken,
	}
	$.ajax({
		type: methodType,
		url: baseUrl + '' + serviceUrl,
		data: param,
		datatype: 'application/json',
		contentType: 'application/json',
		headers: headers,
		async: false,

		success: function (result, arguments, text) {
			if (arguments == 'success') {
				var data = text.responseText
				try {
					resp = JSON.parse(data)
				} catch (e) {}
			} else {
				resp = 'error'
			}
		},
		error: function (xhr, status, text) {
			var responseStatus = xhr.status
			if (responseStatus == 403) {
				document.cookie = ''
				window.location.href = './index.html'
			}
			console.log('Failure!')
			resp = false
		},
	})
	return resp
}
