import express from "express";
const app = express();

type responseData = {
  main: {
    temp: number;
  };
  [key: string]: unknown;
};

app.post('/*', (req, res) => {
  const api_key: string = '5763bc7826eb3d89c3d0a459aa90c587';
  const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${req.path.slice(1)}&appid=${api_key}`;
  fetch(url)
    .then((response: Response): Promise<responseData> => response.json())
    .then((data: responseData) => res.send(`${Math.trunc(data.main.temp - 273)}`))
    .catch(() => res.send('wrong request'));
});

const port: number = 4000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});