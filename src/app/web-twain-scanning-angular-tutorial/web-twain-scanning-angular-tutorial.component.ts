import { Component } from '@angular/core';

@Component({
  selector: 'app-web-twain-scanning-angular-tutorial',
  templateUrl: './web-twain-scanning-angular-tutorial.component.html',
  styleUrls: ['./web-twain-scanning-angular-tutorial.component.css']
})
export class WebTwainScanningAngularTutorialComponent {

  constructor() {
  }



  ngOnInit() {
    // acquire images from TWAIN scanner
    this.getTwainDeviceList();
  }


  /**
  * Acquires images from TWAIN scanner.
  */
  getTwainDeviceList() {
    this.__registerVintasoftWebTwainService();

    let twainDeviceManager: Vintasoft.Twain.WebTwainDeviceManagerJS | null = this.__openTwainDeviceManager();
    if (twainDeviceManager == null)
      return;

    let twainDeviceListSelectElement: HTMLSelectElement = document.getElementById('twainDeviceList') as HTMLSelectElement;
    // clear the device list
    twainDeviceListSelectElement.options.length = 0;

    let twainDevices: Vintasoft.Twain.WebTwainDeviceJS[] | null = null;
    let twainDevice: Vintasoft.Twain.WebTwainDeviceJS | null = null;
    try {
      // get an array of available TWAIN devices
      twainDevices = twainDeviceManager.get_Devices();

      // get the default TWAIN device
      twainDevice = twainDeviceManager.get_DefaultDevice();

      // for each TWAIN device
      for (var i = 0; i < twainDevices.length; i++) {
          // add the device info to the device list
          twainDeviceListSelectElement.options.length = twainDeviceListSelectElement.options.length + 1;
          twainDeviceListSelectElement.options[i].text = twainDevices[i].get_DeviceName();
          // if device is default device
          if (twainDevices[i].get_DeviceName() === twainDevice.get_DeviceName())
              // select device in device selection element
              twainDeviceListSelectElement.options[i].selected = true;
      }

      if (twainDevices.length > 0) {
        let acquireImagesFromTwainDeviceButton: HTMLButtonElement = document.getElementById("acquireImagesFromTwainDeviceButton") as HTMLButtonElement;
        acquireImagesFromTwainDeviceButton.disabled = false;
      }
    }
    catch (ex) {
      alert(ex);
    }
    finally {
      if (twainDevice != null) {
        // close the device
        twainDevice.close();
      }
      // close the device manager
      twainDeviceManager.close();
    }
  }

  acquireImagesFromTwainDevice() {
    let acquireImagesFromTwainDeviceButton: HTMLButtonElement = document.getElementById("acquireImagesFromTwainDeviceButton") as HTMLButtonElement;
    acquireImagesFromTwainDeviceButton.disabled = true;

    let twainDeviceListSelectElement: HTMLSelectElement = document.getElementById('twainDeviceList') as HTMLSelectElement;
    let twainDeviceIndex: number = twainDeviceListSelectElement.selectedIndex;
    // if TWAIN device manager does not have TWAIN devices
    if (twainDeviceIndex == -1) {
      alert('TWAIN device manager does not have TWAIN devices.');
      acquireImagesFromTwainDeviceButton.disabled = false;
      return;
    }

    var twainDeviceName = twainDeviceListSelectElement.value;
    if (twainDeviceName == null) {
      alert('TWAIN device name is not found.');
      acquireImagesFromTwainDeviceButton.disabled = false;
      return;
    }

    this.__registerVintasoftWebTwainService();

    let twainDeviceManager: Vintasoft.Twain.WebTwainDeviceManagerJS | null = this.__openTwainDeviceManager();
    if (twainDeviceManager == null) {
      alert('TWAIN device manager is not found.');
      acquireImagesFromTwainDeviceButton.disabled = false;
      return;
    }

    let twainDevices: Vintasoft.Twain.WebTwainDeviceJS[] | null = null;
    let twainDevice: Vintasoft.Twain.WebTwainDeviceJS | null = null;
    try {
      // get an array of available TWAIN devices
      twainDevices = twainDeviceManager.get_Devices();

      // for each TWAIN device
      for (var i = 0; i < twainDevices.length; i++) {
          if (twainDevices[i].get_DeviceName() === twainDeviceName)
              twainDevice = twainDevices[i];
      }

      if (twainDevice == null) {
        alert('TWAIN device is not found.');
        acquireImagesFromTwainDeviceButton.disabled = false;
        return;
      }

      // open TWAIN device (do not display device UI but display dialog with image scanning progress)
      twainDevice.open(false, true);

      let acquireModalState: number;
      do {
        // do one step of modal image acquisition process
        let acquireModalResult: Vintasoft.Twain.WebTwainDeviceAcquireModalResultJS = twainDevice.acquireModalSync();
        // get state of image acquisition
        acquireModalState = acquireModalResult.get_AcquireModalState().valueOf() as number;

        switch (acquireModalState) {
          case 2:   // image is acquired
            // get acquired image
            let acquiredImage: Vintasoft.Twain.WebAcquiredImageJS = acquireModalResult.get_AcquiredImage();
            // get image as Base64 string
            let bitmapAsBase64String: string = acquiredImage.getAsBase64String();
            // update image preview
            let previewImageElement: HTMLImageElement = document.getElementById('previewImage') as HTMLImageElement;
            previewImageElement.src = bitmapAsBase64String;
            break;
          case 4:   // scan is failed
            alert(acquireModalResult.get_ErrorMessage());
            break;
          case 9:   // scan is finished
            break;
        }
      }
      while (acquireModalState !== 0);
    }
    catch (ex) {
      alert(ex);
    }
    finally {
      acquireImagesFromTwainDeviceButton.disabled = false;
      if (twainDevice != null) {
        // close the device
        twainDevice.close();
      }
      // close the device manager
      twainDeviceManager.close();
    }
  }

  __registerVintasoftWebTwainService() {
    // register the evaluation version of VintaSoft Web TWAIN service
    // please read how to get evaluation license in documentation: https://www.vintasoft.com/docs/vstwain-dotnet-web/Licensing-Twain_Web-Evaluation.html
    Vintasoft.Twain.WebTwainGlobalSettingsJS.register('REG_USER', 'REG_URL', 'REG_CODE', 'EXPIRATION_DATE');
  }

  __openTwainDeviceManager(): Vintasoft.Twain.WebTwainDeviceManagerJS | null {
    // URL to the VintaSoft Web TWAIN service
    let serviceUrl: string;
    if (window.location.protocol == 'http:')
      serviceUrl = 'http://localhost:25319/api/VintasoftTwainApi';
    else
      serviceUrl = 'https://localhost:25329/api/VintasoftTwainApi';
    // a Web API controller that allows to work with TWAIN devices
    let twainService: Vintasoft.Shared.WebServiceControllerJS = new Vintasoft.Shared.WebServiceControllerJS(serviceUrl);

    // TWAIN device manager
    let twainDeviceManager: Vintasoft.Twain.WebTwainDeviceManagerJS = new Vintasoft.Twain.WebTwainDeviceManagerJS(twainService);

    // the default settings of TWAIN device manager
    let deviceManagerInitSetting: Vintasoft.Twain.WebTwainDeviceManagerInitSettingsJS = new Vintasoft.Twain.WebTwainDeviceManagerInitSettingsJS();

    try {
      // open TWAIN device manager
      twainDeviceManager.open(deviceManagerInitSetting);
    }
    catch (ex) {
      alert(ex);
      return null;
    }
    return twainDeviceManager;
  }

}
