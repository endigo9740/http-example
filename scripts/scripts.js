// HANDLE HTTP

// Generic HTTP method ---

function httpGet(endpoint) {
    return fetch(endpoint).then((response) => response.json());
}

// POST (stubbed)
// PUT (stubbed)
// DELETE (stubbed)

// Append to DOM

function appendToDOM(elementId, htmlString) {
    const elem = document.getElementById(elementId);
    elem.innerHTML = htmlString;
}

// Query for Specific Data ---

function getSinglePost() {
    httpGet('https://jsonplaceholder.typicode.com/posts/1').then((res) => {
        appendToDOM('postSingle', `<article title="${res.id}"><h3>${res.title}</h3><p>${res.body}</p></article>`);
    });
}

function getMultiplePosts() {
    httpGet('https://jsonplaceholder.typicode.com/posts').then((res) => {
        let htmlString = '';
        for (let i = 0; i < res.length; i++) {
            htmlString += `<article><h3>${res[i].title}</h3><p>${res[i].body}</p></article>`;
        }
        appendToDOM('elemPostsList', htmlString);
    });
}

// Init ---

(() => {
    getSinglePost();
    getMultiplePosts();
})();