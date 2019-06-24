import { Component, OnInit, ViewChild, ElementRef, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements OnInit {
  @ViewChild('graph') graph: ElementRef;
  // @HostListener('window:scroll', ['$event'])

  @HostListener('window:scroll')
  checkScroll() {
   // console.log("===calling window scroll======");
    const scrollPosition = window.pageYOffset + window.innerHeight;
    console.log("==scrollPosition=", scrollPosition)
    console.log("===this.graph===", this.graph);
    console.log("==offsetTop===",this.graph.nativeElement.offsetTop);
    console.log("==scrollPosition==",scrollPosition)
    if (this.graph && this.graph.nativeElement.offsetTop >= scrollPosition) {
      //this.animateAvatars();
      console.log("==render chart");
    }
  }


  @HostListener('document:mousewheel', ['$event'])
  onScroll(event: Element) {
    console.log('calling=doc======')
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    // console.log($event['Window']);
    console.log("scrolling=====")
  }
  constructor() { }

  ngOnInit() { }

}
