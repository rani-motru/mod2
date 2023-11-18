// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
function MovieDisplay({ movie }) {
    // we are using { movie } instead of props so that we can access it
    // by just using movie, instead of props.movie

    const loaded = () => {
        return (
            <>
                <h1>{movie.Title}</h1>
                <h2>{movie.Genre}</h2>
                <img src={movie.Poster} alt={movie.Title} />
                <h2>{movie.Year}</h2>
                <h3>Ratings</h3>
                {movie.Ratings.map (rating => {
                    return (<><h4>{rating.Source}</h4>
                    <h4>{rating.Value}</h4></>)
                })  }
            </>
        )
    }

    const loading = () => {
        return <h1>No Movie to Display</h1>
    }
    //The component must return some JSX
    return movie ? loaded() : loading();
}
// We must export the component to use it in other files
export default MovieDisplay;