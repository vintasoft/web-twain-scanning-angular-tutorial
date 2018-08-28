using System.Windows;
using Vintasoft.WpfTwain;

namespace WpfTwainSimpleDemo
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {

        #region Fields

        Device _device;

        #endregion



        #region Constructor

        public MainWindow()
        {
            InitializeComponent();

            this.Title = string.Format("VintaSoft WPF TWAIN Simple Demo v{0}", TwainGlobalSettings.ProductVersion);
        }

        #endregion



        #region Methods

        /// <summary>
        /// Scans images.
        /// </summary>
        private void scanImagesButton_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                // disable application UI
                scanImagesButton.IsEnabled = false;

                // create TWAIN device manager
                using (DeviceManager deviceManager = new DeviceManager(this))
                {
                    // try to find TWAIN device manager
                    deviceManager.IsTwain2Compatible = (bool)twain2CheckBox.IsChecked;
                    // if TWAIN device manager is not found
                    if (!deviceManager.IsTwainAvailable)
                    {
                        // try to find another TWAIN device manager
                        deviceManager.IsTwain2Compatible = (bool)!twain2CheckBox.IsChecked;
                        // if TWAIN device manager is not found
                        if (!deviceManager.IsTwainAvailable)
                        {
                            MessageBox.Show("TWAIN device manager is not found.");
                            return;
                        }
                    }

                    // if 64-bit TWAIN2 device manager is used
                    if (System.IntPtr.Size == 8 && deviceManager.IsTwain2Compatible)
                    {
                        if (!InitTwain2DeviceManagerMode(deviceManager))
                            return;
                    }

                    // open the device manager
                    deviceManager.Open();

                    // if devices are NOT found
                    if (deviceManager.Devices.Count == 0)
                    {
                        MessageBox.Show("Devices are not found.");
                        return;
                    }

                    // if device is NOT selected
                    if (!deviceManager.ShowDefaultDeviceSelectionDialog())
                    {
                        MessageBox.Show("Device is not selected.");
                        return;
                    }

                    // get reference to the selected device
                    _device = deviceManager.DefaultDevice;

                    // set scan settings
                    _device.ShowUI = (bool)showUiCheckBox.IsChecked;
                    _device.ShowIndicators = (bool)showIndicatorsCheckBox.IsChecked;
                    _device.DisableAfterAcquire = !_device.ShowUI;
                    _device.CloseAfterModalAcquire = false;

                    AcquireModalState acquireModalState;
                    do
                    {
                        // synchronously acquire image from device
                        acquireModalState = _device.AcquireModal();
                        switch (acquireModalState)
                        {
                            case AcquireModalState.ImageAcquired:
                                // dispose previous bitmap source in the picture box
                                if (image1.Source != null)
                                    image1.Source = null;

                                // set a bitmap source in the image control
                                image1.Source = _device.AcquiredImage.GetAsBitmapSource();

                                // dispose an acquired image
                                _device.AcquiredImage.Dispose();
                                break;

                            case AcquireModalState.ScanCanceled:
                                MessageBox.Show("Scan is canceled.");
                                break;

                            case AcquireModalState.ScanFailed:
                                MessageBox.Show(string.Format("Scan is failed: {0}", _device.ErrorString));
                                break;
                        }
                    }
                    while (acquireModalState != AcquireModalState.None);

                    // close the device
                    _device.Close();
                    _device = null;

                    // close the device manager
                    deviceManager.Close();
                }
            }
            catch (TwainException ex)
            {
                MessageBox.Show(ex.Message);
            }
            finally
            {
                // enable application UI
                scanImagesButton.IsEnabled = true;
            }
        }

        /// <summary>
        /// Initializes the device manager mode.
        /// </summary>
        /// <param name="deviceManager">The TWAIN device manager.</param>
        private bool InitTwain2DeviceManagerMode(DeviceManager deviceManager)
        {
            // create a window that allows to view and edit mode of 64-bit TWAIN2 device manager
            SelectDeviceManagerModeWindow window = new SelectDeviceManagerModeWindow();
            // initialize window
            window.Owner = this;
            window.Use32BitDevices = deviceManager.Are32BitDevicesUsed;

            // show dialog
            if (window.ShowDialog() == true)
            {
                // if device manager mode is changed
                if (window.Use32BitDevices != deviceManager.Are32BitDevicesUsed)
                {
                    try
                    {
                        // if 32-bit devices must be used
                        if (window.Use32BitDevices)
                            deviceManager.Use32BitDevices();
                        else
                            deviceManager.Use64BitDevices();
                    }
                    catch (TwainDeviceManagerException ex)
                    {
                        // show dialog with error message
                        MessageBox.Show(ex.Message, "TWAIN device manager", MessageBoxButton.OK, MessageBoxImage.Error);

                        return false;
                    }
                }
            }
            else
            {
                return false;
            }

            return true;
        }

        private void Window_Closing(object sender, System.ComponentModel.CancelEventArgs e)
        {
            if (_device != null)
            {
                if (_device.State != DeviceState.Closed)
                    _device.Close();
            }
        }

        #endregion

    }
}
