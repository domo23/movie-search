import { render } from "@testing-library/react";
import MovieGridItem from "./MovieGridItem";
import '@testing-library/jest-dom/extend-expect';

const mockData = {
    title: 'Title',
    director: 'Director',
    release_date: '23-06-2021',
    opening_crawl: 'Beginning...'
}

it('movie grid item component snapshot', () => {
    const { getByTestId } = render(<MovieGridItem movie={mockData}></MovieGridItem>);
    const module = getByTestId('movie-grid-item');

    expect(module).toMatchSnapshot();
})

it('should contain msg text', () => {
    const { getByTestId } = render(<MovieGridItem movie={mockData}></MovieGridItem>);
    const module = getByTestId('movie-grid-item');

    expect(module).toHaveTextContent(mockData.title);
    expect(module).toHaveTextContent(mockData.director);
    expect(module).toHaveTextContent(mockData.release_date);
})