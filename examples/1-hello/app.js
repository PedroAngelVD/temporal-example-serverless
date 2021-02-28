const result = document.querySelector('.result')

const fetchData = async () => {
	try {
		// const { data } = await axios.get('/.netlify/functions/hello')
		const { data } = await axios.get('/api/hello')
		result.textContent = data
	} catch (err) {
		console.error(err)
		result.textContent = err.response.data
	}
}

fetchData()
