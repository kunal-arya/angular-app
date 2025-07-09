import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import("./home/home").then(h => h.Home)
        },
    },
    {
        path: 'todos',
        pathMatch: "full",
        loadComponent: () => {
            return import("./todos/todos").then(t => t.Todos)
        },
    }
];
