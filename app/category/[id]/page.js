import HomeContainer from '@/containers/home';
import React from 'react'
import Genres from "@/mocks/genres.json"
import Movies from "@/mocks/movies.json"
import { MoviesSection } from '@/components/movies-section';

async function CategoryPage({ params }) {
    const categoryId = (await params).id;
    const category = Genres.genres.find((genres) => genres.id.toString() === categoryId);
    return (
        <HomeContainer selectedCategory={
            <MoviesSection
                title={category.name}
                movies={Movies.results.slice(0, 10)}
            />
        } />
    )
}

export default CategoryPage
