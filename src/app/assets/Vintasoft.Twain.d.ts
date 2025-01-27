// Copyright 2014-2025 VintaSoft LLC. All rights reserved.
// This software is protected by International copyright laws.
// Any copying, duplication, deployment, redistribution, modification or other
// disposition hereof is STRICTLY PROHIBITED without an express written license
// granted by VintaSoft LLC. This notice may not be removed or otherwise
// altered under any circumstances.
// This code may NOT be used apart of the VintaSoft product.
﻿// NAMESPACE
declare module Vintasoft.Twain {

  // ===== ENUMS =====

  /**
   * Specifies available usage modes for TWAIN device capability value.
   */
  class WebTwainDeviceCapabilityUsageModeEnumJS extends Vintasoft.Shared.WebFlagsEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available states of the [see="WebTwainDeviceJS.acquireModalSync"] method.
   */
  class WebAcquireModalStateEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available reduction methods for bit depth loss.
   */
  class WebBitDepthReductionModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available modes that defines how the internal scanner buffer must be cleared.
   */
  class WebClearBufferModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available duplex modes.
   */
  class WebDuplexModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available image filters.
   */
  class WebImageFilterEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies how the batch job must be processed.
   */
  class WebJobControlEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available light paths.
   */
  class WebLightPathEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available color characteristic of the light sources used to acquire the image.
   */
  class WebLightSourceEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available noise filter algorithms.
   */
  class WebNoiseFilterEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available methods of image size detection.
   */
  class WebPageAutoSizeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available page orientations.
   */
  class WebPageOrientationEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available page sizes.
   */
  class WebPageSizeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available pixel flavors for black-white images.
   */
  class WebPixelFlavorEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available pixel types.
   */
  class WebPixelTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available transfer modes.
   */
  class WebTransferModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available compressions of acquired images.
   */
  class WebTwainImageCompressionEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available file formats for a file transfer mode.
   */
  class WebTwainImageFileFormatEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available types of containers for TWAIN values.
   */
  class WebTwainValueContainerTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available types of TWAIN values.
   */
  class WebTwainValueTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available units of measure.
   */
  class WebUnitOfMeasureEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available identifiers of device capabilities.
   */
  class WebDeviceCapabilityIdEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available country codes for TWAIN device.
   */
  class WebCountryCodeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available languages for TWAIN device.
   */
  class WebLanguageTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }


  // ===== CLASSES =====

  /**
   * Contains information about TWAIN global settings.
   */
  class WebTwainGlobalSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebTwainGlobalSettingsJS"] class.
     */
    constructor();

    // METHODS

    /**
     * Registers the SDK for usage in web application.
     * @param regUser Registered user.
     * @param regUrl Registered URL.
     * @param regCode Registration code.
     * @param expirationDate Expiration date of evaluation license.
     */
    static register(regUser: string, regUrl: string, regCode: string, expirationDate: string): void;

    /**
     * Registers the SDK for usage in web application.
     * @param regUser Registered user.
     * @param regUrl Registered URL.
     * @param regCode Registration code.
     */
    static register(regUser: string, regUrl: string, regCode: string): void;

    /**
     * Returns the name of user OS.
     */
    static getUserOS(): string;

  }

  /**
   * Defines a frame rectangle in units of measure used by TWAIN device.
   */
  class WebTwainFrameJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebTwainFrameJS"] class.
     * @param left Value of the left-most edge of the rectangle, in [see="Vintasoft.Twain.WebUnitOfMeasureEnumJS"].
     * @param top Value of the top-most edge of the rectangle, in [see="Vintasoft.Twain.WebUnitOfMeasureEnumJS"].
     * @param right Value of the right-most edge of the rectangle, in [see="Vintasoft.Twain.WebUnitOfMeasureEnumJS"].
     * @param bottom Value of the bottom-most edge of the rectangle, in [see="Vintasoft.Twain.WebUnitOfMeasureEnumJS"].
     */
    constructor(left: number, top: number, right: number, bottom: number);

    // PROPERTIES

    /**
     * Gets a value of the left-most edge of the rectangle, in units of measure used by device.
     */
    get_Left(): number;

    /**
     * Sets a value of the left-most edge of the rectangle, in units of measure used by device.
     * @param value A value of the left-most edge of the rectangle, in units of measure used by device.
     */
    set_Left(value: number): void;

    /**
     * Gets a value of the top-most edge of the rectangle, in units of measure used by device.
     */
    get_Top(): number;

    /**
     * Sets a value of the top-most edge of the rectangle, in units of measure used by device.
     * @param value A value of the top-most edge of the rectangle, in units of measure used by device.
     */
    set_Top(value: number): void;

    /**
     * Gets a value of the right-most edge of the rectangle, in units of measure used by device.
     */
    get_Right(): number;

    /**
     * Sets a value of the right-most edge of the rectangle, in units of measure used by device.
     * @param value A value of the right-most edge of the rectangle, in units of measure used by device.
     */
    set_Right(value: number): void;

    /**
     * Gets a value of the bottom-most edge of the rectangle, in units of measure used by device.
     */
    get_Bottom(): number;

    /**
     * Sets a value of the bottom-most edge of the rectangle, in units of measure used by device.
     * @param value A value of the bottom-most edge of the rectangle, in units of measure used by device.
     */
    set_Bottom(value: number): void;

    // METHODS

    /**
     * Determines whether the specified frame is equal to the current frame.
     * @param value Frame to compare with the current frame.
     */
    equals(value: Vintasoft.Twain.WebTwainFrameJS): boolean;

    /**
     * Returns frame as rectangle.
     */
    toRectangle(): object;

    /**
     * Returns the string representation of this object.
     */
    toString(): string;

  }

  /**
   * Contains information about range of values.
   */
  class WebTwainRangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebTwainRangeJS"] class.
     * @param minValue Minimum value of range.
     * @param maxValue Maximum value of range.
     * @param stepSize Step size between minimum and maximum values of range.
     */
    constructor(minValue: number, maxValue: number, stepSize: number);

    // PROPERTIES

    /**
     * Gets a minimum value of device capability.
     */
    get_MinValue(): number;

    /**
     * Gets a maximum value of device capability.
     */
    get_MaxValue(): number;

    /**
     * Gets a step size between minimum and maximum values of device capability.
     */
    get_StepSize(): number;

  }

  /**
   * Contains information about image layout of TWAIN device.
   */
  class WebTwainImageLayoutJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebTwainImageLayoutJS"] class.
     * @param x X-coordinate of the left-top corner of image layout rectangle.
     * @param y Y-coordinate of the left-top corner of image layout rectangle.
     * @param width Width of image layout rectangle.
     * @param height Height of image layout rectangle.
     */
    constructor(x: number, y: number, width: number, height: number);

    // PROPERTIES

    /**
     * Gets X-coordinate of the left-top corner of image layout rectangle.
     */
    get_X(): number;

    /**
     * Gets Y-coordinate of the left-top corner of image layout rectangle.
     */
    get_Y(): number;

    /**
     * Gets width of image layout rectangle.
     */
    get_Width(): number;

    /**
     * Gets height of image layout rectangle.
     */
    get_Height(): number;

  }

  /**
   * Contains information about value of TWAIN device capability.
   */
  class WebTwainCapabilityInfoJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebTwainCapabilityInfoJS"] class.
     * @param id Identifier of device capability.
     * @param name Name of device capability.
     * @param containerType Instance of [see="WebTwainValueContainerTypeEnumJS"] class that represents the container type of device capability value.
     * @param valueType Instance of [see="WebTwainValueTypeEnumJS"] class that represents the type of device capability value.
     * @param currentValue The current value of device capability.
     * @param defaultValue The default value of device capability.
     * @param supportedValues An instance of [see="WebTwainCapabilitySupportedValuesJS"] class.
     */
    constructor(id: number, name: string, containerType: Vintasoft.Twain.WebTwainValueContainerTypeEnumJS, valueType: Vintasoft.Twain.WebTwainValueTypeEnumJS, currentValue: object, defaultValue: object, supportedValues: Vintasoft.Twain.WebTwainCapabilitySupportedValuesJS);

    // PROPERTIES

    /**
     * Gets an identifier of device capability.
     */
    get_Id(): number;

    /**
     * Gets name of device capability.
     */
    get_Name(): string;

    /**
     * Gets the container type of device capability value.
     */
    get_ContainerType(): Vintasoft.Twain.WebTwainValueContainerTypeEnumJS;

    /**
     * Gets the type of device capability value.
     */
    get_ValueType(): Vintasoft.Twain.WebTwainValueTypeEnumJS;

    /**
     * Gets current value of device capability.
     */
    get_CurrentValue(): object;

    /**
     * Gets the default value of device capability.
     */
    get_DefaultValue(): object;

    /**
     * Gets the supported values of device capability.
     */
    get_SupportedValues(): Vintasoft.Twain.WebTwainCapabilitySupportedValuesJS;

  }

  /**
   * Contains information about supported values of TWAIN device capability.
   */
  class WebTwainCapabilitySupportedValuesJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebTwainCapabilitySupportedValuesJS"] class.
     * @param supportedValuesAsArray An array with supported values of device capability if supported value are represented by array.
     * @param supportedValuesAsRange Instance of [see="WebTwainRangeJS"] class.
     */
    constructor(supportedValuesAsArray: object[], supportedValuesAsRange: Vintasoft.Twain.WebTwainRangeJS);

    // PROPERTIES

    /**
     * Gets supported values as an array.
     */
    get_SupportedValuesAsArray(): object[];

    /**
     * Gets supported values as a range value.
     */
    get_SupportedValuesAsRange(): Vintasoft.Twain.WebTwainRangeJS;

  }

  /**
   * Represents settings for initializing of TWAIN/SANE device manager.
   */
  class WebTwainDeviceManagerInitSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebTwainDeviceManagerInitSettingsJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets a value indicating whether TWAIN 2.x Data Source Manager should be used.
     */
    get_IsTwain2Compatible(): boolean;

    /**
     * Sets a value indicating whether TWAIN 2.x Data Source Manager should be used.
     * @param value True - TWAIN 2.x Data Source Manager (TWAINDSM.DLL) should be used; False - TWAIN 1.x Data Source Manager (TWAIN_32.DLL) should be used.
     */
    set_IsTwain2Compatible(value: boolean): void;

    /**
     * Gets a value indicating whether TWAIN device manager supports 32-bit devices.
     */
    get_Is32BitDevicesSupported(): boolean;

    /**
     * Sets a value indicating whether TWAIN device manager should support 32-bit devices.
     * @param value True - TWAIN device manager should support 32-bit devices; False - TWAIN device manager should not support 32-bit devices.
     */
    set_Is32BitDevicesSupported(value: boolean): void;

    /**
     * Gets a value indicating whether TWAIN device manager supports 64-bit devices.
     */
    get_Is64BitDevicesSupported(): boolean;

    /**
     * Sets a value indicating whether TWAIN device manager should support 64-bit devices.
     * @param value True - TWAIN device manager should support 64-bit devices; False - TWAIN device manager should not support 64-bit devices.
     */
    set_Is64BitDevicesSupported(value: boolean): void;

    /**
     * Gets the country code, which must be used by TWAIN device manager.
     */
    get_CountryCode(): Vintasoft.Twain.WebCountryCodeEnumJS;

    /**
     * Sets the country code, which must be used by TWAIN device manager.
     * @param value An instance of [see="WebCountryCodeEnumJS"] class that defines the country code. Default value is "USA".
     */
    set_CountryCode(value: Vintasoft.Twain.WebCountryCodeEnumJS): void;

    /**
     * Gets the language, which must be used by TWAIN device manager.
     */
    get_LanguageType(): Vintasoft.Twain.WebLanguageTypeEnumJS;

    /**
     * Sets the language, which must be used by TWAIN device manager.
     * @param value An instance of [see="WebLanguageTypeEnumJS"] class that defines the language. Default value is "English".
     */
    set_LanguageType(value: Vintasoft.Twain.WebLanguageTypeEnumJS): void;

    /**
     * Gets a value indicating whether the TWAIN device UI window must be shown as a top most window.
     */
    get_TopMostUiWindow(): boolean;

    /**
     * Sets a value indicating whether the TWAIN device UI window must be shown as a top most window.
     * @param value True - TWAIN device UI window must be shown as a top most window if parent window is NOT specified; otherwise, false.
     */
    set_TopMostUiWindow(value: boolean): void;

    /**
     * Gets an interval, in milliseconds, during which the device manager must refresh its session.
     */
    get_AllowableSessionInactivityTime(): number;

    /**
     * Sets an interval, in milliseconds, during which the device manager must refresh its session.
     * @param value An interval, in milliseconds, during which the device manager must refresh its session. Default value is 60000 milliseconds (1 minute). Minimum value is 100, maximum value is 3600000.
     */
    set_AllowableSessionInactivityTime(value: number): void;

  }

  /**
   * Class that allows to work with TWAIN/SANE device manager.
   */
  class WebTwainDeviceManagerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebTwainDeviceManagerJS"] class.
     * @param service An instance of [see="WebServiceJS"] class that should be used for working with TWAIN device manager.
     */
    constructor(service: Vintasoft.Shared.WebServiceJS);

    /**
     * Initializes a new instance of the [see= "WebTwainDeviceManagerJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets a value indicating whether the device manager is opened.
     */
    get_IsOpened(): boolean;

    /**
     * Gets a value indicating whether TWAIN 2.x Data Source Manager should be used.
     */
    get_IsTwain2Compatible(): boolean;

    /**
     * Gets the device, which is opened in device manager.
     */
    get_OpenedDevice(): Vintasoft.Twain.WebTwainDeviceJS;

    /**
     * Gets version of VintaSoft Web TWAIN service.
     */
    get_TwainServiceVersion(): string;

    /**
     * Gets version of VintaSoft Web TWAIN API.
     */
    get_TwainApiVersion(): string;

    /**
     * Gets the identifier of TWAIN session.
     */
    get_TwainSessionId(): string;

    // METHODS

    /**
     * Gets a list of TWAIN/SANE devices installed in the system.
     */
    get_Devices(): Vintasoft.Twain.WebTwainDeviceJS[];

    /**
     * Gets the default TWAIN/SANE device.
     */
    get_DefaultDevice(): Vintasoft.Twain.WebTwainDeviceJS;

    /**
     * Opens TWAIN/SANE device manager.
     * @param initSettings An instance of [see="WebTwainDeviceManagerInitSettingsJS"] class that defines initialization settings for TWAIN device manager.
     */
    open(initSettings: Vintasoft.Twain.WebTwainDeviceManagerInitSettingsJS): void;

    /**
     * Sends an asynchronous request to open TWAIN/SANE device manager.
     * @param initSettings An instance of [see="WebTwainDeviceManagerInitSettingsJS"] class that defines initialization settings for TWAIN device manager.
     * @param successFunc A function that will be executed if request is executed successfully. Function prototype: "successFunc(twainDeviceManager)", where 'twainDeviceManager' parameter is an instance of WebTwainDeviceManagerJS class.
     * @param errorFunc A function that will be executed if request is failed. Function prototype: "errorFunc(twainDeviceManager, errorMessage)", where 'twainDeviceManager' parameter is an instance of WebTwainDeviceManagerJS class, 'errorMessage' parameter is string that describes error.
     */
    openAsync(initSettings: Vintasoft.Twain.WebTwainDeviceManagerInitSettingsJS, successFunc: Function, errorFunc: Function): void;

    /**
     * Closes TWAIN/SANE device manager.
     */
    close(): void;

    /**
     * Sends an asynchronous request to close TWAIN/SANE device manager.
     * @param successFunc A function that will be executed if request is executed successfully.<br /> Function prototype: "successFunc(twainDeviceManager)", where 'twainDeviceManager' parameter is an instance of [see="WebTwainDeviceManagerJS"] class.
     * @param errorFunc A function that will be executed if request is failed.<br /> Function prototype: "errorFunc(twainDeviceManager, errorMessage)", where 'twainDeviceManager' parameter is an instance of [see="WebTwainDeviceManagerJS"] class, 'errorMessage' parameter is string that describes error.
     */
    closeAsync(successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to get a list of TWAIN/SANE devices installed in the system.
     * @param successFunc A function that will be executed if request is executed successfully.<br /> Function prototype: "successFunc(twainDeviceManager, twainDevices, defaultTwainDevice)", where 'twainDeviceManager' parameter is an instance of [see="WebTwainDeviceManagerJS"] class, 'twainDevices' parameter is an array of instances of [see="WebTwainDeviceJS"] class, 'defaultTwainDevice' parameter is an instance of [see="WebTwainDeviceJS"] class.
     * @param errorFunc A function that will be executed if request is failed.<br /> Function prototype: "errorFunc(twainDeviceManager, errorMessage)", where 'twainDeviceManager' parameter is an instance of [see="WebTwainDeviceManagerJS"] class, 'errorMessage' parameter is string that describes error.
     */
    getDevicesAsync(successFunc: Function, errorFunc: Function): void;

    /**
     * Finds TWAIN/SANE device by device name.
     * @param deviceName The name of TWAIN/SANE device.
     */
    findDeviceByName(deviceName: string): object;

  }

  /**
   * Class that allows to work with automatic document feeder of TWAIN device.
   */
  class WebTwainDeviceDocumentFeederJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebTwainDeviceDocumentFeederJS"] class.
     * @param device An instance of [see="WebTwainDeviceJS"] class.
     */
    constructor(device: Vintasoft.Twain.WebTwainDeviceJS);

    // PROPERTIES

    /**
     * Gets a value that indicates whether the document feeder is enabled.
     */
    get_Enabled(): boolean;

    /**
     * Sets a value that indicates whether the document feeder is enabled.
     * @param value A value that indicates whether the document feeder is enabled.
     */
    set_Enabled(value: boolean): void;

    /**
     * Gets a value that indicates whether the document feeder can detect paper.
     */
    get_PaperDetectable(): boolean;

    /**
     * Gets a value that indicates whether the document feeder is loaded.
     */
    get_Loaded(): boolean;

    /**
     * Gets the duplex mode supported by device.
     */
    get_DuplexMode(): Vintasoft.Twain.WebDuplexModeEnumJS;

    /**
     * Gets a value that indicates whether the duplex scanning is enabled.
     */
    get_DuplexEnabled(): boolean;

    /**
     * Sets a value that indicates whether the duplex scanning is enabled.
     * @param value A value that indicates whether the duplex scanning is enabled.
     */
    set_DuplexEnabled(value: boolean): void;

    /**
     * Gets a value that indicates whether the auto feed feature is enabled.
     */
    get_AutoFeed(): boolean;

    /**
     * Sets a value that indicates whether the auto feed feature is enabled.
     * @param value A value that indicates whether the auto feed feature is enabled.
     */
    set_AutoFeed(value: boolean): void;

    // METHODS

    /**
     * Feeds the page in the document feeder.
     */
    feedPage(): void;

    /**
     * Clears the page in the document feeder.
     */
    clearPage(): void;

    /**
     * Rewinds the page in the document feeder.
     */
    rewindPage(): void;

  }

  /**
   * Class that allows to work with TWAIN/SANE device.
   */
  class WebTwainDeviceJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebTwainDeviceJS"] class.
     * @param deviceName Device name.
     * @param productFamily Device product family.
     * @param manufacturer Device manufacturer.
     * @param driverVersion Device driver version.
     * @param twainVersion Device TWAIN version.
     * @param deviceManager An instance of [see="WebTwainDeviceManagerJS"] class.
     * @param is64Bit A value indicating whether the TWAIN device is 64-bit.
     */
    constructor(deviceName: string, productFamily: string, manufacturer: string, driverVersion: string, twainVersion: string, deviceManager: Vintasoft.Twain.WebTwainDeviceManagerJS, is64Bit: boolean);

    // PROPERTIES

    /**
     * Gets a value indicating whether the device is opened.
     */
    get_IsOpened(): boolean;

    /**
     * Gets the device name.
     */
    get_DeviceName(): string;

    /**
     * Gets the device product family.
     */
    get_ProductFamily(): string;

    /**
     * Gets the device manufacturer.
     */
    get_Manufacturer(): string;

    /**
     * Gets the device name.
     */
    get_DeviceName(): string;

    /**
     * Gets the version of device driver.
     */
    get_DriverVersion(): string;

    /**
     * Gets the TWAIN version supported by device.
     */
    get_TwainVersion(): string;

    /**
     * Gets a value indicating whether device is compatible with TWAIN 2.
     */
    get_IsTwain2Compatible(): boolean;

    /**
     * Gets a value indicating whether the device is WIA device.
     */
    get_IsWIA(): boolean;

    /**
     * Gets a value indicating whether device is 64-bit.
     */
    get_Is64Bit(): boolean;

    /**
     * Gets a value indicating whether device has the automatic document feeder.
     */
    get_HasFeeder(): boolean;

    /**
     * Gets a value indicating whether device has flatbed.
     */
    get_HasFlatbed(): boolean;

    /**
     * Gets an object that allows to manipulate the document feeder of TWAIN device.
     */
    get_DocumentFeeder(): Vintasoft.Twain.WebTwainDeviceDocumentFeederJS;

    /**
     * Gets a value indicating whether the brightness should be automatically detected.
     */
    get_AutoBright(): boolean;

    /**
     * Sets a value indicating whether the brightness should be automatically detected.
     * @param value A value indicating whether the brightness should be automatically detected.
     */
    set_AutoBright(value: boolean): void;

    /**
     * Gets a value indicating whether the device should capture the number of images indicated by the value of XferCount without waiting for the Application to request the image transfers.
     */
    get_AutoScan(): boolean;

    /**
     * Sets a value indicating whether the device should capture the number of images indicated by the value of XferCount without waiting for the Application to request the image transfers.
     * @param value A value indicating whether the device should capture the number of images indicated by the value of XferCount without waiting for the Application to request the image transfers.
     */
    set_AutoScan(value: boolean): void;

    /**
     * Gets bit depth of images for current scan session.
     */
    get_BitDepth(): number;

    /**
     * Sets bit depth of images for current scan session.
     * @param value Bit depth of images for current scan session.
     */
    set_BitDepth(value: number): void;

    /**
     * Gets bit depth reduction mode of images for current scan session.
     */
    get_BitDepthReductionMode(): Vintasoft.Twain.WebBitDepthReductionModeEnumJS;

    /**
     * Sets bit depth reduction mode of images for current scan session.
     * @param value An instance of [see="WebBitDepthReductionModeEnumJS"] class.
     */
    set_BitDepthReductionMode(value: Vintasoft.Twain.WebBitDepthReductionModeEnumJS): void;

    /**
     * Gets brightness of gray/palette/color images for current scan session.
     */
    get_Brightness(): number;

    /**
     * Sets brightness of gray/palette/color images for current scan session.
     * @param value The brightness of gray/palette/color images for current scan session.
     */
    set_Brightness(value: number): void;

    /**
     * Gets count of images in the device buffer.
     */
    get_BufferedImageCount(): number;

    /**
     * Sets a value that defines how device buffers must be cleared.
     * @param value An instance of [see="WebClearBufferModeEnumJS"] class.
     */
    set_ClearBuffers(value: Vintasoft.Twain.WebClearBufferModeEnumJS): void;

    /**
     * Gets contrast of gray/palette/color images for current scan session.
     */
    get_Contrast(): number;

    /**
     * Sets contrast of gray/palette/color images for current scan session.
     * @param value The contrast of gray/palette/color images for current scan session.
     */
    set_Contrast(value: number): void;

    /**
     * Gets file format for images when File transfer mode is used.
     */
    get_FileFormat(): Vintasoft.Twain.WebTwainImageFileFormatEnumJS;

    /**
     * Sets file format for images when File transfer mode is used.
     * @param value An instance of [see="WebTwainImageFileFormatEnumJS"] class.
     */
    set_FileFormat(value: Vintasoft.Twain.WebTwainImageFileFormatEnumJS): void;

    /**
     * Gets the JPEG quality for acquired images saved as JPEG files when File transfer mode is used.
     */
    get_FileJpegQuality(): number;

    /**
     * Sets the JPEG quality for acquired images saved as JPEG files when File transfer mode is used.
     * @param value The JPEG quality for acquired images saved as JPEG files when File transfer mode is used.
     */
    set_FileJpegQuality(value: number): void;

    /**
     * Gets halftones for bit depth reduction of images for current scan session.
     */
    get_Halftones(): string;

    /**
     * Sets halftones for bit depth reduction of images for current scan session.
     * @param value The halftones for bit depth reduction of images for current scan session.
     */
    set_Halftones(value: string): void;

    /**
     * Gets image compression for images when Memory or File transfer mode is used.
     */
    get_ImageCompression(): Vintasoft.Twain.WebTwainImageCompressionEnumJS;

    /**
     * Sets image compression for images when Memory or File transfer mode is used.
     * @param value An instance of [see="WebTwainImageCompressionEnumJS"] class.
     */
    set_ImageCompression(value: Vintasoft.Twain.WebTwainImageCompressionEnumJS): void;

    /**
     * Gets image filter for current scan session.
     */
    get_ImageFilter(): Vintasoft.Twain.WebImageFilterEnumJS;

    /**
     * Sets image filter for current scan session.
     * @param value An instance of [see="WebImageFilterEnumJS"] class.
     */
    set_ImageFilter(value: Vintasoft.Twain.WebImageFilterEnumJS): void;

    /**
     * Gets a value that defines how the batch job must be processed.
     */
    get_JobControl(): Vintasoft.Twain.WebJobControlEnumJS;

    /**
     * Sets a value that defines how the batch job must be processed.
     * @param value An instance of [see="WebJobControlEnumJS"] class.
     */
    set_JobControl(value: Vintasoft.Twain.WebJobControlEnumJS): void;

    /**
     * Gets a value indicating whether the lamp of device is on.
     */
    get_LampState(): boolean;

    /**
     * Sets a value indicating whether the lamp of device is on.
     * @param value A value indicating whether the lamp of device is on.
     */
    set_LampState(value: boolean): void;

    /**
     * Gets the light path, which must be used for the image capturing.
     */
    get_LightPath(): Vintasoft.Twain.WebLightPathEnumJS;

    /**
     * Sets the light path, which must be used for the image capturing.
     * @param value An instance of [see="WebLightPathEnumJS"] class.
     */
    set_LightPath(value: Vintasoft.Twain.WebLightPathEnumJS): void;

    /**
     * Gets a value that defines general color characteristic of the light source for current scan session.
     */
    get_LightSource(): Vintasoft.Twain.WebLightSourceEnumJS;

    /**
     * Sets a value that defines general color characteristic of the light source for current scan session.
     * @param value An instance of [see="WebLightSourceEnumJS"] class.
     */
    set_LightSource(value: Vintasoft.Twain.WebLightSourceEnumJS): void;

    /**
     * Gets number of images that the device can buffer when AutoScan is enabled.
     */
    get_MaxBatchBuffers(): number;

    /**
     * Sets number of images that the device can buffer when AutoScan is enabled.
     * @param value The number of images that the device can buffer when AutoScan is enabled.
     */
    set_MaxBatchBuffers(value: number): void;

    /**
     * Gets the noise filter for current scan session.
     */
    get_NoiseFilter(): Vintasoft.Twain.WebNoiseFilterEnumJS;

    /**
     * Sets the noise filter for current scan session.
     * @param value An instance of [see="WebNoiseFilterEnumJS"] class.
     */
    set_NoiseFilter(value: Vintasoft.Twain.WebNoiseFilterEnumJS): void;

    /**
     * Gets a value indicating whether the device is powered up and available.
     */
    get_Online(): boolean;

    /**
     * Gets the page size detection mode for current scan session.
     */
    get_PageAutoSize(): Vintasoft.Twain.WebPageAutoSizeEnumJS;

    /**
     * Sets the page size detection mode for current scan session.
     * @param value An instance of [see="WebPageAutoSizeEnumJS"] class.
     */
    set_PageAutoSize(value: Vintasoft.Twain.WebPageAutoSizeEnumJS): void;

    /**
     * Gets orientation of images for current scan session.
     */
    get_PageOrientation(): Vintasoft.Twain.WebPageOrientationEnumJS;

    /**
     * Sets orientation of images for current scan session.
     * @param value An instance of [see="WebPageOrientationEnumJS"] class.
     */
    set_PageOrientation(value: Vintasoft.Twain.WebPageOrientationEnumJS): void;

    /**
     * Gets page size for current scan session.
     */
    get_PageSize(): Vintasoft.Twain.WebPageSizeEnumJS;

    /**
     * Sets page size for current scan session.
     * @param value An instance of [see="WebPageSizeEnumJS"] class.
     */
    set_PageSize(value: Vintasoft.Twain.WebPageSizeEnumJS): void;

    /**
     * Gets pixel flavor for current scan session.
     */
    get_PixelFlavor(): Vintasoft.Twain.WebPixelFlavorEnumJS;

    /**
     * Sets pixel flavor for current scan session.
     * @param value An instance of [see="WebPixelFlavorEnumJS"] class.
     */
    set_PixelFlavor(value: Vintasoft.Twain.WebPixelFlavorEnumJS): void;

    /**
     * Gets pixel type of images for current scan session.
     */
    get_PixelType(): Vintasoft.Twain.WebPixelTypeEnumJS;

    /**
     * Sets pixel type of images for current scan session.
     * @param value An instance of [see="WebPixelTypeEnumJS"] class.
     */
    set_PixelType(value: Vintasoft.Twain.WebPixelTypeEnumJS): void;

    /**
     * Gets X-axis resolution of images for current scan session.
     */
    get_XResolution(): number;

    /**
     * Sets X-axis resolution of images for current scan session.
     * @param value X-axis resolution.
     */
    set_XResolution(value: number): void;

    /**
     * Gets Y-axis resolution of images for current scan session.
     */
    get_YResolution(): number;

    /**
     * Sets Y-axis resolution of images for current scan session.
     * @param value Y-axis resolution.
     */
    set_YResolution(value: number): void;

    /**
     * Gets threshold of black-white images for current scan session.
     */
    get_Threshold(): number;

    /**
     * Sets threshold of black-white images for current scan session.
     * @param value A threshold for black-white images.
     */
    set_Threshold(value: number): void;

    /**
     * Gets transfer mode for current scan session.
     */
    get_TransferMode(): Vintasoft.Twain.WebTransferModeEnumJS;

    /**
     * Sets transfer mode for current scan session.
     * @param value An instance of [see="WebTransferModeEnumJS"] class.
     */
    set_TransferMode(value: Vintasoft.Twain.WebTransferModeEnumJS): void;

    /**
     * Gets unit of measure for current scan session.
     */
    get_UnitOfMeasure(): Vintasoft.Twain.WebUnitOfMeasureEnumJS;

    /**
     * Sets unit of measure for current scan session.
     * @param value An instance of [see="Vintasoft.Twain.WebUnitOfMeasureEnumJS"] class.
     */
    set_UnitOfMeasure(value: Vintasoft.Twain.WebUnitOfMeasureEnumJS): void;

    /**
     * Gets count of images application wants to receive from the device.
     */
    get_XferCount(): number;

    /**
     * Sets count of images application wants to receive from the device.
     * @param value Count of images application wants to receive from the device.
     */
    set_XferCount(value: number): void;

    /**
     * Gets name of scan source of SANE device.
     */
    get_SaneScanSource(): string;

    /**
     * Sets name of scan source of SANE device.
     * @param value A name of scan source of SANE device.
     */
    set_SaneScanSource(value: string): void;

    /**
     * Gets name of scan mode of SANE device.
     */
    get_SaneScanMode(): string;

    /**
     * Sets name of scan mode of SANE device.
     * @param value A name of scan mode of SANE device.
     */
    set_SaneScanMode(value: string): void;

    /**
     * Gets image resolution of SANE device.
     */
    get_SaneResolution(): number;

    /**
     * Sets image resolution of SANE device.
     * @param value Resolution.
     */
    set_SaneResolution(value: number): void;

    // METHODS

    /**
     * Opens TWAIN/SANE device.
     * @param showUI <b>True</b> - device UI must be shown; <b>false</b> - device UI must NOT be shown.
     * @param showIndicators <b>True</b> - device should show progress indicator during image scan process; <b>false</b> - device should not show progress indicator during image scan process. Default value is <b>true</b>.
     */
    open(showUI: boolean, showIndicators: boolean): void;

    /**
     * Opens TWAIN/SANE device (device will show progress indicator during image scan process).
     * @param showUI <b>True</b> - device UI must be shown; <b>false</b> - device UI must NOT be shown.
     */
    open(showUI: boolean): void;

    /**
     * Sends an asynchronous request to open TWAIN/SANE device.
     * @param showUI <b>True</b> - device UI must be shown; <b>false</b> - device UI must NOT be shown.
     * @param showIndicators <b>True</b> - device should show progress indicator during image scan process; <b>false</b> - device should not show progress indicator during image scan process. Default value is <b>true</b>.
     * @param successFunc A function that will be executed if request is executed successfully.<br /> Function prototype: "successFunc(twainDevice)", where 'twainDevice' parameter is an instance of [see="WebTwainDeviceJS"] class.
     * @param errorFunc A function that will be executed if request is failed.<br /> Function prototype: "errorFunc(twainDevice, errorMessage)", where 'twainDevice' parameter is an instance of [see="WebTwainDeviceJS"] class, 'errorMessage' parameter is string that describes error.
     */
    openAsync(showUI: boolean, showIndicators: boolean, successFunc: Function, errorFunc: Function): void;

    /**
     * Closes TWAIN/SANE device.
     */
    close(): void;

    /**
     * Sends an asynchronous request to close TWAIN/SANE device.
     * @param successFunc A function that will be executed if request is executed successfully.<br /> Function prototype: "successFunc(twainDevice)", where 'twainDevice' parameter is an instance of [see="WebTwainDeviceJS"] class.
     * @param errorFunc A function that will be executed if request is failed.<br /> Function prototype: "errorFunc(twainDevice, errorMessage)", where 'twainDevice' parameter is an instance of [see="WebTwainDeviceJS"] class, 'errorMessage' parameter is string that describes error.
     */
    closeAsync(successFunc: Function, errorFunc: Function): void;

    /**
     * Does one step of synchronous image acquisition from TWAIN/SANE device.
     * @param isProgressResponseEnabled A value indicating whether web server should send response for image acquisition progress. If undefined, <b>false</b> is used.
     */
    acquireModalSync(isProgressResponseEnabled: boolean): Vintasoft.Twain.WebTwainDeviceAcquireModalResultJS;

    /**
     * Does one step of synchronous image acquisition from TWAIN/SANE device (web server will not send response for image acquisition progress).
     */
    acquireModalSync(): Vintasoft.Twain.WebTwainDeviceAcquireModalResultJS;

    /**
     * Sends an asynchronous request to do one step of synchronous image acquisition from TWAIN/SANE device.
     * @param successFunc A function that will be executed if request is executed successfully.<br /> Function prototype: "successFunc(twainDevice, acquireModalResult)", where 'twainDevice' parameter is an instance of [see="WebTwainDeviceJS"] class, 'acquireModalResult' parameter is an instance of [see="WebTwainDeviceAcquireModalResultJS"] class.
     * @param errorFunc A function that will be executed if request is failed.<br /> Function prototype: "errorFunc(twainDevice, errorMessage)", where 'twainDevice' parameter is an instance of [see="WebTwainDeviceJS"] class, 'errorMessage' parameter is string that describes error.
     * @param isProgressResponseEnabled A value indicating whether web server should send response for image acquisition progress. Default value is True.
     */
    acquireModalAsync(successFunc: Function, errorFunc: Function, isProgressResponseEnabled: boolean): void;

    /**
     * Sends an asynchronous request to do one step of synchronous image acquisition from TWAIN/SANE device. Response for image acquisition progress is not generated.
     * @param successFunc A function that will be executed if request is executed successfully.<br /> Function prototype: "successFunc(twainDevice, acquireModalResult)", where 'twainDevice' parameter is an instance of [see="WebTwainDeviceJS"] class, 'acquireModalResult' parameter is an instance of [see="WebTwainDeviceAcquireModalResultJS"] class.
     * @param errorFunc A function that will be executed if request is failed.<br /> Function prototype: "errorFunc(twainDevice, errorMessage)", where 'twainDevice' parameter is an instance of [see="WebTwainDeviceJS"] class, 'errorMessage' parameter is string that describes error.
     */
    acquireModalAsync(successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to cancel current image scanning process.
     */
    cancelTransfer(): void;

    /**
     * Returns information about all capabilities supported by TWAIN device.
     * @param usageMode An integer value, which defines usage mode of TWAIN device capability.
     */
    getSupportedCapabilities(usageMode: number): Vintasoft.Twain.WebTwainCapabilityInfoJS[];

    /**
     * Returns information about all capabilities supported by TWAIN device.
     * @param usageMode An instance of [see="WebTwainDeviceCapabilityUsageModeEnumJS"] class.
     */
    getSupportedCapabilities(usageMode: Vintasoft.Twain.WebTwainDeviceCapabilityUsageModeEnumJS): Vintasoft.Twain.WebTwainCapabilityInfoJS[];

    /**
     * Returns information about all capabilities supported by TWAIN device. Function gets information using Get usage mode.
     */
    getSupportedCapabilities(): Vintasoft.Twain.WebTwainCapabilityInfoJS[];

    /**
     * Sends an asynchronous request to get information about all capabilities supported by TWAIN device.
     * @param usageMode An integer value, which defines usage mode of TWAIN device capability.
     * @param successFunc A function that will be executed if request is executed successfully.<br /> Function prototype: "successFunc(twainDevice, capInfos)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class, 'capInfos' parameter is an array that contains information about TWAIN device capabilities.
     * @param errorFunc A function that will be executed if request is failed.<br /> Function prototype: "errorFunc(twainDevice, errorMessage)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class, 'errorMessage' parameter is string that describes error.
     */
    getSupportedCapabilitiesAsync(usageMode: number, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to get information about all capabilities supported by TWAIN device.
     * @param usageMode An instance of [see="WebTwainDeviceCapabilityUsageModeEnumJS"] class.
     * @param successFunc A function that will be executed if request is executed successfully.<br /> Function prototype: "successFunc(twainDevice, capInfos)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class, 'capInfos' parameter is an array that contains information about TWAIN device capabilities.
     * @param errorFunc A function that will be executed if request is failed.<br /> Function prototype: "errorFunc(twainDevice, errorMessage)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class, 'errorMessage' parameter is string that describes error.
     */
    getSupportedCapabilitiesAsync(usageMode: Vintasoft.Twain.WebTwainDeviceCapabilityUsageModeEnumJS, successFunc: Function, errorFunc: Function): void;

    /**
     * Returns information about TWAIN device capability.
     * @param twainCapabilityId An integer value, which defines identifier of device capability.
     * @param usageMode An integer value, which defines usage mode of device capability.
     */
    getCapability(twainCapabilityId: number, usageMode: number): Vintasoft.Twain.WebTwainCapabilityInfoJS;

    /**
     * Returns information about TWAIN device capability.
     * @param twainCapabilityId An instance of [see="WebDeviceCapabilityIdEnumJS"] class.
     * @param usageMode An integer value, which defines usage mode of device capability.
     */
    getCapability(twainCapabilityId: Vintasoft.Twain.WebDeviceCapabilityIdEnumJS, usageMode: number): Vintasoft.Twain.WebTwainCapabilityInfoJS;

    /**
     * Returns information about TWAIN device capability.
     * @param twainCapabilityId An integer value, which defines identifier of device capability.
     * @param usageMode An instance of [see="WebTwainDeviceCapabilityUsageModeEnumJS"] class.
     */
    getCapability(twainCapabilityId: number, usageMode: Vintasoft.Twain.WebTwainDeviceCapabilityUsageModeEnumJS): Vintasoft.Twain.WebTwainCapabilityInfoJS;

    /**
     * Returns information about TWAIN device capability.
     * @param twainCapabilityId An instance of [see="WebDeviceCapabilityIdEnumJS"] class.
     * @param usageMode An instance of [see="WebTwainDeviceCapabilityUsageModeEnumJS"] class.
     */
    getCapability(twainCapabilityId: Vintasoft.Twain.WebDeviceCapabilityIdEnumJS, usageMode: Vintasoft.Twain.WebTwainDeviceCapabilityUsageModeEnumJS): Vintasoft.Twain.WebTwainCapabilityInfoJS;

    /**
     * Sends an asynchronous request to get value of TWAIN device capability.
     * @param twainCapabilityId An integer value, which defines identifier of TWAIN device capability.
     * @param usageMode An integer value, which defines usage mode of device capability.
     * @param successFunc A function that will be executed if request is executed successfully. Function prototype: "successFunc(twainDevice, capInfos)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class, 'capInfo' parameter is an array that contains information about TWAIN device capability.
     * @param errorFunc A function that will be executed if request is failed. Function prototype: "errorFunc(twainDevice, errorMessage)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class, 'errorMessage' parameter is string that describes error.
     */
    getCapabilityAsync(twainCapabilityId: number, usageMode: number, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to get value of TWAIN device capability.
     * @param twainCapabilityId An instance of WebDeviceCapabilityIdEnumJS class that defines identifier of TWAIN device capability.
     * @param usageMode An integer value, which defines usage mode of device capability.
     * @param successFunc A function that will be executed if request is executed successfully. Function prototype: "successFunc(twainDevice, capInfos)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class, 'capInfo' parameter is an array that contains information about TWAIN device capability.
     * @param errorFunc A function that will be executed if request is failed. Function prototype: "errorFunc(twainDevice, errorMessage)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class, 'errorMessage' parameter is string that describes error.
     */
    getCapabilityAsync(twainCapabilityId: Vintasoft.Twain.WebDeviceCapabilityIdEnumJS, usageMode: number, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to get value of TWAIN device capability.
     * @param twainCapabilityId An integer value, which defines identifier of device capability.
     * @param usageMode An integer value, which defines usage mode of TWAIN device capability.
     * @param successFunc A function that will be executed if request is executed successfully. Function prototype: "successFunc(twainDevice, capInfos)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class, 'capInfo' parameter is an array that contains information about TWAIN device capability.
     * @param errorFunc A function that will be executed if request is failed. Function prototype: "errorFunc(twainDevice, errorMessage)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class, 'errorMessage' parameter is string that describes error.
     */
    getCapabilityAsync(twainCapabilityId: number, usageMode: Vintasoft.Twain.WebTwainDeviceCapabilityUsageModeEnumJS, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to get value of TWAIN device capability.
     * @param twainCapabilityId An instance of WebDeviceCapabilityIdEnumJS class that defines identifier of TWAIN device capability.
     * @param usageMode An integer value, which defines usage mode of device capability.
     * @param successFunc A function that will be executed if request is executed successfully. Function prototype: "successFunc(twainDevice, capInfos)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class, 'capInfo' parameter is an array that contains information about TWAIN device capability.
     * @param errorFunc A function that will be executed if request is failed. Function prototype: "errorFunc(twainDevice, errorMessage)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class, 'errorMessage' parameter is string that describes error.
     */
    getCapabilityAsync(twainCapabilityId: Vintasoft.Twain.WebDeviceCapabilityIdEnumJS, usageMode: Vintasoft.Twain.WebTwainDeviceCapabilityUsageModeEnumJS, successFunc: Function, errorFunc: Function): void;

    /**
     * Returns information about TWAIN device capabilities.
     * @param twainCapabilityIds An array of integer values, which define identifiers of device capabilities.
     * @param usageMode An integer value, which defines usage mode of device capability.
     */
    getCapabilities(twainCapabilityIds: number[], usageMode: number): Vintasoft.Twain.WebTwainCapabilityInfoJS;

    /**
     * Returns information about TWAIN device capabilities.
     * @param twainCapabilityIds An array of integer values, which define identifiers of device capabilities.
     * @param usageMode An instance of class [see="WebTwainDeviceCapabilityUsageModeEnumJS"].
     */
    getCapabilities(twainCapabilityIds: number[], usageMode: Vintasoft.Twain.WebTwainDeviceCapabilityUsageModeEnumJS): Vintasoft.Twain.WebTwainCapabilityInfoJS;

    /**
     * Returns information about TWAIN device capabilities.
     * @param twainCapabilityIds An array of instances of [see="WebDeviceCapabilityIdEnumJS"] class.
     * @param usageMode An integer value, which defines usage mode of device capability.
     */
    getCapabilities(twainCapabilityIds: Vintasoft.Twain.WebDeviceCapabilityIdEnumJS[], usageMode: number): Vintasoft.Twain.WebTwainCapabilityInfoJS;

    /**
     * Returns information about TWAIN device capabilities.
     * @param twainCapabilityIds An array of instances of [see="WebDeviceCapabilityIdEnumJS"] class.
     * @param usageMode An instance of class [see="WebTwainDeviceCapabilityUsageModeEnumJS"].
     */
    getCapabilities(twainCapabilityIds: Vintasoft.Twain.WebDeviceCapabilityIdEnumJS[], usageMode: Vintasoft.Twain.WebTwainDeviceCapabilityUsageModeEnumJS): Vintasoft.Twain.WebTwainCapabilityInfoJS;

    /**
     * Returns information about TWAIN device capabilities. Function gets information about capabilities using Get usage mode.
     * @param twainCapabilityIds An array of integer values, which define identifiers of device capabilities.
     */
    getCapabilities(twainCapabilityIds: number[]): Vintasoft.Twain.WebTwainCapabilityInfoJS;

    /**
     * Returns information about TWAIN device capabilities. Function gets information about capabilities using Get usage mode.
     * @param twainCapabilityIds An array of instances of [see="WebDeviceCapabilityIdEnumJS"] class.
     */
    getCapabilities(twainCapabilityIds: Vintasoft.Twain.WebDeviceCapabilityIdEnumJS[]): Vintasoft.Twain.WebTwainCapabilityInfoJS;

    /**
     * Sends an asynchronous request to get values of TWAIN device capabilities.
     * @param twainCapabilityIds An array of integer values, which define identifiers of TWAIN device capabilities.
     * @param usageMode An integer value, which defines usage mode of TWAIN device capability.
     * @param successFunc A function that will be executed if request is executed successfully. Function prototype: "successFunc(twainDevice, capInfos)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class, 'capInfos' parameter is an array that contains information about TWAIN device capabilities.
     * @param errorFunc A function that will be executed if request is failed. Function prototype: "errorFunc(twainDevice, errorMessage)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class, 'errorMessage' parameter is string that describes error.
     */
    getCapabilitiesAsync(twainCapabilityIds: number[], usageMode: number, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to get values of TWAIN device capabilities.
     * @param twainCapabilityIds An array of instances of WebDeviceCapabilityIdEnumJS class, which define identifiers of TWAIN device capabilities.
     * @param usageMode An integer value, which defines usage mode of TWAIN device capability.
     * @param successFunc A function that will be executed if request is executed successfully. Function prototype: "successFunc(twainDevice, capInfos)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class, 'capInfos' parameter is an array that contains information about TWAIN device capabilities.
     * @param errorFunc A function that will be executed if request is failed. Function prototype: "errorFunc(twainDevice, errorMessage)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class, 'errorMessage' parameter is string that describes error.
     */
    getCapabilitiesAsync(twainCapabilityIds: Vintasoft.Twain.WebDeviceCapabilityIdEnumJS[], usageMode: number, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to get values of TWAIN device capabilities.
     * @param twainCapabilityIds An array of integer values, which define identifiers of TWAIN device capabilities.
     * @param usageMode An integer value, which defines usage mode of TWAIN device capability.
     * @param successFunc A function that will be executed if request is executed successfully. Function prototype: "successFunc(twainDevice, capInfos)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class, 'capInfos' parameter is an array that contains information about TWAIN device capabilities.
     * @param errorFunc A function that will be executed if request is failed. Function prototype: "errorFunc(twainDevice, errorMessage)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class, 'errorMessage' parameter is string that describes error.
     */
    getCapabilitiesAsync(twainCapabilityIds: number[], usageMode: Vintasoft.Twain.WebTwainDeviceCapabilityUsageModeEnumJS, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to get values of TWAIN device capabilities.
     * @param twainCapabilityIds An array of instances of WebDeviceCapabilityIdEnumJS class, which define identifiers of TWAIN device capabilities.
     * @param usageMode An integer value, which defines usage mode of TWAIN device capability.
     * @param successFunc A function that will be executed if request is executed successfully. Function prototype: "successFunc(twainDevice, capInfos)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class, 'capInfos' parameter is an array that contains information about TWAIN device capabilities.
     * @param errorFunc A function that will be executed if request is failed. Function prototype: "errorFunc(twainDevice, errorMessage)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class, 'errorMessage' parameter is string that describes error.
     */
    getCapabilitiesAsync(twainCapabilityIds: Vintasoft.Twain.WebDeviceCapabilityIdEnumJS[], usageMode: Vintasoft.Twain.WebTwainDeviceCapabilityUsageModeEnumJS, successFunc: Function, errorFunc: Function): void;

    /**
     * Sets value of TWAIN device capability.
     * @param twainCapabilityId An identifier of TWAIN device capability as a number.
     * @param twainCapabilityValue A string that represents value that should be set to the TWAIN device capability.
     */
    setCapability(twainCapabilityId: number, twainCapabilityValue: string): Vintasoft.Twain.WebTwainCapabilityInfoJS;

    /**
     * Sets value of TWAIN device capability.
     * @param twainCapabilityId An identifier of TWAIN device capability as an instance of WebDeviceCapabilityIdEnumJS class.
     * @param twainCapabilityValue A string that represents value that should be set to the TWAIN device capability.
     */
    setCapability(twainCapabilityId: Vintasoft.Twain.WebDeviceCapabilityIdEnumJS, twainCapabilityValue: string): Vintasoft.Twain.WebTwainCapabilityInfoJS;

    /**
     * Sends an asynchronous request to set value of TWAIN device capability.
     * @param twainCapabilityId An identifier of TWAIN device capability as a number.
     * @param twainCapabilityValue A string that represents value that should be set to the TWAIN device capability.
     * @param successFunc A function that will be executed if request is executed successfully. Function prototype: "successFunc(twainDevice, capInfo)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class, 'capInfo' parameter is object that contains information about TWAIN device capabilities.
     * @param errorFunc A function that will be executed if request is failed. Function prototype: "errorFunc(twainDevice, errorMessage)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class, 'errorMessage' parameter is string that describes error.
     */
    setCapabilityAsync(twainCapabilityId: number, twainCapabilityValue: string, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to set value of TWAIN device capability.
     * @param twainCapabilityId An identifier of TWAIN device capability as an instance of WebDeviceCapabilityIdEnumJS class.
     * @param twainCapabilityValue A string that represents value that should be set to the TWAIN device capability.
     * @param successFunc A function that will be executed if request is executed successfully. Function prototype: "successFunc(twainDevice, capInfo)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class, 'capInfo' parameter is object that contains information about TWAIN device capabilities.
     * @param errorFunc A function that will be executed if request is failed. Function prototype: "errorFunc(twainDevice, errorMessage)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class, 'errorMessage' parameter is string that describes error.
     */
    setCapabilityAsync(twainCapabilityId: Vintasoft.Twain.WebDeviceCapabilityIdEnumJS, twainCapabilityValue: string, successFunc: Function, errorFunc: Function): void;

    /**
     * Sets values of TWAIN device capabilities.
     * @param twainCapabilitiesInfo An array that contains information about capabilities, which must be set. Each element of array must contain 2 fields: field "capabilityId" and field "capabilityValue". Field "capabilityId" must contain name of TWAIN device capability (list of available names can be get from WebDeviceCapabilityIdEnumJS enumeration). Field "capabilityValue" must contain value of TWAIN device capability.
     */
    setCapabilities(twainCapabilitiesInfo: object[]): object[];

    /**
     * Sends an asynchronous request to set values of TWAIN device capabilities.
     * @param twainCapabilitiesInfo An array that contains information about capabilities, which must be set. Each element of array must contain 2 fields: field "capabilityId" and field "capabilityValue". Field "capabilityId" must contain name of TWAIN device capability (list of available names can be get from WebDeviceCapabilityIdEnumJS enumeration). Field "capabilityValue" must contain value of TWAIN device capability.
     * @param successFunc A function that will be executed if request is executed successfully. Function prototype: "successFunc(twainDevice, setCapResults)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class, 'setCapResults' parameter is an array with results of operations, which set values of TWAIN device capabilities.
     * @param errorFunc A function that will be executed if request is failed. Function prototype: "errorFunc(twainDevice, errorMessage)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class, 'errorMessage' parameter is string that describes error.
     */
    setCapabilitiesAsync(twainCapabilitiesInfo: object[], successFunc: Function, errorFunc: Function): void;

    /**
     * Returns supported bit depths.
     */
    getSupportedBitDepths(): number[];

    /**
     * Returns supported brightness values.
     */
    getSupportedBrightnesValues(): Vintasoft.Twain.WebTwainCapabilitySupportedValuesJS;

    /**
     * Returns supported contrast values.
     */
    getSupportedContrastValues(): Vintasoft.Twain.WebTwainCapabilitySupportedValuesJS;

    /**
     * Returns supported file formats.
     */
    getSupportedFileFormats(): Vintasoft.Twain.WebTwainImageFileFormatEnumJS[];

    /**
     * Returns supported image compressions.
     */
    getSupportedImageCompressions(): Vintasoft.Twain.WebTwainImageCompressionEnumJS[];

    /**
     * Returns supported image filters.
     */
    getSupportedImageFilters(): Vintasoft.Twain.WebImageFilterEnumJS[];

    /**
     * Returns supported page orientations.
     */
    getSupportedPageOrientations(): Vintasoft.Twain.WebPageOrientationEnumJS[];

    /**
     * Returns supported page sizes.
     */
    getSupportedPageSizes(): Vintasoft.Twain.WebPageSizeEnumJS[];

    /**
     * Returns supported pixel flavors.
     */
    getSupportedPixelFlavors(): Vintasoft.Twain.WebPixelFlavorEnumJS[];

    /**
     * Returns supported pixel types.
     */
    getSupportedPixelTypes(): Vintasoft.Twain.WebPixelTypeEnumJS[];

    /**
     * Returns supported X-axis resolution for images.
     */
    getSupportedXResolutions(): Vintasoft.Twain.WebTwainCapabilitySupportedValuesJS;

    /**
     * Returns supported Y-axis resolution for images.
     */
    getSupportedYResolutions(): Vintasoft.Twain.WebTwainCapabilitySupportedValuesJS;

    /**
     * Returns supported transfer modes.
     */
    getSupportedTransferModes(): Vintasoft.Twain.WebTransferModeEnumJS[];

    /**
     * Returns supported units of measure.
     */
    getSupportedUnitOfMeasures(): Vintasoft.Twain.WebUnitOfMeasureEnumJS[];

    /**
     * Returns supported scan sources of opened SANE device.
     */
    getSupportedSaneScanSources(): string[];

    /**
     * Returns supported scan modes of opened SANE device.
     */
    getSupportedSaneScanModes(): string[];

    /**
     * Returns supported scan resolutions of opened SANE device.
     */
    getSupportedSaneResolutions(): number[];

    /**
     * Returns information about the default image layout rectangle of TWAIN/SANE device.
     */
    getDefaultImageLayout(): Vintasoft.Twain.WebTwainImageLayoutJS;

    /**
     * Sends an asynchronous request to get information about the default image layout rectangle of TWAIN/SANE device.
     * @param successFunc A function that will be executed if request is executed successfully. Function prototype: "successFunc(twainDevice, imageLayout)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class, 'imageLayout' parameter is an object that contains information about the default image layout rectangle of TWAIN device.
     * @param errorFunc A function that will be executed if request is failed. Function prototype: "errorFunc(twainDevice, errorMessage)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class, 'errorMessage' parameter is string that describes error.
     */
    getDefaultImageLayoutAsync(successFunc: Function, errorFunc: Function): void;

    /**
     * Returns information about the current image layout rectangle of TWAIN/SANE device.
     */
    getImageLayout(): Vintasoft.Twain.WebTwainImageLayoutJS;

    /**
     * Sends an asynchronous request to get information about the current image layout rectangle of TWAIN/SANE device.
     * @param successFunc A function that will be executed if request is executed successfully. Function prototype: "successFunc(twainDevice, imageLayout)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class, 'imageLayout' parameter is an object that contains information about current image layout rectangle of TWAIN device.
     * @param errorFunc A function that will be executed if request is failed. Function prototype: "errorFunc(twainDevice, errorMessage)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class, 'errorMessage' parameter is string that describes error.
     */
    getImageLayoutAsync(successFunc: Function, errorFunc: Function): void;

    /**
     * Resets the image layout rectangle of TWAIN/SANE device.
     */
    resetImageLayout(): void;

    /**
     * Sends an asynchronous request to reset the image layout rectangle of TWAIN/SANE device.
     * @param successFunc A function that will be executed if request is executed successfully. Function prototype: "successFunc(twainDevice)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class.
     * @param errorFunc A function that will be executed if request is failed. Function prototype: "errorFunc(twainDevice, errorMessage)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class, 'errorMessage' parameter is string that describes error.
     */
    resetImageLayoutAsync(successFunc: Function, errorFunc: Function): void;

    /**
     * Sets the image layout rectangle of TWAIN/SANE device.
     * @param x X-coordinate of image layout rectangle.
     * @param y Y-coordinate of image layout rectangle.
     * @param width Width of image layout rectangle.
     * @param height Height of image layout rectangle.
     */
    setImageLayout(x: number, y: number, width: number, height: number): void;

    /**
     * Sends an asynchronous request to set the image layout rectangle of TWAIN/SANE device.
     * @param x X-coordinate of image layout rectangle.
     * @param y Y-coordinate of image layout rectangle.
     * @param width Width of image layout rectangle.
     * @param height Height of image layout rectangle.
     * @param successFunc A function that will be executed if request is executed successfully. Function prototype: "successFunc(twainDevice)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class.
     * @param errorFunc A function that will be executed if request is failed. Function prototype: "errorFunc(twainDevice, errorMessage)", where 'twainDevice' parameter is an instance of WebTwainDeviceJS class, 'errorMessage' parameter is string that describes error.
     */
    setImageLayoutAsync(x: number, y: number, width: number, height: number, successFunc: Function, errorFunc: Function): void;

  }

  /**
   * Contains information about execution result of WebTwainDeviceJS.acquireModalSync() function.
   */
  class WebTwainDeviceAcquireModalResultJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebTwainDeviceAcquireModalResultJS"] class.
     * @param acquireModalState An instance of [see="WebAcquireModalStateEnumJS"] class.
     * @param imageAcquiringProgressValue The progress, in percents, of synchronous image acquisition process if acquireModalState == WebAcquireModalStateEnumJS.ImageAcquiringProgress and TransferMode == WebTransferModeEnumJS.Memory.
     * @param acquiredImage An instance of [see="WebAcquiredImageJS"] class if acquireModalState == WebAcquireModalStateEnumJS.ImageAcquired.
     * @param errorMessage A string that describes an error if acquireModalState == WebAcquireModalStateEnumJS.ScanFailed.
     */
    constructor(acquireModalState: Vintasoft.Twain.WebAcquireModalStateEnumJS, imageAcquiringProgressValue: number, acquiredImage: Vintasoft.Twain.WebAcquiredImageJS, errorMessage: string);

    // PROPERTIES

    /**
     * Gets a state of image acquisition process.
     */
    get_AcquireModalState(): Vintasoft.Twain.WebAcquireModalStateEnumJS;

    /**
     * Gets the progress, in percents, of synchronous image acquisition process if acquireModalState == WebAcquireModalStateEnumJS.ImageAcquiringProgress and TransferMode == WebTransferModeEnumJS.Memory.
     */
    get_ImageAcquiringProgressValue(): number;

    /**
     * Gets current noise value in image if <i>acquireModalState</i> == WebAcquireModalStateEnumJS.ImageAcquired.
     */
    get_AcquiredImage(): Vintasoft.Twain.WebAcquiredImageJS;

    /**
     * Gets a string that describes an error, which occurs during image scanning, if <i>acquireModalState</i> == WebAcquireModalStateEnumJS.ScanFailed.
     */
    get_ErrorMessage(): string;

  }

  /**
   * Represents an image acquired from TWAIN device.
   */
  class WebAcquiredImageJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebAcquiredImageJS"] class.
     * @param twainDeviceManager An instance of [see="WebTwainDeviceManagerJS"] class.
     * @param imageId An image identifier in local Vintasoft Web TWAIN service.
     * @param imageInfo An object with information about image.
     */
    constructor(twainDeviceManager: Vintasoft.Twain.WebTwainDeviceManagerJS, imageId: string, imageInfo: object);

    /**
     * Initializes a new instance of the [see= "WebAcquiredImageJS"] class.
     * @param twainDeviceManager An instance of [see="WebTwainDeviceManagerJS"] class.
     * @param imageId An image identifier in local Vintasoft Web TWAIN service.
     */
    constructor(twainDeviceManager: Vintasoft.Twain.WebTwainDeviceManagerJS, imageId: string);

    // PROPERTIES

    /**
     * Gets an image identifier.
     */
    get_Id(): string;

    /**
     * Gets an image width in pixels.
     */
    get_Width(): number;

    /**
     * Gets an image height in pixels.
     */
    get_Height(): number;

    /**
     * Gets an image pixel type.
     */
    get_PixelType(): Vintasoft.Twain.WebPixelTypeEnumJS;

    /**
     * Gets an image bit count.
     */
    get_BitCount(): number;

    /**
     * Gets an image samples per pixel.
     */
    get_SamplesPerPixel(): number;

    /**
     * Gets a horizontal resolution of image.
     */
    get_XResolution(): number;

    /**
     * Gets a vertical resolution of image.
     */
    get_YResolution(): number;

    /**
     * Gets a compression of image data.
     */
    get_Compression(): Vintasoft.Twain.WebTwainImageCompressionEnumJS;

    // METHODS

    /**
     * Returns image as a base64-string.
     */
    getAsBase64String(): string;

    /**
     * Sends an asynchronous request to get an image as a base64-string.
     * @param successFunc A function that will be executed if request is executed successfully. Function prototype: "successFunc(image, imageAsBase64String)", where 'image' parameter is an instance of WebAcquiredImageJS class, 'imageAsBase64String' parameter is base64-string.
     * @param errorFunc A function that will be executed if request is failed. Function prototype: "errorFunc(image, errorMessage)", where 'image' parameter is an instance of WebAcquiredImageJS class, 'errorMessage' parameter is string that describes error.
     */
    getAsBase64StringAsync(successFunc: Function, errorFunc: Function): string;

    /**
     * Returns a value indicating whether an image is blank.
     * @param maxNoiseLevel Maximum possible value of noise in image in percents. Optimal value is 0.01 (%).
     */
    isBlank(maxNoiseLevel: number): Vintasoft.Twain.WebAcquiredImageIsBlankResultJS;

    /**
     * Sends an asynchronous request to check whether an image is blank.
     * @param maxNoiseLevel Maximum possible value of noise in image in percents. Optimal value is 0.01 (%).
     * @param successFunc A function that will be executed if request is executed successfully. Function prototype: "successFunc(image, isBlankResult)", where 'image' parameter is an instance of WebAcquiredImageJS class, 'isBlankResult' parameter is an instance of WebAcquiredImageIsBlankResultJS class.
     * @param errorFunc A function that will be executed if request is failed. Function prototype: "errorFunc(image, errorMessage)", where 'image' parameter is an instance of WebAcquiredImageJS class, 'errorMessage' parameter is string that describes error.
     */
    isBlankAsync(maxNoiseLevel: number, successFunc: Function, errorFunc: Function): Vintasoft.Twain.WebAcquiredImageIsBlankResultJS;

    /**
     * Inverts an image.
     */
    invert(): void;

    /**
     * Sends an asynchronous request to invert an image.
     * @param successFunc A function that will be executed if request is executed successfully. Function prototype: "successFunc(image)", where 'image' parameter is an instance of WebAcquiredImageJS class.
     * @param errorFunc A function that will be executed if request is failed. Function prototype: "errorFunc(image, errorMessage)", where 'image' parameter is an instance of WebAcquiredImageJS class, 'errorMessage' parameter is string that describes error.
     */
    invertAsync(successFunc: Function, errorFunc: Function): Vintasoft.Twain.WebAcquiredImageIsBlankResultJS;

    /**
     * Changes brightness of image.
     * @param brightnessValue The brightness value in percents. Valid values are from -100 to 100. Default value is 0. Brightness is not changed if value of this property is set to 0.
     */
    changeBrightness(brightnessValue: number): void;

    /**
     * Sends an asynchronous request to change brightness of image.
     * @param brightnessValue The brightness value in percents. Valid values are from -100 to 100. Default value is 0. Brightness is not changed if value of this property is set to 0.
     * @param successFunc A function that will be executed if request is executed successfully. Function prototype: "successFunc(image)", where 'image' parameter is an instance of WebAcquiredImageJS class.
     * @param errorFunc A function that will be executed if request is failed. Function prototype: "errorFunc(image, errorMessage)", where 'image' parameter is an instance of WebAcquiredImageJS class, 'errorMessage' parameter is string that describes error.
     */
    changeBrightnessAsync(brightnessValue: number, successFunc: Function, errorFunc: Function): void;

    /**
     * Changes contrast of image.
     * @param contrastValue The contrast value in percents. Valid values are from -100 to 100. Default value is 0. Contrast is not changed if value of this property is set to 0.
     */
    changeContrast(contrastValue: number): void;

    /**
     * Sends an asynchronous request to change contrast of image.
     * @param contrastValue The contrast value in percents. Valid values are from -100 to 100. Default value is 0. Contrast is not changed if value of this property is set to 0.
     * @param successFunc A function that will be executed if request is executed successfully. Function prototype: "successFunc(image)", where 'image' parameter is an instance of WebAcquiredImageJS class.
     * @param errorFunc A function that will be executed if request is failed. Function prototype: "errorFunc(image, errorMessage)", where 'image' parameter is an instance of WebAcquiredImageJS class, 'errorMessage' parameter is string that describes error.
     */
    changeContrastAsync(contrastValue: number, successFunc: Function, errorFunc: Function): void;

    /**
     * Crops an image.
     * @param x X-coordinate, in pixels, of the upper-left corner of the crop rectangle.
     * @param y Y-coordinate, in pixels, of the upper-left corner of the crop rectangle.
     * @param width Width, in pixels, of the crop rectangle.
     * @param height Height, in pixels, of the crop rectangle.
     */
    crop(x: number, y: number, width: number, height: number): void;

    /**
     * Sends an asynchronous request to crop an image.
     * @param x X-coordinate, in pixels, of the upper-left corner of the crop rectangle.
     * @param y Y-coordinate, in pixels, of the upper-left corner of the crop rectangle.
     * @param width Width, in pixels, of the crop rectangle.
     * @param height Height, in pixels, of the crop rectangle.
     * @param successFunc A function that will be executed if request is executed successfully. Function prototype: "successFunc(image)", where 'image' parameter is an instance of WebAcquiredImageJS class.
     * @param errorFunc A function that will be executed if request is failed. Function prototype: "errorFunc(image, errorMessage)", where 'image' parameter is an instance of WebAcquiredImageJS class, 'errorMessage' parameter is string that describes error.
     */
    cropAsync(x: number, y: number, width: number, height: number, successFunc: Function, errorFunc: Function): void;

    /**
     * Resizes canvas of image.
     * @param canvasWidth Width, in pixels, of the image canvas.
     * @param canvasHeight Height, in pixels, of the image canvas.
     * @param canvasColor Color of the image canvas. Possible values: 0-AutoDetect, 1-Black, 2-White.
     * @param imageXPosition X position, in pixels, of the original image within new image.
     * @param imageYPosition Y position, in pixels, of the original image within new image.
     */
    resizeCanvas(canvasWidth: number, canvasHeight: number, canvasColor: number, imageXPosition: number, imageYPosition: number): void;

    /**
     * Sends an asynchronous request to resize canvas of image.
     * @param canvasWidth Width, in pixels, of the image canvas.
     * @param canvasHeight Height, in pixels, of the image canvas.
     * @param canvasColor Color of the image canvas. Possible values: 0-AutoDetect, 1-Black, 2-White.
     * @param imageXPosition X position, in pixels, of the original image within new image.
     * @param imageYPosition Y position, in pixels, of the original image within new image.
     * @param successFunc A function that will be executed if request is executed successfully. Function prototype: "successFunc(image)", where 'image' parameter is an instance of WebAcquiredImageJS class.
     * @param errorFunc A function that will be executed if request is failed. Function prototype: "errorFunc(image, errorMessage)", where 'image' parameter is an instance of WebAcquiredImageJS class, 'errorMessage' parameter is string that describes error.
     */
    resizeCanvasAsync(canvasWidth: number, canvasHeight: number, canvasColor: number, imageXPosition: number, imageYPosition: number, successFunc: Function, errorFunc: Function): void;

    /**
     * Rotates an image.
     * @param angle Rotation angle in degrees.
     * @param borderColor The type of the border color. Possible values: 0-AutoDetect, 1-Black, 2-White. If undefined, AutoDetect value is used.
     */
    rotate(angle: number, borderColor: number): void;

    /**
     * Rotates an image with automatic detection of border color.
     * @param angle Rotation angle in degrees.
     */
    rotate(angle: number): void;

    /**
     * Sends an asynchronous request to rotate an image.
     * @param angle Rotation angle in degrees.
     * @param borderColor The type of the border color. Possible values: 0-AutoDetect, 1-Black, 2-White. If undefined, AutoDetect value is used.
     * @param successFunc A function that will be executed if request is executed successfully. Function prototype: "successFunc(image)", where 'image' parameter is an instance of WebAcquiredImageJS class.
     * @param errorFunc A function that will be executed if request is failed. Function prototype: "errorFunc(image, errorMessage)", where 'image' parameter is an instance of WebAcquiredImageJS class, 'errorMessage' parameter is string that describes error.
     */
    rotateAsync(angle: number, borderColor: number, successFunc: Function, errorFunc: Function): void;

    /**
     * Despeckles an image.
     * @param level1 Maximum quantity of pixels in small noise. Possible values: 0 - 100. Default value is 8.
     * @param level2 Maximum quantity of pixels in medium noise. Possible values: 0 - 100. Default value is 25.
     * @param radius Radius of area around medium noise in which there are no "good objects". Possible values: 0 - 100. Default value is 30.
     * @param level3 Maximum quantity of pixels in "border" noise. Possible values: 0 - 3000. Default value is 400.
     */
    despeckle(level1: number, level2: number, radius: number, level3: number): void;

    /**
     * Sends an asynchronous request to despeckle an image.
     * @param level1 Maximum quantity of pixels in small noise. Possible values: 0 - 100. Default value is 8.
     * @param level2 Maximum quantity of pixels in medium noise. Possible values: 0 - 100. Default value is 25.
     * @param radius Radius of area around medium noise in which there are no "good objects". Possible values: 0 - 100. Default value is 30.
     * @param level3 Maximum quantity of pixels in "border" noise. Possible values: 0 - 3000. Default value is 400.
     * @param successFunc A function that will be executed if request is executed successfully. Function prototype: "successFunc(image)", where 'image' parameter is an instance of WebAcquiredImageJS class.
     * @param errorFunc A function that will be executed if request is failed. Function prototype: "errorFunc(image, errorMessage)", where 'image' parameter is an instance of WebAcquiredImageJS class, 'errorMessage' parameter is string that describes error.
     */
    despeckleAsync(level1: number, level2: number, radius: number, level3: number, successFunc: Function, errorFunc: Function): void;

    /**
     * Deskews an image.
     * @param borderColor The type of the border color. Possible values: 0-AutoDetect, 1-Black, 2-White.
     * @param scanIntervalX The horizontal scan interval.
     * @param scanIntervalY The vertical scan interval.
     */
    deskew(borderColor: number, scanIntervalX: number, scanIntervalY: number): void;

    /**
     * Sends an asynchronous request to deskew an image.
     * @param borderColor The type of the border color. Possible values: 0-AutoDetect, 1-Black, 2-White.
     * @param scanIntervalX The horizontal scan interval.
     * @param scanIntervalY The vertical scan interval.
     * @param successFunc A function that will be executed if request is executed successfully. Function prototype: "successFunc(image)", where 'image' parameter is an instance of WebAcquiredImageJS class.
     * @param errorFunc A function that will be executed if request is failed. Function prototype: "errorFunc(image, errorMessage)", where 'image' parameter is an instance of WebAcquiredImageJS class, 'errorMessage' parameter is string that describes error.
     */
    deskewAsync(borderColor: number, scanIntervalX: number, scanIntervalY: number, successFunc: Function, errorFunc: Function): void;

    /**
     * Detects border of image.
     * @param borderSize Size of border around the image. Possible values: 0 - 100. Default value is 5.
     */
    detectBorder(borderSize: number): void;

    /**
     * Sends an asynchronous request to detect border of image.
     * @param borderSize Size of border around the image. Possible values: 0 - 100. Default value is 5.
     * @param successFunc A function that will be executed if request is executed successfully. Function prototype: "successFunc(image)", where 'image' parameter is an instance of WebAcquiredImageJS class.
     * @param errorFunc A function that will be executed if request is failed. Function prototype: "errorFunc(image, errorMessage)", where 'image' parameter is an instance of WebAcquiredImageJS class, 'errorMessage' parameter is string that describes error.
     */
    detectBorderAsync(borderSize: number, successFunc: Function, errorFunc: Function): void;

  }

  /**
   * Contains information about execution result of WebAcquiredImageJS.isBlank() function.
   */
  class WebAcquiredImageIsBlankResultJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebAcquiredImageIsBlankResultJS"] class.
     * @param isBlank A value indicating whether the image is blank.
     * @param noiseLevel Current noise value in image.
     */
    constructor(isBlank: boolean, noiseLevel: number);

    // PROPERTIES

    /**
     * Gets a value indicating whether the image is blank.
     */
    get_IsBlank(): boolean;

    /**
     * Gets current noise value in image.
     */
    get_NoiseLevel(): number;

  }

  /**
   * Represents a collection of instances of [see="WebAcquiredImageJS"] class.
   */
  class WebAcquiredImageCollectionJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebAcquiredImageCollectionJS"] class.
     * @param twainDeviceManager An instance of [see="WebTwainDeviceManagerJS"] class.
     */
    constructor(twainDeviceManager: Vintasoft.Twain.WebTwainDeviceManagerJS);

    // PROPERTIES

    /**
     * Gets count of images in image collection.
     */
    get_Count(): number;

    /**
     * Gets settings of TIFF encoder.
     */
    get_TiffEncoderSettings(): object;

    // METHODS

    /**
     * Returns an image in image collection.
     * @param index A zero-based index of image in image collection.
     */
    getItem(index: number): Vintasoft.Twain.WebAcquiredImageJS;

    /**
     * Adds image to the image collection.
     * @param image An instance of [see="WebAcquiredImageJS"] class.
     */
    add(image: Vintasoft.Twain.WebAcquiredImageJS): void;

    /**
     * Removes image from image collection.
     * @param index A zero-based index of image in image collection.
     */
    removeAt(index: number): Vintasoft.Twain.WebAcquiredImageJS;

    /**
     * Sends an asynchronous request to remove image from image collection.
     * @param index A zero-based index of image in image collection.
     * @param successFunc A function that will be executed if request is executed successfully. Function prototype: "successFunc(imageCollection, image)", where 'imageCollection' parameter is an instance of WebAcquiredImageCollectionJS class, 'image' parameter is removed instance of WebAcquiredImageJS class.
     * @param errorFunc A function that will be executed if request is failed. Function prototype: "errorFunc(imageCollection, errorMessage)", where 'imageCollection' parameter is an instance of WebAcquiredImageJS class, 'errorMessage' parameter is string that describes error.
     */
    removeAtAsync(index: number, successFunc: Function, errorFunc: Function): Vintasoft.Twain.WebAcquiredImageJS;

    /**
     * Removes image from image collection.
     * @param image An instance of [see="WebAcquiredImageJS"] class, which should be removed from this collection.
     */
    remove(image: Vintasoft.Twain.WebAcquiredImageJS): Vintasoft.Twain.WebAcquiredImageJS;

    /**
     * Sends an asynchronous request to remove image from image collection.
     * @param image An instance of [see="WebAcquiredImageJS"] class, which should be removed from this collection.
     * @param successFunc A function that will be executed if request is executed successfully. Function prototype: "successFunc(imageCollection, image)", where 'imageCollection' parameter is an instance of WebAcquiredImageCollectionJS class, 'image' parameter is removed instance of WebAcquiredImageJS class.
     * @param errorFunc A function that will be executed if request is failed. Function prototype: "errorFunc(imageCollection, errorMessage)", where 'imageCollection' parameter is an instance of WebAcquiredImageJS class, 'errorMessage' parameter is string that describes error.
     */
    removeAsync(image: Vintasoft.Twain.WebAcquiredImageJS, successFunc: Function, errorFunc: Function): Vintasoft.Twain.WebAcquiredImageJS;

    /**
     * Clears this image collection.
     */
    clear(): void;

    /**
     * Sends an asynchronous request to clear this image collection.
     * @param successFunc A function that will be executed if request is executed successfully. Function prototype: "successFunc(imageCollection)", where 'imageCollection' parameter is an instance of WebAcquiredImageCollectionJS class.
     * @param errorFunc A function that will be executed if request is failed. Function prototype: "errorFunc(imageCollection, errorMessage)", where 'imageCollection' parameter is an instance of WebAcquiredImageJS class, 'errorMessage' parameter is string that describes error.
     */
    clearAsync(successFunc: Function, errorFunc: Function): void;

    /**
     * Saves images from this image collection to a local file.
     * @param filePath A path to a local file.
     * @param createNewFile A value indicating whether new file must be created.
     * @param imageIds An array of strings, which define identifiers of images, which must be saved.
     */
    saveImages(filePath: string, createNewFile: boolean, imageIds: string[]): void;

    /**
     * Sends an asynchronous request to save images from this image collection to a local file.
     * @param filePath A path to a local file.
     * @param createNewFile A value indicating whether new file must be created.
     * @param imageIds An array of strings, which define identifiers of images, which must be saved.
     * @param successFunc A function that will be executed if request is executed successfully. Function prototype: "successFunc(imageCollection, filePath, createNewFile, imageIds)", where 'imageCollection' parameter is an instance of WebAcquiredImageCollectionJS class, 'filePath' parameter is path to the created image file, 'createNewFile' parameter is boolean value indicating whether new file is created, 'imageIds' parameter is array of image identifiers.
     * @param errorFunc A function that will be executed if request is failed. Function prototype: "errorFunc(imageCollection, errorMessage)", where 'imageCollection' parameter is an instance of WebAcquiredImageJS class, 'errorMessage' parameter is string that describes error.
     */
    saveImagesAsync(filePath: string, createNewFile: boolean, imageIds: string[], successFunc: Function, errorFunc: Function): void;

    /**
     * Saves images from this image collection to an image file and returns file data as a Base64 string.
     * @param fileName A name of image file, which should be created.
     * @param imageIds An array of strings, which define identifiers of images.
     */
    getAsBase64String(fileName: string, imageIds: string[]): string;

    /**
     * Sends an asynchronous request to save images from this image collection to an image file and return file data as a Base64 string.
     * @param fileName A name of image file, which should be created.
     * @param imageIds An array of strings, which define identifiers of images.
     * @param successFunc A function that will be executed if request is executed successfully. Function prototype: "successFunc(imageCollection, fileName, imageIds, data.imageFileAsBase64String)", where 'imageCollection' parameter is an instance of WebAcquiredImageCollectionJS class, 'fileName' parameter is name of created image file, 'imageIds' parameter is array of image identifiers, 'imageFileAsBase64String' parameter is file data as a base64-string string.
     * @param errorFunc A function that will be executed if request is failed. Function prototype: "errorFunc(imageCollection, errorMessage)", where 'imageCollection' parameter is an instance of WebAcquiredImageJS class, 'errorMessage' parameter is string that describes error.
     */
    getAsBase64StringAsync(fileName: string, imageIds: string[], successFunc: Function, errorFunc: Function): void;

  }

  /**
   * Contains web settings for TIFF encoder.
   */
  class WebTwainTiffEncoderSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebTwainTiffEncoderSettingsJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the quality of JPEG images.
     */
    get_JpegQuality(): number;

    /**
     * Sets the quality of JPEG images.
     * @param value The quality of JPEG images. Default value is 90. Possible values from 10 to 100.
     */
    set_JpegQuality(value: number): void;

    /**
     * Gets the rows per strip.
     */
    get_RowsPerStrip(): number;

    /**
     * Sets the rows per strip.
     * @param value The rows per strip. 0 - rows per strip will be calculated automatically and in most cases will be set to the image height. Default value is 0.
     */
    set_RowsPerStrip(value: number): void;

    /**
     * Gets a value indicating whether image must be encoded using tiles.
     */
    get_UseTiles(): boolean;

    /**
     * Sets a value indicating whether image must be encoded using tiles.
     * @param value A value indicating whether image must be encoded using tiles. Default value is true.
     */
    set_UseTiles(value: boolean): void;

    /**
     * Gets the tile size.
     */
    get_TileSize(): number;

    /**
     * Sets the tile size.
     * @param value The tile size. Default value is 256.
     */
    set_TileSize(value: number): void;

  }

}

