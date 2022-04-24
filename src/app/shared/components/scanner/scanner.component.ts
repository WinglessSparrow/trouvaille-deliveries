import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import jsQR, { QRCode } from 'jsqr';

@Component({
  selector: 'scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss'],
})
export class ScannerComponent implements OnInit {
  @Input() isActive: Boolean = false;
  @Output() isActiveChange = new EventEmitter();

  //communicate new QR Code
  @Output() qrCodeRead = new EventEmitter<QRCode>();

  @ViewChild('video', { static: false }) video: ElementRef;
  @ViewChild('canvas', { static: false }) canvas: ElementRef;

  //a bunch of intermediate objects
  private canvasElement: any;
  private canvasContext: any;
  private videoElement: any;
  private loading: HTMLIonLoadingElement = null;

  constructor(private loadingController: LoadingController) {}

  ngOnInit(): void {}

  //init the variables, start scanning
  ngAfterViewInit() {
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
    this.videoElement = this.video.nativeElement;

    this.startScan();
  }

  async startScan() {
    //getting the video Stream
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' },
    });

    //setting the stream to video tag + configure
    this.videoElement.srcObject = stream;
    this.videoElement.setAttribute('playsinline', true);
    this.videoElement.play();

    //this is needed to make it work, idk why
    this.loading = await this.loadingController.create({});
    await this.loading.present();

    //start QR recognition
    requestAnimationFrame(this.scan.bind(this));
  }

  async stopScan() {
    this.videoElement.srcObject.getTracks()[0].stop();
  }

  private async scan() {
    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
      if (this.loading) {
        await this.loading.dismiss();
        this.loading = null;
        this.isActive = true;
      }

      this.canvasElement.height = this.videoElement.videoHeight;
      this.canvasElement.width = this.videoElement.videoWidth;

      this.canvasContext.drawImage(
        this.videoElement,
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const imageData = this.canvasContext.getImageData(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );

      //recognition through library
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert',
      });

      //check if any found
      if (code != null) {
        console.log('QRcode: ' + code.data);

        //stop the vot... scanning
        this.isActive = false;

        //found, pass Data upwards
        this.qrCodeRead.emit(code);
        this.stopScan();
      } else {
        if (this.isActive) {
          requestAnimationFrame(this.scan.bind(this));
        }
      }
    } else {
      requestAnimationFrame(this.scan.bind(this));
    }
  }
}
