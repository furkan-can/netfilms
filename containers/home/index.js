import { Categories } from '@/components/categories'
import { FeaturedMovie } from '@/components/featured-movie'
import Movies from '@/mocks/movies.json'
import Genres from '@/mocks/genres.json'
import { MoviesSection } from '@/components/movies-section'


function HomeContainer() {
    return (
        <div>
            <FeaturedMovie movie={Movies.results[0]} />
            <Categories categories={Genres.genres.slice(0, 5)} />
            <MoviesSection
                title={"Popular Films"}
                movies={Movies.results.slice(0,10)}
            />
            <MoviesSection
                title={"Your Favorites"}
                movies={Movies.results.slice(10,20)}
            />
        </div>
    )
} 

export default HomeContainer
