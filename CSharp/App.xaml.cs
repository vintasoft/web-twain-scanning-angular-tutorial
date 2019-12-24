using System;
using System.ComponentModel;
using System.IO;
using System.Windows;

namespace WpfTwainSimpleDemo
{
    /// <summary>
    /// Interaction logic for App.xaml
    /// </summary>
    public partial class App : Application
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="App"/> class.
        /// </summary>
        public App()
            : base()
        {
            VintasoftTwain.VintasoftWpfTwainLicense.Register();
        }

    }
}
