import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { APPLEVELCONSTANTS } from '../../constants/app-level-constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  uiCardsArray = APPLEVELCONSTANTS.CARDS;
  scrollPosition = 0;
  isMobileView = false;
  isBlack = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollPosition = window.scrollY;
    this.assignClassToMenuIcon();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.isMobileView = window.innerWidth < 768;
    this.assignClassToMenuIcon();
  }

  ngOnInit(): void {
  }

  assignClassToMenuIcon(){
    if(this.scrollPosition >= 700 && !this.isMobileView || this.scrollPosition >= 600 && this.isMobileView)
    {
      this.isBlack = true;
    }
    else{
      this.isBlack = false;
    }
  }
  

}