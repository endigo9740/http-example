// Handle HTTP

function getSinglePost() {
    const elemPostSingle = document.getElementById('postSingle');
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((res) => {
            // Apply to the DOM
            elemPostSingle.innerHTML = `
                <article title="${res.id}">
                    <h3>${res.title}</h3>
                    <p>${res.body}</p>
                </article>
            `;
        });
}

function getMultiplePosts() {
    const elemPostsList = document.getElementById('elemPostsList');
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((res) => {
            // Set default HTML markup (empty)
            let postListMarkup = '';
            // Append new markup for each post instance
            for (let i = 0; i < res.length; i++) {
                postListMarkup += `
                    <article>
                        <h3>${res[i].title}</h3>
                        <p>${res[i].body}</p>
                    </article>
                `;
            }
            // Apply to the DOM
            elemPostsList.innerHTML = postListMarkup;
        });
}

// Boostrap
function init() {
    getSinglePost();
    getMultiplePosts();
}
init();