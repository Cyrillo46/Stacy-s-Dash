fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    console.log(data.urls.full);
    document.body.style.backgroundImage = `url('${data.urls.full}')`;
    document.getElementById(
      "photo-credit"
    ).textContent = `Taken by ${data.user.name}`;
  });

fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById(
      "crypto"
    ).innerHTML = `Bitcoin: ${data.market_data.current_price.usd}`;
  });
