// Layouts
import HeaderLayout from '../layouts/HeaderLayout';

// Pages
import Home from '../pages/Home';
import Live from '../pages/Live';

// Public routes
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/live',
        component: Live,
        layout: null,
    },
];

const privateRoutes = [
    // {
    //     path: '/create-post',
    //     component: CreatePost,
    //     layout: OnlyHeaderLayout,
    // },
];

export { publicRoutes, privateRoutes };
