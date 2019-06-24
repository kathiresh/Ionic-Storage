import { Component, ViewChild, ElementRef, HostListener, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(
    private geolocation: Geolocation,
    private transfer: FileTransfer,
    private file: File
  ) {

  }

  // fileTransfer: FileTransferObject = this.transfer.create();

  private fileTransfer: FileTransferObject;



  ngOnInit() {

    this.fileTransfer = this.transfer.create();
    try {
      console.log("====cordova.file.===", cordova);
      // const url = 'http://i.imgur.com/SmYfo2m.jpg';
      const url = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
      console.log("===1===befr==", url);
      console.log("====applicationDirectory====", this.file.applicationDirectory)
      console.log("====applicationStorageDirectory====", this.file.applicationStorageDirectory)
      console.log("====dataDirectory====", this.file.dataDirectory)
      console.log("====documentsDirectory====", this.file.documentsDirectory)
      console.log("====externalApplicationStorageDirectory====", this.file.externalApplicationStorageDirectory)
      console.log("====externalDataDirectory====", this.file.externalDataDirectory)
      console.log("====externalCacheDirectory====", this.file.externalCacheDirectory)
      console.log("====externalRootDirectory====", this.file.externalRootDirectory)
      console.log("====sharedDirectory====", this.file.sharedDirectory)
      console.log("====syncedDataDirectory====", this.file.syncedDataDirectory)
      console.log("====tempDirectory====", this.file.tempDirectory)

      console.log("====using externalRootDirectory")
      this.fileTransfer.download(url, this.file.externalRootDirectory + 'Oportun/' + 'loan.pdf', true).then((entry) => {
        console.log("==success==", entry);
        console.log('download complete: =====' + entry.toURL());
      }, (error) => {
        console.log("==error====", error);
      });
    }
    catch (err) {
      console.log('===errerrerrerr====dataDirectory', err);
    }

  }


}
