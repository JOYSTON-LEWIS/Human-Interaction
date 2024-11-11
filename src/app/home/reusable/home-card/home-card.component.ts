import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.scss'
})
export class HomeCardComponent implements OnInit {
  @Input()
  uiCardsArrayObject: any;

  ngOnInit(): void {
  }

}
