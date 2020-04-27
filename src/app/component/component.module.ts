import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material.module';
import { BootstrapModule } from '../bootstrap.module';

import {
    NewsComponent,
    CardTypeAComponent,
    CardTypeBComponent,
    CardTypeCComponent,
    CommentsComponent,
    TagsComponent,
    EmptyListComponent,
    LoadingComponent
} from '.';


export const components = [
    NewsComponent,
    CardTypeAComponent,
    CardTypeBComponent,
    CardTypeCComponent,
    CommentsComponent,
    TagsComponent,
    EmptyListComponent,
    LoadingComponent
]
@NgModule({
    declarations: [
        ...components,
    ],
    exports: [
        ...components
    ],
    imports: [
        CommonModule,
        BrowserModule,
        MaterialModule,
        BootstrapModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ComponentModule { }