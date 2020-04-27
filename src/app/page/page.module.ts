import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { BootstrapModule } from '../bootstrap.module';
import { ComponentModule } from '../component';
import { PageRoute } from './page.route';


import {
    Main,
    HomePage,
    NewsDetailsPage,
    AboutUsPage,
    ContactUsPage,
    NewsPage,
    SearchPage,
    NotFoundPage,
    EnToFaDirective
} from '.';

export const components = [
    Main,
    HomePage,
    NewsDetailsPage,
    AboutUsPage,
    ContactUsPage,
    NewsPage,
    NotFoundPage,
    SearchPage,
    EnToFaDirective
]

@NgModule({
    declarations: [
        ...components
    ],
    exports: [
        ...components
    ],
    imports: [
        CommonModule,
        BrowserModule,
        ComponentModule,
        RouterModule,
        MaterialModule,
        BootstrapModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(PageRoute),
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class PageModule { }