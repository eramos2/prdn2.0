import Home from "./pages/Home.vue"
import CategoriesPage from "./pages/CategoriesPage.vue";
import SubCategoriesPage from "./pages/SubCategoriesPage.vue";
import SingleItemPage from "./pages/SingleItemPage.vue";
import BusinessPage from "./pages/BusinessPage.vue";



export const routes = [{
        path: '/',
        name: 'homeLink',
        component: Home
    },
    {
        path: '/businesses/:businessName',
        name: 'businessLink',
        component: BusinessPage
    },
    {
        path: '/:resourceName',
        name: 'categoriesLink',
        component: CategoriesPage
    },
    {
        path: '/:resourceName/:categoryName',
        name: 'subcategoriesLink',
        component: SubCategoriesPage
    },
    {
        path: '/:resourceName/:categoryName/:subcategoryName',
        name: 'singleitemLink',
        component: SingleItemPage
    },
    {
        path: '*',
        redirect: '/'
    }
]