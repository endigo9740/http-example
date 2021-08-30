// HANDLE HTTP

// Generic HTTP method ---

function httpGet(endpoint) {
    return fetch(endpoint, { method: 'GET' }).then((response) => response.json());
}

// function httpPost() {} // stubbed

// function httpPut() {} // stubbed

function httpDelete(endpoint) {
    return fetch(endpoint, { method: 'DELETE' }).then((response) => response.json());
}

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
            htmlString += `
                <article>
                    <h3>
                        ${res[i].title}
                        <button onclick="deletePost(${res[i].id})">X</button>
                    </h3>
                    <p>${res[i].body}</p>
                </article>
            `;
        }
        appendToDOM('elemPostsList', htmlString);
    });
}

function deletePost(postId) {
    httpDelete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(() => {
            getMultiplePosts(); // refresh list
            alert(`Post ID: ${postId} was deleted.`);
        });
}

// Init ---

(() => {
    getSinglePost();
    getMultiplePosts();
})();