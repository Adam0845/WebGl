const express = require('express');
const app = express();
const fs = require('fs');
const PORT = 3000;
const path = require('path');
app.use(express.static('static'));
app.use(express.static('static/cwiczenia'));
let i = 0;
let y = 0;
let x = -1;
app.get('/', (req, res) => {
	i = 0;
	y = 0;
	x = -1;
	fs.readdir(path.join(__dirname, '/static/cwiczenia/1'), function (err, files) {
		if (err) {
			return console.log(err);
		} else {
			console.log(files);
			files.map(() => {
				i++;
			});
			console.log(i);
		}
	});
	fs.readdir(path.join(__dirname, '/static/cwiczenia/2'), function (err, files) {
		if (err) {
			return console.log(err);
		} else {
			console.log(files);
			files.map(() => {
				y++;
			});
		}
	});
	fs.readdir(path.join(__dirname, '/static/cwiczenia/3'), function (err, files) {
		if (err) {
			return console.log(err);
		} else {
			console.log(files);
			files.map(() => {
				x++;
			});

		}
	});
	res.sendFile(path.join(__dirname, '/static/index.html'));
});
// app.get('/num', (req, res) => {
// 	console.log(i, y, x);
// 	res.json({ i, y, x });
// });

// app.get('/cw/:id', (req, res) => {
// 	const { id } = req.params;

// 	res.sendFile(path.join(__dirname, `/static/cwiczenia/1/${id}.html`));
// });
// app.get('/cw2/:id', (req, res) => {
// 	const { id } = req.params;

// 	res.sendFile(path.join(__dirname, `/static/cwiczenia/2/${id}.html`));
// });
// app.get('/cw2/mats/:img', (req, res) => {
// 	const { img } = req.params;

// 	res.sendFile(path.join(__dirname, `/static/mats/${img}`));
// });

app.listen(PORT, function () {
        console.log("start serwera na porcie " + PORT )
})