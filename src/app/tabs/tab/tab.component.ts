import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Tab } from "../tabs-factory";

@Component({
  selector: "app-tab",
  templateUrl: "./tab.component.html",
  styleUrls: ["./tab.component.scss"],
})
export class TabComponent implements OnInit {
  @Input() tab: Tab;

  @Output() closeTab = new EventEmitter<Tab>();

  constructor() {}

  ngOnInit(): void {}
}
