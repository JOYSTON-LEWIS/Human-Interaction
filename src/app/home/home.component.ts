import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { APPLEVELCONSTANTS } from '../../constants/app-level-constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  uiCardsArray = APPLEVELCONSTANTS.CARDS;

  ngOnInit(): void {
    console.log("this.uiCardsarray", this.uiCardsArray);
  }

}

// implements AfterViewInit
// isScrolled = false;

// @ViewChild('secondSection', { static: false }) secondVideoContainer!: ElementRef;

// ngAfterViewInit() {
//   this.checkScrollPosition(); // Initial check when the view is initialized
// }

// @HostListener('window:scroll', [])
// onWindowScroll() {
//   console.log("called")
//   this.checkScrollPosition();
// }

// checkScrollPosition() {
//   console.log("called second")
//   if (this.secondVideoContainer?.nativeElement) {
//     const rect = this.secondVideoContainer.nativeElement.getBoundingClientRect();
//     this.isScrolled = rect.top <= window.innerHeight / 2;
//   }
// }
