import { Directive, Input, ElementRef, OnChanges, Renderer2, OnInit, AfterViewInit } from '@angular/core';

@Directive({
    selector: '[convertToFa]'
})
export class EnToFaDirective implements OnChanges, OnInit, AfterViewInit {
    ngAfterViewInit(): void {
        this.elementRef.nativeElement.innerHTML = this.dateConvertor(this.elementRef.nativeElement.innerHTML);
    }

    numbers = [
        {
            Fa: '۰',
            En: '0'
        },
        {
            Fa: '۱',
            En: '1'
        },
        {
            Fa: '۲',
            En: '2'
        },
        {
            Fa: '۳',
            En: '3'
        },
        {
            Fa: '۴',
            En: '4'
        },
        {
            Fa: '۵',
            En: '5'
        },
        {
            Fa: '۶',
            En: '6'
        },
        {
            Fa: '۷',
            En: '7'
        },
        {
            Fa: '۸',
            En: '8'
        },
        {
            Fa: '۹',
            En: '9'
        }
    ];


    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
    ngOnChanges() { }
    ngOnInit() { }
    dateConvertor(num) {
        let isFa: boolean = false;
        let Num: string[] = [];
        let convertedNum: string = "";
        for (let i = 0; i < num.length; i++) {
            for (let j = 0; j < this.numbers.length; j++)
                if (num[i] == this.numbers[j].En) {
                    Num[i] = this.numbers[j].Fa;
                    isFa = true;
                }
            if (isFa == false) Num[i] = num[i];
            else isFa = false;
        }
        for (let i = 0; i < Num.length; i++)
            convertedNum += Num[i];
        return convertedNum
    }
}