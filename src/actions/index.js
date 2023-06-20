export const incrementNum = (num) => {
	console.log('num', num);
	return {
		type: 'INCREMENT',
		payload: num,
	};
};

export const decrementNum = (num) => {
	return {
		type: 'DECREMENT',
		payload: num,
	};
};
