import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Posts from './Posts';
import Pagination from './Pagination';

let url = process.env.REACT_APP_API_URL;

function App() {

	const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postPerPage] = useState(10);

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await axios.get(url);
			setPosts(res.data);
		};
		fetchPosts();
	}, []);

	// Get Current posts
	// indexOflastPost = 1*10=>10;
	// indexOflastPost = 1*5=>5;
	const indexOfLastPost = currentPage * postPerPage;
	// indexOfFirstPost = 10-10=>0
	// indexOfFirstPost = 5-5=>0
	const indexOfFirstPost = indexOfLastPost - postPerPage;
	//  currentPosts = 0,10
	//  currentPosts = 0,5
	const currenPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	const paginate = (number) => {
		setCurrentPage(number);
	};

	return (
		<div className='App'>
			<h1>Pagination</h1>
			<Posts posts={currenPosts} />
			<Pagination
				postsPerPage={postPerPage}
				totalPosts={posts?.length}
				paginate={paginate}
			/>
		</div>
	);
}

export default App;
