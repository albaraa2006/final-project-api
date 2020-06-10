const Clarifai = require('Clarifai');

const app = new Clarifai.App({
	apiKey: '34e72301384b4a79804d4fc2b2c12ca9'
});

const handleApiCall = (req, res) => {
app.models 
.predict(
Clarifai.FACE_DETECT_MODEL,
req.body.input)
.then(dta => {
	res.json(data);
})
	.catch(err => res.status(400).json('unable to work with api'));
}


const handleImage = (req, res, db) => {
	const { id } = req.body;
  db('users').where('id', '=', id)
  .increment('entries', 1)
    .returning('entries')
     .then(entries => {
    console.log(entries);
  })
     .catch(err => res.status(400).json('unable to get entries'))
  }


module.exports = {
  handleImage: handleImage,
  handleApiCall: handleApiCall
};