import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('../app/components/dialog-demo/dialog-demo.component').then(c => c.DialogDemoComponent)        
    }
];
