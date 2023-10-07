import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { ImageCroppedEvent } from 'src/app/models/image-cropped-event';

@Component({
  selector: 'app-image-crop',
  templateUrl: './image-crop.component.html',
  styleUrls: ['./image-crop.component.scss'],
})
export class ImageCropComponent {
  safeImgDataUrl: SafeUrl | string = '';
  @Input() imageChangedEvent: any;
  @Output() imageCropped = new EventEmitter<ImageCroppedEvent>();
  @ViewChild('sourceImage', { static: false }) sourceImage!: ElementRef;
}
