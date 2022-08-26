const [express, routes] = [require("express"), require("./api/routes")];

const port = process.env.PORT || 3001;

const app = express();

routes(app)

app.listen(port, () =>
  console.log(`servidor rodando em http://localhost:${port}`)
);
