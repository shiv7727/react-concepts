import { useState } from 'react';

const initialItems = [
	{ id: 1, description: 'Passports', quantity: 2, packed: false },
	{ id: 2, description: 'Socks', quantity: 12, packed: false },
	{ id: 3, description: 'Charger', quantity: 1, packed: true },
];

export default function App() {
	const [items, setItems] = useState(initialItems);

	const handleItems = (item) => {
		setItems((items) => [...items, item]);
	};
	const handleDeleteItems = (id) => {
		setItems(items.filter((item) => item.id !== id));
	};

	const handleToggleItem = (id) => {
		setItems(
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item,
			),
		);
	};

	const handleClearList = () => {
		const confirmed = window.confirm(
			'Are you sure you want to clear delete all items ?',
		);
		if (confirmed) setItems([]);
	};
	return (
		<div className='app'>
			<Logo />
			<Form handleItems={handleItems} />
			<PackagingList
				items={items}
				onDeleteItems={handleDeleteItems}
				onToggleItem={handleToggleItem}
				handleClearList={handleClearList}
			/>
			<Stats items={items} />
		</div>
	);
}

function Logo() {
	return <h1> 🌴 Far Away 💼</h1>;
}

function Form({ handleItems }) {
	const [description, setDescription] = useState('');
	const [quantity, setQuantity] = useState(1);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!description) return;
		const newItem = {
			description,
			quantity,
			packed: false,
			id: Date.now(),
		};
		handleItems(newItem);

		setDescription('');
		setQuantity(1);
	};
	return (
		<form className='add-form' onSubmit={handleSubmit}>
			<h3>What do you need for 😍 trip ? </h3>
			<select
				name='quantity'
				id='quantity'
				value={quantity}
				onChange={(e) => setQuantity(Number(e.target.value))}
			>
				{Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
					<option value={num} key={num}>
						{num}
					</option>
				))}
			</select>
			<input
				type='text'
				name='description'
				id='description'
				placeholder='Item...'
				autoComplete='off'
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button>Add</button>
		</form>
	);
}

function PackagingList({
	items,
	onDeleteItems,
	onToggleItem,
	handleClearList,
}) {
	const [sortBy, setSortBy] = useState('input');
	let sortedByItems;

	if (sortBy === 'input') sortedByItems = items;
	if (sortBy === 'description')
		sortedByItems = items
			.slice()
			.sort((a, b) => a.description.localeCompare(b.description));

	if (sortBy === 'packed')
		sortedByItems = items
			.slice()
			.sort((a, b) => Number(a.packed) - Number(b.packed));

	return (
		<div className='list'>
			<ul>
				{sortedByItems?.map((item) => {
					return (
						<Item
							item={item}
							key={item.id}
							onDeleteItems={onDeleteItems}
							onToggleItem={onToggleItem}
						/>
					);
				})}
			</ul>
			<div className='actions'>
				<select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
					<option value='input'>Sort by input order</option>
					<option value='description'>Sort by description</option>
					<option value='packed'>Sort by packed status</option>
				</select>
				<button onClick={handleClearList}>Clear list</button>
			</div>
		</div>
	);
}

function Item(props) {
	const { item, onDeleteItems, onToggleItem } = props;
	return (
		<li>
			<input
				type='checkbox'
				value={item.packed}
				checked={item.packed}
				onChange={() => onToggleItem(item.id)}
			/>
			<span style={item.packed ? { textDecoration: 'line-through' } : {}}>
				{item.quantity} {item.description}
			</span>
			<button onClick={() => onDeleteItems(item.id)}>❌</button>
		</li>
	);
}

function Stats(props) {
	const { items } = props;

	if (!items.length) {
		return (
			<p className='stats'>
				<em>Start adding some items to your packing list 🚀</em>
			</p>
		);
	}

	const numItems = items.length;
	const numPacked = items.filter((item) => item.packed).length;
	const percentage = Math.round((numPacked / numItems) * 100);

	return (
		<footer className='stats'>
			<em>
				{percentage === 100
					? 'You got everything ! Ready to go ✈️'
					: `💼 You have ${numItems} items on your list and you already packed{' '}
					${numPacked}(${percentage}%)`}
			</em>
		</footer>
	);
}
