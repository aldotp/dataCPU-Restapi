import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/route.js'


const app = express()

const user = "user"
const password = "user"

// connect to database
const mongoDB = mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.pdsalhq.mongodb.net/dataCPU?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function() {
    console.log("Connected to Database")
})


app.use(cors())
app.use(express.json())
app.use("/api", routes)

let PORT = 3000

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
})