import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core'
import {  JQUERY_TOKEN } from './index'

@Directive({
    selector:'[modal-trigger]',
})
export class ModalTriggerDirective implements OnInit {
        private el: HTMLElement;
        @Input('modal-trigger') modalId:string;

        constructor(private ref: ElementRef, @Inject(JQUERY_TOKEN) private $:any){
            this.el = ref.nativeElement;
        }

        ngOnInit(): void {
            this.el.addEventListener('click', e => {
                this.$(`#${this.modalId}`).modal({});
            })
        }
}