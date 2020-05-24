
// appel à l'API 

getTeddy = () => {
	return new Promise((resolve, reject) => {
		let request = new XMLHttpRequest();
		request.onreadystatechange = function() {
    		if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        		let response = JSON.parse(this.responseText);
        		console.log(response);
        		resolve(response);
    		}

		};
		request.open("GET", "http://localhost:3000/api/teddies/", true);
		request.send();
	});
};

// afficher la liste des produits provenant de l'api et les afficher en HTML

async function listTeddy () {
	let product = await getTeddy();
	console.log(product);
	let container = document.getElementById("container");
        let content = "";
        for(let i = 0; i < product.length; i++)
        {
        	let teddy = product[i];
        	content += '<div id="ours">\
							<a href="">\
								<img class="imgours" src =' + teddy.imageUrl + '>\
								<div class="texte-ours">\
									<p>' + teddy.name + '</p>\
									<p>' + teddy.price +'</p>\
									<p>' + teddy.description +'</p>\
								</div>\
							</a>\
						</div>';
        }
        container.innerHTML = content;
}

listTeddy();

// afficher détail de chaque produit lorsque l'utilisateur clique dessus







