function generateQuote() {
  fetch("https://api.quotable.io/random")
    .then((response) => {
      if (!response.ok) {
        console.error("Network response not Okay");
      }
      return response.json();
    })
    .then((randomQuote) => {
      document.getElementById("quote").innerHTML = randomQuote.content;
      document.getElementById("author").innerHTML = randomQuote.author;
    })
    .catch((error) => {
      console.error("Error fetching the quote");
    });
}

function hoverEffect() {
  document.getElementById("copy").classList.add("border");
  document.getElementById("copy").classList.add("border-3");
  document.getElementById("copy").classList.add("border-primary-subtle");
  document.getElementById("copyMsg").title = "Copy To Clipboard!";
}

function noHover() {
  document.getElementById("copy").classList.remove("border");
  document.getElementById("copy").classList.remove("border-3");
  document.getElementById("copy").classList.remove("border-primary-subtle");
}

function copyQuote() {
  let textToCopy = document.getElementById("quote").textContent;
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      document.getElementById("copyMsg").title = "Copied";
      document.getElementById("copy").src =
        "https://img.icons8.com/ios-glyphs/30/checkmark--v1.png";
      setTimeout(() => {
        document.getElementById("copy").src =
          "https://img.icons8.com/material-sharp/24/copy.png";
        document.getElementById("copyMsg").title = "Copy To Clipboard";
      }, 3000);
    })
    .catch((error) => {
      console.error("Copy failed:", error);
    });
}
