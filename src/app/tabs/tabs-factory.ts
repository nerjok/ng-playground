import { Injectable } from '@angular/core';

export interface Tab {
  name: string;
  id: string;
}

export const tabList: Tab[] = [
  {
    name: 'first Tab',
    id: 'one'
  },
  {
    name: 'second tab',
    id: 'two'
  },
  {
    name: 'third tab',
    id: 'three'
  }
]

@Injectable(
  {providedIn: 'root'}
)
export class TabsFactory {
  _tabs: Tab[] = tabList;


  get tabs() {
    return this._tabs;
  }

  addTab(tab: Tab) {
    this._tabs.push(tab);
  }

  removeTab() {
    const indexToRemove = 1;
  }
}