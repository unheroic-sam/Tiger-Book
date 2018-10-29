const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.listen(3000, () => {
	console.log('app is running on port 300');
})