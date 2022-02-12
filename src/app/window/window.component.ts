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

  startMoving(event: MouseEvent): void {
    const that = this;
    const hostElement = this.elRef.nativeElement;
    const windowOriginalOffsetTop = hostElement.offsetTop;
    const windowOriginalOffsetLeft = hostElement.offsetLeft;
    const mouseOriginalPageX = event.pageX;
    const mouseOriginalPageY = event.pageY;
    that.isHeaderSelected = true;

    const mousemoveEventListener = (mouseEvent: MouseEvent) => {
      hostElement.style.left = (windowOriginalOffsetLeft - mouseOriginalPageX + mouseEvent.pageX) + "px";
      hostElement.style.top = (windowOriginalOffsetTop - mouseOriginalPageY + mouseEvent.pageY) + "px";
    }

    const mouseupEventListener = () => {
      document.removeEventListener("mousemove", mousemoveEventListener);
      document.removeEventListener("mouseup", mouseupEventListener);
      that.isHeaderSelected = false;
    }

    document.addEventListener("mousemove", mousemoveEventListener);
    document.addEventListener("mouseup", mouseupEventListener);
  }

  startResizing(event: MouseEvent): void {
    const hostElement = this.elRef.nativeElement;
    const windowOriginalWidth = hostElement.clientWidth;
    const windowOriginalHeight = hostElement.clientHeight;
    const mouseOriginalPageX = event.pageX;
    const mouseOriginalPageY = event.pageY;

    const mousemoveEventListener = (mouseEvent: MouseEvent) => {
      hostElement.style.width = (windowOriginalWidth - mouseOriginalPageX + mouseEvent.pageX) + "px";
      hostElement.style.height = (windowOriginalHeight - mouseOriginalPageY + mouseEvent.pageY) + "px";
    }

    const mouseupEventListener = () => {
      document.removeEventListener("mousemove", mousemoveEventListener);
      document.removeEventListener("mouseup", mouseupEventListener);
      }

    document.addEventListener("mousemove", mousemoveEventListener);
    document.addEventListener("mouseup", mouseupEventListener);
  }
}
