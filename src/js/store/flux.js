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
			] 
		},
		 

		actions: {
			
			deleteFavorite: (nameToDelete) => {
				const store = getStore();
				const favorites = store.favoritesList.filter(x => x.name !== nameToDelete);
				setStore({favoritesList: favorites});
			},

			addFavorite: (nameToAdd) => {
				const store = getStore();
				const favorites = store.favoritesList;
				favorites.push({name: nameToAdd});
				setStore({favoritesList: favorites});
			},

		
			
			
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
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
