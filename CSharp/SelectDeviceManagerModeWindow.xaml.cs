using System;
using System.Windows;


namespace WpfTwainSimpleDemo
{
    /// <summary>
    /// A window that allows to view and edit mode of 64-bit TWAIN2 device manager.
    /// </summary>
    public partial class SelectDeviceManagerModeWindow : Window
    {

        /// <summary>
        /// Initializes a new instance of the <see cref="SelectDeviceManagerModeWindow"/> class.
        /// </summary>
        public SelectDeviceManagerModeWindow()
        {
            InitializeComponent();

            if (IntPtr.Size == 4)
                use32BitDevicesRadioButton.IsChecked = true;
            else
                use64BitDevicesRadioButton.IsChecked = true;
        }


        /// <summary>
        /// Gets or sets a value indicating whether the 64-bit TWAIN2 device manager must use 32-bit devices.
        /// </summary>
        /// <value>
        /// <b>true</b> if 64-bit TWAIN2 device manager must use 32-bit devices; otherwise, <b>false</b>.
        /// </value>
        public bool Use32BitDevices
        {
            get
            {
                return use32BitDevicesRadioButton.IsChecked == true;
            }
            set
            {
                use32BitDevicesRadioButton.IsChecked = value;
            }
        }

        /// <summary>
        /// "OK" button is clicked.
        /// </summary>
        private void okButton_Click(object sender, RoutedEventArgs e)
        {
            DialogResult = true;
        }

    }
}
