import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ContactComponent } from './components/contact.component';


const routes: Routes = [

    { 
        path: 'contact',
        component: ContactComponent
        
     }
];


@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class ContactRoutingModule{
    
}