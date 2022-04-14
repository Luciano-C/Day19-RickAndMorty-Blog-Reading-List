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
			personas: [
				{nombre: "Bob Esponja", img: "https://www.pngitem.com/pimgs/m/85-859440_spongebob-png-photos-you-like-krabby-patties-don.png", edad: 25, hobby:"atrapar medusas"},
				{nombre: "Calamardo", img: "https://i.discogs.com/CxBwOzKSR5JJdrixe3qh-xJpz8fzrWstw2Bet48aZwE/rs:fit/g:sm/q:90/h:846/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTU4MTE3/MzEtMTQ5Njk0ODA1/Ni01MDIwLnBuZw.jpeg", edad: 32, hobby:"tocar el clarinete"}
			] 
		},
		 

		actions: {
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
