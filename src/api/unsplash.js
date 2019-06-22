import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization:
			'Client-ID 7d4ceface1a77f245bb69219f423d1f474bc20e79b6070554ee1ba7f4ca0afd9'
	}
});
