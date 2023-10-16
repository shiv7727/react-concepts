import { useEffect, useRef, useState } from 'react';
import StarRating from './StartRating';

const tempMovieData = [
	{
		imdbID: 'tt1375666',
		Title: 'Inception',
		Year: '2010',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
	},
	{
		imdbID: 'tt0133093',
		Title: 'The Matrix',
		Year: '1999',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
	},
	{
		imdbID: 'tt6751668',
		Title: 'Parasite',
		Year: '2019',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
	},
];

const tempWatchedData = [
	{
		imdbID: 'tt1375666',
		Title: 'Inception',
		Year: '2010',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
		runtime: 148,
		imdbRating: 8.8,
		userRating: 10,
	},
	{
		imdbID: 'tt0088763',
		Title: 'Back to the Future',
		Year: '1985',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
		runtime: 116,
		imdbRating: 8.5,
		userRating: 9,
	},
];

const average = (arr) =>
	arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function NavBar({ children }) {
	return (
		<nav className='nav-bar'>
			<Logo />
			{children}
		</nav>
	);
}

function Logo() {
	return (
		<div className='logo'>
			<span role='img'>🍿</span>
			<h1>usePopcorn</h1>
		</div>
	);
}

function NumResults({ movies }) {
	return (
		<p className='num-results'>
			Found <strong> {movies?.length}</strong> results
		</p>
	);
}

function Search({ query, setQuery }) {
	const inputEl = useRef(null);

	useEffect(() => {
		function callback(e) {
			if (document.activeElement === inputEl.current) {
				return;
			}
			if (e.code === 'Enter') {
				inputEl.current.focus();
				setQuery('');
			}
		}
		document.addEventListener('keydown', callback);

		return () => {
			document.removeEventListener('keydown', callback);
		};
	}, []);
	return (
		<input
			className='search'
			type='text'
			placeholder='Search movies...'
			value={query}
			onChange={(e) => setQuery(e.target.value)}
			ref={inputEl}
		/>
	);
}

function Main({ children }) {
	return <main className='main'>{children}</main>;
}

function Box({ children }) {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className='box'>
			<button className='btn-toggle' onClick={() => setIsOpen((open) => !open)}>
				{isOpen ? '–' : '+'}
			</button>
			{isOpen && children}
		</div>
	);
}

// function WatchedBox() {
// 	const [watched, setWatched] = useState(tempWatchedData);
// 	const [isOpen2, setIsOpen2] = useState(true);

// 	return (
// 		<div className='box'>
// 			<button
// 				className='btn-toggle'
// 				onClick={() => setIsOpen2((open) => !open)}
// 			>
// 				{isOpen2 ? '–' : '+'}
// 			</button>
// 			{isOpen2 && (
// 				<>
// 					<WatchedSummary watched={watched} />
// 					<WatchMovieList watched={watched} />
// 				</>
// 			)}
// 		</div>
// 	);
// }

function Movie({ movie, onSelectMovie }) {
	return (
		<li onClick={() => onSelectMovie(movie.imdbID)}>
			<img src={movie.Poster} alt={`${movie.Title} poster`} />
			<h3>{movie.Title}</h3>
			<div>
				<p>
					<span>🗓</span>
					<span>{movie.Year}</span>
				</p>
			</div>
		</li>
	);
}

function MovieList({ movies, onSelectMovie }) {
	return (
		<ul className='list list-movies'>
			{movies?.map((movie) => (
				<Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
			))}
		</ul>
	);
}

function WatchedSummary({ watched }) {
	const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
	const avgUserRating = average(watched.map((movie) => movie.userRating));
	const avgRuntime = average(watched.map((movie) => movie.runtime));

	return (
		<div className='summary'>
			<h2>Movies you watched</h2>
			<div>
				<p>
					<span>#️⃣</span>
					<span>{watched.length} movies</span>
				</p>
				<p>
					<span>⭐️</span>
					<span>{avgImdbRating.toFixed(2)}</span>
				</p>
				<p>
					<span>🌟</span>
					<span>{avgUserRating.toFixed(2)}</span>
				</p>
				<p>
					<span>⏳</span>
					<span>{avgRuntime.toFixed(2)} min</span>
				</p>
			</div>
		</div>
	);
}

function WatchedMovie({ movie, onDeleteWatched }) {
	return (
		<li>
			<img src={movie.poster} alt={`${movie.title} poster`} />
			<h3>{movie.title}</h3>
			<div>
				<p>
					<span>⭐️</span>
					<span>{movie.imdbRating}</span>
				</p>
				<p>
					<span>🌟</span>
					<span>{movie.userRating}</span>
				</p>
				<p>
					<span>⏳</span>
					<span>{movie.runtime} min</span>
				</p>
				<button
					className='btn-delete'
					onClick={() => onDeleteWatched(movie.imdbID)}
				>
					X
				</button>
			</div>
		</li>
	);
}

function WatchMovieList({ watched, onDeleteWatched }) {
	return (
		<ul className='list'>
			{watched.map((movie) => (
				<WatchedMovie
					movie={movie}
					key={movie.imdbID}
					onDeleteWatched={onDeleteWatched}
				/>
			))}
		</ul>
	);
}

function Loader() {
	return <p className='loader'>Loading...</p>;
}

function ErrorMessage({ message }) {
	return (
		<p className='error'>
			<span>⛔</span>
			{message}
		</p>
	);
}

function MovieDetails({ selectedId, onCloseMovie, onAddWatched, watched }) {
	const [movie, setMovie] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [userRating, setUserRating] = useState('');
	const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
	const watchedUserRating = watched.find(
		(movie) => movie.imdbID === selectedId,
	)?.userRating;
	const {
		Title: title,
		Year: year,
		Poster: poster,
		Runtime: runtime,
		imdbRating,
		Plot: plot,
		Released: released,
		Actors: actors,
		Director: director,
		Genre: genre,
	} = movie;

	const handleAdd = () => {
		const newWatchedMovie = {
			imdbID: selectedId,
			title,
			year,
			poster,
			imdbRating: Number(imdbRating),
			runtime: Number(runtime.split(' ').at(0)),
			userRating,
		};

		onAddWatched(newWatchedMovie);
		onCloseMovie();
	};

	useEffect(() => {
		function callback(e) {
			if (e.code === 'Escape') {
				onCloseMovie();
				console.log('CLOSING');
			}
		}
		document.addEventListener('keydown', callback);
		return () => {
			document.removeEventListener('keydown', callback);
		};
	}, [onCloseMovie]);

	useEffect(() => {
		async function getMovieDetails() {
			try {
				setIsLoading(true);
				const res = await fetch(
					`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${selectedId}`,
				);

				const data = await res.json();
				setMovie(data);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		}
		getMovieDetails();
	}, [selectedId]);

	useEffect(() => {
		if (title) {
			document.title = `Movie | ${title}`;
			return () => {
				console.log('cleanup effect for movie  , ', title);
				document.title = 'usePopcorn';
			};
		}
	}, [title]);

	return (
		<div className='details'>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<header>
						<button className='btn-back' onClick={onCloseMovie}>
							&larr;
						</button>
						<img src={poster} alt={` poster of the ${movie}`} />
						<div className='details-overview'>
							<h2>{title}</h2>
							<p>
								{released} &bull; {runtime}
							</p>
							<p>{genre}</p>
							<p>
								<span>⭐</span>
								{imdbRating} IMDB rating
							</p>
						</div>
					</header>
					<section>
						<div className='rating'>
							{!isWatched ? (
								<>
									<StarRating
										size={24}
										maxRating={10}
										onSetRating={setUserRating}
									/>
									{userRating > 0 && (
										<button className='btn-add' onClick={handleAdd}>
											Add to List
										</button>
									)}
								</>
							) : (
								<span>
									You rated this movie {watchedUserRating} <span>⭐</span>
								</span>
							)}
						</div>
						<div>
							<em>{plot}</em>
							<p>Starring {actors}</p>
							<p>Directed by {director}</p>
						</div>
					</section>
				</>
			)}
		</div>
	);
}

export default function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [query, setQuery] = useState('');
	const [selectedId, setSelectedId] = useState(null);
	const [watched, setWatched] = useState(() => {
		const storedValue = localStorage.getItem('watched');
		return JSON.parse(storedValue);
	});

	const handleSelectMovie = (id) => {
		setSelectedId((selectedId) => (selectedId === id ? null : id));
	};
	const handleCloseMovie = () => {
		setSelectedId(null);
	};

	const handleAddWatched = (movie) => {
		setWatched((watched) => [...watched, movie]);
	};

	const handleDeleteWatched = (id) => {
		setWatched(watched.filter((movie) => movie.imdbID !== id));
	};

	useEffect(() => {
		localStorage.setItem('watched', JSON.stringify(watched));
	}, [watched]);

	useEffect(() => {
		const controller = new AbortController();
		async function fetchMovies() {
			try {
				setIsLoading(true);
				setError('');
				const res = await fetch(
					`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${query}`,
					{
						signal: controller.signal,
					},
				);
				if (!res.ok) {
					throw new Error('Something went wrong with fetching movies !');
				}
				const data = await res.json();

				if (data.Response === 'False') throw new Error('Movie not found');
				setMovies(data.Search);
				setError('');
				setIsLoading(false);
			} catch (error) {
				console.log(error.message);
				if (error.name !== 'AbortError') {
					setError(error.message);
				}
			} finally {
				setIsLoading(false);
			}
		}
		if (query.length < 3) {
			setMovies([]);
			setError('');
			return;
		}
		handleCloseMovie();
		fetchMovies();

		return () => {
			controller.abort();
		};
	}, [query]);

	return (
		<>
			<NavBar>
				<Search query={query} setQuery={setQuery} />
				<NumResults movies={movies} />
			</NavBar>
			<Main>
				<Box>
					{isLoading && <Loader />}
					{error && <ErrorMessage message={error} />}
					{!isLoading && !error && (
						<MovieList movies={movies} onSelectMovie={handleSelectMovie} />
					)}
					{/* {isLoading ? <Loader /> : <MovieList movies={movies} />} */}
				</Box>
				<Box>
					{selectedId ? (
						<MovieDetails
							selectedId={selectedId}
							onCloseMovie={handleCloseMovie}
							onAddWatched={handleAddWatched}
							watched={watched}
						/>
					) : (
						<>
							<WatchedSummary watched={watched} />
							<WatchMovieList
								watched={watched}
								onDeleteWatched={handleDeleteWatched}
							/>
						</>
					)}
				</Box>
			</Main>
		</>
	);
}
