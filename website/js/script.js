const url =
  "https://student-api-proxy.onrender.com/api/chelsea-fc-news-live.p.rapidapi.com/news/NewsNow";
const options = {
  method: "GET",
  headers: {
    "X-API-Key":
      "224ca2c45c9e342dcbb2d349841638bcb456251c953d0f26a97873c60e15472b",
  },
};
fetch(url, options)
  .then((response) =>
    response.json().then((result) => {
      console.log(result.data); // Your API data
      console.log(`Cost: $${result.meta.cost}`);
      console.log(`Remaining: $${result.meta.remaining_budget}`);
    })
  )
  .catch((error) => {
    console.log(error);
  });
