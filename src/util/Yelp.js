const clientID = 'Bk9hVETG_R8JS7mJ7R5NFw';
const secret = 'ZmaSoIn805O38AswxQ5z4UgfkG8u61U0ZDCEBZ12xNKokp5sN4uZLVF7oCO355p2';

let accessToken ;

 let Yelp = {

	getAccessToken(){
		if (accessToken) {
			return new Promise(resolve => resolve(accessToken));
		}	
		return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientID}&client_secret=${secret}`,{method: 'POST'}).then(response => { 
			return response.json();}).then(jsonResponse => {

				accessToken = jsonResponse.access_token;
		});		
	},

	search(term,location,sortBy){

		return Yelp.getAccessToken().then(() => { 

			return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{headers:{Authorization:`Bearer ${accessToken}`}});
		}).then({method:'POST'}).then(jsonResponse => {
			if (jsonResponse.businesses) {
				return jsonResponse.businesses.map(business => {

					 return {
						id: businesses.id,
						imageSrc: businesses.imageSrc,
						name:businesses.name,
						address:businesses.address,
						city:businesses.city,
						state:businesses.state,
						zipCode:businesses.zipCode,
						category:businesses.category,
						rating:businesses.rating,
						reviewCount:businesses.reviewCount
					}
				});
			}
		})
	}

};// Yelp object ends

export default Yelp;
