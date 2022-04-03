import { Component, OnInit, ViewChild } from "@angular/core";
import { Tab, tabList } from '../tabs/tabs-factory';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: "app-tabs-container",
  templateUrl: "./tabs-container.component.html",
  styleUrls: ["./tabs-container.component.scss"],
})
export class TabsContainerComponent implements OnInit {
  @ViewChild(TabsComponent) tabsComponent: TabsComponent;

  readonly tabList = tabList;
  constructor() {}

  ngOnInit(): void {}

  openTab(tab: Tab) {
    this.tabsComponent.openTab(tab.id);
  }
}
