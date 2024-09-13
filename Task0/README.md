  # Task0 - How to Dual Boot Ubuntu with Windows Using a USB Pendrive

  ## Overview
    A very short breifing of the method i used to install Ubuntu into my PC along with Windows.

  ## 1. Prepare the USB Drive
     - Download the Ubuntu ISO from the official website.
     - Download and install Rufus (Windows) or Etcher (Linux).
     - Insert a USB drive (minimum 4GB) into the computer.
     - Open Rufus, select the Ubuntu ISO, choose the USB drive, and create a bootable USB.

  ## 2. Prepare Your Windows System
     - Backup important data before making any changes.
     - Create space for Ubuntu:
       - Open Disk Management (Right-click Start Menu > Disk Management).
       - Right-click on the C: drive, select 'Shrink Volume'.
       - Shrink at least 20GB of space for Ubuntu.

  ## 3. Disable Fast Startup and Secure Boot
     - In Windows, go to Control Panel > Power Options > Choose what the power buttons do.
     - Disable 'Fast Startup'.
     - Restart and enter BIOS/UEFI (usually by pressing Esc, F2, or Del during startup).
     - In BIOS, disable 'Secure Boot'.

  ## 4. Boot from the USB Drive
     - Restart your computer and boot from the USB by selecting it in the boot menu (usually by pressing F12, Esc, or F10).
     - Select 'Try Ubuntu without Installing' to enter the live environment.

  ## 5. Install Ubuntu Alongside Windows
     - In the live environment, open the 'Install Ubuntu' program.
     - Choose 'Install Ubuntu alongside Windows' or 'Something Else' for manual partitioning:
       - Allocate 2GB or more for swap.
       - Allocate the rest of the space for the root system (/).
     - Follow the installer instructions to complete the installation.

  ## 6. Final Steps
     - After installation, remove the USB and restart the computer.
     - You should see the GRUB bootloader, allowing you to choose between Ubuntu and Windows.

    ### Note: Ensure you follow each step carefully to avoid any data loss!

