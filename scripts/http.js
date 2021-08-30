// HTTP Library

function httpGet(endpoint) {
    return fetch(endpoint, { method: 'GET' }).then((response) => response.json());
}

// function httpPost() {} // stubbed

// function httpPut() {} // stubbed

function httpDelete(endpoint) {
    return fetch(endpoint, { method: 'DELETE' }).then((response) => response.json());
}
