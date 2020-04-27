import { Routes } from '@angular/router';

import {
    Main,
    HomePage,
    NewsDetailsPage,
    AboutUsPage,
    ContactUsPage,
    NewsPage,
    NotFoundPage
} from '.';
import { SearchPage } from './main/search-page/search.page';


export const PageRoute: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '',
        children:
            [
                {
                    path: '',
                    redirectTo: 'home',
                    pathMatch: 'full'
                },
                {
                    path: 'home',
                    children: [
                        {
                            path: '',
                            component: HomePage,
                            data: {
                                title: 'صفحه اصلی'
                            }
                        }
                    ]
                },
                {
                    path: 'news',
                    children: [
                        {
                            path: '',
                            component: NewsPage,
                            data: {
                                title: 'اخبار'
                            }
                        },
                        {
                            path: 'details',
                            component: NewsDetailsPage,
                            data: {
                                title: 'جزییات خبر'
                            }
                        }
                    ]
                },
                {
                    path: 'contact-us',
                    component: ContactUsPage,
                    data: {
                        title: 'تماس با ما'
                    }
                },
                {
                    path: 'about-us',
                    component: AboutUsPage,
                    data: {
                        title: 'درباره ما'
                    }
                },
                {
                    path: 'search',
                    component: SearchPage,
                    data: {
                        title: 'جستجو در سایت'
                    }
                },
            ]
    },
    {
        path: 'not-found',
        component: NotFoundPage,
        data: {
            title: 'صفحه یافت نشد'
        }
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
]