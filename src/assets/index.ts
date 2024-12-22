import aboutIcon from './about_icon.svg'
import aboutIconActive from './active_about_icon.svg'
import seriesIcon from './series_icon.svg'
import seriesIconActive from './active_series_icon.svg'
import tvIcon from './tv_icon.svg'
import tvIconActive from './active_tv_icon.svg'

import logo from './toffee_logo.svg'

const sidebar_menus = [
    {
        id: 'movies',
        icon: tvIcon,
        activeIcon: tvIconActive
    },
    {
        id: 'series',
        icon: seriesIcon,
        activeIcon: seriesIconActive
    },
    {
        id: 'about',
        icon: aboutIcon,
        activeIcon: aboutIconActive
    },
]

const movies = [
    {
        title      : 'Inception',
        description: 'A mind-bending thriller by Christopher Nolan.',
        releaseYear: 2010,
        thumbnail  : 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Inception',
    },
    {
        title      : 'The Dark Knight',
        description: 'Gotham\'s vigilante hero fights chaos.',
        releaseYear: 2008,
        thumbnail  : 'https://via.placeholder.com/150/0000FF/FFFFFF?text=The+Dark+Knight',
    },
    {
        title      : 'Interstellar',
        description: 'A journey through space and time.',
        releaseYear: 2014,
        thumbnail  : 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Interstellar',
    },
    // Add more movies
    ...Array.from({ length: 17 }, (_, i) => ({
        title      : `Movie ${i + 4}`,
        description: `Description for Movie ${i + 4}`,
        releaseYear: 2000 + i,
        thumbnail  : `https://via.placeholder.com/150/0000FF/FFFFFF?text=Movie+${i + 4}`,
    })),
]

const series = [
    {
        title      : 'Breaking Bad',
        description: 'A teacher turns drug lord.',
        releaseYear: 2008,
        thumbnail  : 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Breaking+Bad',
    },
    {
        title      : 'Stranger Things',
        description: 'Kids vs. supernatural forces.',
        releaseYear: 2016,
        thumbnail  : 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Stranger+Things',
    },
    {
        title      : 'The Crown',
        description: 'The life of Queen Elizabeth II.',
        releaseYear: 2016,
        thumbnail  : 'https://via.placeholder.com/150/FF0000/FFFFFF?text=The+Crown',
    },
    // Add more series
    ...Array.from({ length: 17 }, (_, i) => ({
        title      : `Series ${i + 4}`,
        description: `Description for Series ${i + 4}`,
        releaseYear: 2010 + i,
        thumbnail  : `https://via.placeholder.com/150/FF0000/FFFFFF?text=Series+${i + 4}`,
    })),
]

export { sidebar_menus, logo, movies, series }