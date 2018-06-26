import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';
// import * as $ from 'jquery'
declare var $: any
@Directive({
  selector: '[appChosen]'
})
export class ChosenDirective {

  constructor(private el: ElementRef) { 
    // $(el.nativeElement).chosen({disable_search_threshold: 10});
    
  }

  ngOnInit (): void  {
    $(this.el.nativeElement).chosen({disable_search_threshold: 10});
  }
  
}
