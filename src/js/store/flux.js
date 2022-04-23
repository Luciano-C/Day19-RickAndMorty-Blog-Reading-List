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
			],

			characters: [],

			maxCharactersPages: undefined,

			planets: [],

			maxPlanetsPages: undefined,

			
			audio: new Audio("https://sndup.net/2www/d"),

			currentPage: 1,

			currentPlanetPage: 1

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
				store.audio.play();
			},



			loadCharacters: (page) => {
				fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
					.then(response => response.json())
					.then(result => {
						setStore({ characters: result.results });
						setStore({ maxCharactersPages: result.info.pages});
					})
					.then(console.log(getStore()))
					.catch(error => console.log('error', error));
				
			},

			loadPlanets: (page) => {
				fetch(`https://rickandmortyapi.com/api/location?page=${page}`)
				.then(response => response.json())
				.then(result => {
					setStore({ planets: result.results });
					setStore({maxPlanetsPages: result.info.pages});
				})
				.then(console.log(getStore()))
				.catch(error => console.log('error', error));
			},

			setCurrentPage: (newPage) => {
				setStore({currentPage: newPage})

			},

			setCurrentPlanetPage: (newPage) => {
				setStore({currentPlanetPage: newPage})

			},

		}
	};
};

export default getState;
