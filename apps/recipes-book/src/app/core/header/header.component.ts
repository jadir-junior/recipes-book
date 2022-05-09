import { Component } from '@angular/core';

@Component({
  selector: 'rb-header',
  template: `
    <div class="header">
      <div class="zone">
        <p-button
          class="header-menu-item"
          routerLink=""
          label="Recipes Book"
        ></p-button>
        <img class="logo" src="assets/recipes/chef.png" alt="Chef" />
      </div>
      <div class="zone">
        <p-button
          class="header-menu-item"
          routerLink="recipes/create"
          label="My recipes"
        ></p-button>
        <p-button
          class="header-menu-item"
          routerLink="recipes/create"
          label="My favourites"
        ></p-button>
        <p-button
          class="header-menu-item"
          routerLink="recipes/create"
          label="New Recipe"
        ></p-button>
        <i
          class="pi pi-user"
          style="font-size: 1.3rem; color: #fff; margin-bottom: 12px; margin-left: 48px"
        ></i>
      </div>
    </div>
  `,
  styles: [
    `
      .header {
        height: 70px;
        background-color: #f71e68;
        top: 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .zone {
        padding: 16px;
      }

      .logo {
        width: 39.6px;
        height: 39.6px;
      }
    `,
  ],
})
export class HeaderComponent {}
