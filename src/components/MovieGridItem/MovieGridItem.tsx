import { MovieData } from "../../models/movie-data";
import styles from './MovieGridItem.module.css'

type Props = {
    movie: MovieData
}

function MovieGridItem({movie}: Props) {
    return (
        <div className={`${styles.card} ${styles.main}`}>
            <h3>{movie.title}</h3>
            <h5>{movie.director}, {movie.release_date}</h5>
            <div className={styles.openingCrawl}>{movie.opening_crawl}</div>
        </div>
    )
}

export default MovieGridItem;