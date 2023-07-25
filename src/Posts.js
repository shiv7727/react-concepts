import React from 'react';

function Posts(props) {
	return (
		<div>
			<ul>
				{props &&
					props?.posts?.map((post) => <li key={post?.id}>{post?.title}</li>)}
			</ul>
		</div>
	);
}

export default Posts;
