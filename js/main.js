const apiKey = process.env.GIPHY_API_KEY;
const randomGifURL = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
const randomFactURL = 'https://uselessfacts.jsph.pl/api/v2/facts/random';

fetch(randomFactURL)
  .then((res) => res.json())
  .then((data) => {
    document.getElementById('quote').innerText = data.text;

    // Create an anchor element
    const sourceLink = document.createElement('a');
    sourceLink.href = data.source_url; // Set the URL of the hyperlink
    sourceLink.innerText = `Source: ${data.source}`; // Set the display text of the hyperlink

    // Clear the previous content of 'source' element and append the anchor element
    const sourceElement = document.getElementById('source');
    sourceElement.innerHTML = ''; // Clear previous content
    sourceElement.appendChild(sourceLink); // Append the anchor element
  });

fetch(randomGifURL)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
