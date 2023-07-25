import React from 'react';

function Pagination({ postsPerPage, totalPosts, paginate }) {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<div>
			{pageNumbers?.map((number) => (
				<a
					key={number}
					onClick={() => paginate(number)}
					style={{
						padding: '10px',
						textDecoration: 'none',
						border: '1px solid #cdc6c6',
					}}
					href='!#'
				>
					{number}
				</a>
			))}
		</div>
	);
}

export default Pagination;
