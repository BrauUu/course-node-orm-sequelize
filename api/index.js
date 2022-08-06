import 'dotenv/config'
import Express from "express";
import bodyParser from "body-parser";

const app = Express();

app.use(bodyParser.json())

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`running on http://localhost:${port}`)
})

app.get('/test', (req, res) => {
    res.status(200).send({msg: "Hi mom!"})
})

export default app;




