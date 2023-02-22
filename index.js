var fetch = require('node-fetch')
var express = require('express')
var cors = require('cors')
var request = require('request')
const app = express();

const PORT = process.env.PORT || 4000;



async function claudio(id){
		const dd = await fetch(`https://fembed9hd.com/api/source/${id}`, {method: "POST", referrer: `https://fembed9hd.com/v/${id}`})
		const cc = await fetch((await dd.json()).data[2].file, {method: "GET", referrer: `https://fembed9hd.com/v/${id}`})
		
		const jj = await cc.url
		if(jj){
			return jj
		}else{
			return
		}
	}

let target;

app.use(cors({
    origin: ['http://localhost/', 'https://sveltekit-animeapp.vercel.app/']
}))
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/api/:Id', async(req, res) => {
 target = claudio(req.params.Id)
  req.pipe(request.get(await target)).pipe(res);
});

app.listen(PORT);