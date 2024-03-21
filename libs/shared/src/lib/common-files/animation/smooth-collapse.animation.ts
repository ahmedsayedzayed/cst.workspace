import { trigger, state, style, transition, animate } from "@angular/animations";

export const smoothCollapse = trigger('smoothCollapse', [
    state(
        'initial',
        style({
            height: '0',
            overflow: 'hidden',
            opacity: '0',
        })
    ),
    state(
        'final',
        style({
            overflow: 'hidden',
            opacity: '1',
        })
    ),
    transition('initial=>final', animate('200ms')),
    transition('final=>initial', animate('200ms')),
]);