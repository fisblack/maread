import { Directive, ElementRef } from '@angular/core';
// import * as $ from 'jquery'
declare var $: any
@Directive({
  selector: '[appChosen]'
})
export class ChosenDirective {

  constructor(el: ElementRef) { 
    // $(el.nativeElement).chosen({disable_search_threshold: 10});
    
  }
    
}
