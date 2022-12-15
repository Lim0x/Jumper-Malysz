import { Component } from "@angular/core";

interface Link {
  label: string;
  link: string;

}

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent {
  readonly links: Link[] = [
    { label: "Jumpers", link: "/jumpers" },
  ];
}
