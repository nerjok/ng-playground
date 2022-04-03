import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Tab, TabsFactory } from "./tabs-factory";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements OnInit {

  activeTabs: Set<Tab> = new Set();

  activeTabId: string;
  get tabs() {
    return this.tabsFactory.tabs;
  }

  constructor(private tabsFactory: TabsFactory, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  openTab(tabId: string) {
    const tabToOpen = this.tabs.find(({id}) => id === tabId);
    this.activeTabs.add(tabToOpen);
    this.activeTabId = tabToOpen.id;
    console.log("[ openTabArguments ]", tabToOpen, this.activeTabs);
    this.cdr.detectChanges();
  }

  closeTab(evt: MouseEvent, tab: Tab) {
    evt.preventDefault();
    evt.stopImmediatePropagation();
    console.log('[[ closeTab2($event)]]', evt);

    this.activeTabs.delete(tab);
    this.activeTabId = [...this.activeTabs].pop()?.id ?? null;
    this.cdr.detectChanges();
  }
  changeActiveTab(tab: NgbNavChangeEvent){
    console.log('[[ changeActiveTab($event) ]', tab);
    // this.activeTabs.has()
    // this.activeTabId = tab.nextId;
    // this.cdr.detectChanges();
  }
}
