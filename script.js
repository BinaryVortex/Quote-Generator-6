const apiurl = "https://api.quotable.io/random";
const cont = document.querySelector(".content");
const auth = document.querySelector(".author");
const genButton = document.querySelector(".gen");

async function getQuote(url) {
    try {
        cont.innerHTML = "Fetching a new quote...";
        auth.innerHTML = "";
        genButton.disabled = true;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        cont.innerHTML = "\"" + data.content + "\"";
        auth.innerHTML = "-" + data.author;
    } catch (error) {
        cont.innerHTML = "Oops! Something went wrong.";
        auth.innerHTML = "Please try again later.";
        console.error(error);
    } finally {
        genButton.disabled = false;
    }
}

// Fetch the initial quote on page load
getQuote(apiurl);

// Attach event listener to the Generate Quote button
genButton.addEventListener("click", () => {
    getQuote(apiurl);
});
