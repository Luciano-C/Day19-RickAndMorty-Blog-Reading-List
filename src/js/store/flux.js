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

			characters: [
				/* { name: "Rick Sanchez", gender: "Male", status: "Alive", species: "Human", image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg" },
				{ name: "Morty Smith", gender: "Male", status: "Alive", species: "Human", image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg" },
				{ name: "Summer Smith", gender: "Female", status: "Alive", species: "Human", image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg" },
				{ name: "Summer Smith", gender: "Female", status: "Alive", species: "Human", image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg" }, */

			],


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


			loadCharacters: () => {
				/* 				const store = getStore();
								const characters = store.characters;
								let nextPage = 1;
				
								while (nextPage !== null) {
									fetch(`https://rickandmortyapi.com/api/character/?page=${nextPage}`)
										.then(response => response.json())
										.then(result => characters.push(result.results))
										.catch(error => console.log('error', error));
				
									nextPage++;
								}
				
								console.log(getStore());
								setStore({ characters: characters }) */
								
								const store = getStore();
								let characters = store.characters;
								
								for (let i = 1; i <= 5; i++) {
									fetch(`https://rickandmortyapi.com/api/character/?page=${i}`)
										.then(response => response.json())
										.then(result => characters.push(...result.results))
										/* .then(result => setStore({ characters: result.results })) */
										.then(() => setStore({ characters: characters }))
										.catch(error => console.log('error', error));
								}

								console.log(getStore());
								console.log(characters)
								/* setStore({ characters: characters }) */


				/* fetch("https://rickandmortyapi.com/api/character/")
					.then(response => response.json())
					.then(result => setStore({ characters: result.results }))
					.then(console.log(getStore()))
					.catch(error => console.log('error', error)); */
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
