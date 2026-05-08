import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";
/** 
* The class 'is-in-view' is added when the target component's inViewThreshold part sets into view area.
* The class is removed when the component falls out of view area
*/
@Directive({
    selector:'[appComponentInView]',
    standalone:true
})
export class AppIntersectDirective {
    @Input() inViewThreshold = 0.2;
    public isInView:boolean = false
    private intersectObserver:IntersectionObserver|null = null;
    constructor(
        private el:ElementRef,
        private render:Renderer2
    ) {}
    ngOnInit(): void {
        this.intersectObserver = new IntersectionObserver(([entry])=>{
            this.isInView = entry.isIntersecting
            if (this.isInView) {
                this.render.addClass(this.el.nativeElement,'is-in-view') 
            } else {
                this.render.removeClass(this.el.nativeElement,'is-in-view') 
            } 
        },{
            threshold:this.inViewThreshold
        });
        this.intersectObserver.observe(this.el.nativeElement)
    }
    ngOnDestroy(): void {
        this.intersectObserver?.disconnect()
    }
}