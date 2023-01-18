import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng-lts/api';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  public menuItem: MenuItem[] = [];
  public menu: boolean = false;

  constructor(private primengConfig: PrimeNGConfig) { }

    ngOnInit() {
        this.primengConfig.ripple = true;

        this.menuItem = [
            {
                label: 'Inicio',
                icon:'pi pi-home',
                routerLink: '/home'
            },
            {
            label: 'Cursos',
            icon:'pi pi-fw pi-file',
            items: [
                {
                    label: 'Front-end',
                    icon:'fa fa-code',
                    routerLink: '/courses'
                },
                {
                    label: 'Back-end',
                    icon:'pi pi-fw pi-plus',
                    routerLink: '/courses'
                }
            ]},
            {
                label: 'White Label',
                icon:'pi pi-user-edit',
                routerLink: '/whiteLabel'
            }]
    }

}
