import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'av_timer' },
  {
    state: 'locadoraFilmes/consultRental',
    type: 'link',
    name: 'Filmes',
    icon: 'movie'
  },
  {
    state: 'locadoraFilmes/rent',
    type: 'link',
    name: 'Alugar',
    icon: 'person_pin'
  },
  {
    state: 'locadoraFilmes/newPayment',
    type: 'link',
    name: 'Pagamento',
    icon: 'attach_money'
  }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
