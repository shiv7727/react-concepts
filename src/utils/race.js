const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums',
];

export const race = async () => {
	try {
		const result = Promise.race(
			urls.map(async (url) => {
				const response = await fetch(url);
				return response.json();
			}),
		);

		const data = await result;
		console.log(data);
	} catch (err) {
		console.log(err);
	}
};
