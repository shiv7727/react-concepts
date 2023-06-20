const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums',
];
export const getData = async () => {
	try {
		const [users, posts, albums] = await Promise.all(
			urls.map(async (url) => {
				const response = await fetch(url);
				return response.json();
			}),
		);
		console.log('users', users);
		console.log('posts', posts);
		console.log('albums', albums);
	} catch (err) {
		console.log(err);
	}
};

// Note: Promise.all gives the result only after all apis response he get 
