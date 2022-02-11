import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit {
  isHeaderSelected = false;

  constructor(private elRef: ElementRef) {
  }

  ngOnInit(): void {
  }

  startMoving(event: any): void {
    const that = this;
    const hostElement = this.elRef.nativeElement;
    const windowOriginalOffsetTop = hostElement.offsetTop;
    const windowOriginalOffsetLeft = hostElement.offsetLeft;
    const mouseOriginalPageX = event.pageX;
    const mouseOriginalPageY = event.pageY;
    that.isHeaderSelected = true;

    const mousemoveEventListener = (mouseEvent: MouseEvent) => {
      this.elRef.nativeElement.style.left = (windowOriginalOffsetLeft - mouseOriginalPageX + mouseEvent.pageX) + "px";
      this.elRef.nativeElement.style.top = (windowOriginalOffsetTop - mouseOriginalPageY + mouseEvent.pageY) + "px";
      console.log({x: hostElement.style.left, y: hostElement.style.top});
    }

    const mouseupEventListener = () => {
      document.removeEventListener("mousemove", mousemoveEventListener);
      document.removeEventListener("mouseup", mouseupEventListener);
      that.isHeaderSelected = false;
    }

    document.addEventListener("mousemove", mousemoveEventListener);
    document.addEventListener("mouseup", mouseupEventListener);
  }
}
