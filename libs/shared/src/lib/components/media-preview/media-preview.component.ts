import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { PreviewModeEnum } from '@cst-workspace/shared';
import { MediaPreviewInput } from '../../common-files/models/media-preview-input.interface';
import { MediaTypes } from '../../proxy/cmsservice/enum';
import { DomSanitizer, SafeUrl } from "@angular/platform-browser"
import { Subscription, distinctUntilChanged, filter, fromEvent } from 'rxjs';

@Component({
  selector: 'app-media-preview',
  templateUrl: './media-preview.component.html',
  styleUrls: ['./media-preview.component.scss']
})
export class MediaPreviewComponent implements  OnDestroy {

  isMediaPreviewVisible = false;
  selectedMediaFileIndex = 0;

  PreviewModeEnum = PreviewModeEnum;
  MediaTypes = MediaTypes;

  mediaPreviewInput: MediaPreviewInput;
  videoUrl: SafeUrl;
  $sub: Subscription
  constructor(private renderer: Renderer2, private domSanitizer: DomSanitizer) {
    const keyDowns = fromEvent(document, 'keydown').pipe(
      filter((e: KeyboardEvent) => e.key === 'Escape'),
      distinctUntilChanged()
    );
    this.$sub = keyDowns.subscribe(escpress => {
      if (escpress.type === 'keydown') this.closeMediaPreview()
    });
  }

  showMediaPreview(input: MediaPreviewInput) {
    this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + input.youtubeCode);
    this.mediaPreviewInput = input;
    if (this.mediaPreviewInput.selectedIndex >= 0 && this.mediaPreviewInput.selectedIndex < this.mediaPreviewInput.images?.length) {
      this.selectedMediaFileIndex = this.mediaPreviewInput.selectedIndex;
    }
    //hide body scrollbar after showing media preview layout
    this.renderer.addClass(document.body, 'overflow-hidden');
    this.isMediaPreviewVisible = true;
  }

  closeMediaPreview() {
    this.renderer.removeClass(document.body, 'overflow-hidden');
    this.isMediaPreviewVisible = false
  }

  ngOnDestroy() {
    this.$sub.unsubscribe();
  }
}
