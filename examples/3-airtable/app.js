const result = document.querySelector('.result')

const getProducts = async () => {
	try {
		const { data: products } = await axios.get('/api/airtable')
		result.textContent = ''
		products.forEach((item) => {
			result.innerHTML += `
	    <a href="product.html?id=${item.id}" class="product">
	      <img
	        src="${item.url}"
          alt="${item.name}"
	      />
	      <div class="info">
	        <h5>${item.name}</h5>
	        <h5 class="price">$ ${item.price}</h5>
	      </div>
	    </a>
	  `
		})
	} catch (error) {
		result.innerHTML = `<h4>${error.message}</h4>`
	}
}

getProducts()
