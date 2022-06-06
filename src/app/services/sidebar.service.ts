import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Main', url: '/' },
        { titulo: 'Products', url: 'products' },
        { titulo: 'SuperHero', url: 'hero' },
        { titulo: 'Invoice', url: 'invoice' },
      ]
    },
  ];

  constructor() { }
}
