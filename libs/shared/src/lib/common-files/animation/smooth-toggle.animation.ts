import {
    state,
    transition,
    trigger,
    style,
    animate,
  } from '@angular/animations';
  
  export const SmoothToggle = trigger('smoothToggle', [
    state('show', style({ opacity: 1, visibility: 'visible' })),
    transition('show <=> hide', animate('200ms ease-out')),
    state('hide', style({ opacity: 0, bottom: 0, visibility: 'hidden' })),
  ]);
  