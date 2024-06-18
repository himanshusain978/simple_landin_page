const express = require("express");
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const PORT = 4000;

const dotenv = require("dotenv");
dotenv.config();
app.use(bodyParser.json());
app.use(cors());

database.connect();
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)


const contactRoutes = require('./routes/contactRoute')
app.use('/api', contactRoutes);

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....',
	});
});

app.listen(PORT, () => {
	console.log(`App is started at Port no ${PORT}`)
	console.log(`App is running at ${PORT}`)
})