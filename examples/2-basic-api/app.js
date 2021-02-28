const result = document.querySelector('.result')

const fetchData = async () => {
	try {
		result.textContent = ''
		const { data } = await axios.get('/api/basic-api')
		data.forEach((item) => {
			result.innerHTML += `
	    <article class="product">
	      <img
	        src="${item.image.url}"
          alt="${item.name}"
	      />
	      <div class="info">
	        <h5>${item.name}</h5>
	        <h5 class="price">${item.price}</h5>
	      </div>
	    </article>
	  `
		})
	} catch (error) {
		console.error(err)
		result.textContent = err.response.data
	}
}

fetchData()
