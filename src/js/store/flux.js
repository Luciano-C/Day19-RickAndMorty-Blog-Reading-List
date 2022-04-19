const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			favoritesList: [
				/* {name: "Luke Skywalker"} */
			],

			characters: [
				{ name: "Yoda", gender: "Male", hair: "Grey", eyes: "Green", src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/yoda-1568794702.jpeg?crop=0.502xw:1.00xh;0.321xw,0&resize=640:*" },
				{ name: "Luke Skywalker", gender: "Male", hair: "Blonde", eyes: "Blue", src: "https://img.europapress.es/fotoweb/fotonoticia_20220207201450_1200.jpg" },
				{ name: "Ahsoka Tano", gender: "Female", hair: "White-Purple", eyes: "Blue", src: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/950/public/media/image/2020/11/ahsoka-tano-star-wars-clone-wars-2146989.jpg?itok=-mcrg-Kz" }
			],

			charactersURL: []
		},


		actions: {

			deleteFavorite: (nameToDelete) => {
				const store = getStore();
				const favorites = store.favoritesList.filter(x => x.name !== nameToDelete);
				setStore({ favoritesList: favorites });
			},

			addFavorite: (nameToAdd) => {
				const store = getStore();
				const favorites = store.favoritesList;
				favorites.push({ name: nameToAdd });
				setStore({ favoritesList: favorites });
			},


			loadCharactersURL: () => {
				fetch("https://www.swapi.tech/api/people?page=1&limit=100")
					.then(response => response.json())
					.then(result => setStore({ charactersURL: result.results.map(x => x.url) }))
					.then(console.log(getStore()))
					.catch(error => console.log('error', error));
			},




			loadSomeData: () => {


				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
