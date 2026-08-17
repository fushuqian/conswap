import { UserSettings } from "./modules/userSettings.js";
import { USB } from './modules/com/usbSerial.js';
import { UsbEsp32 } from './modules/com/usbEsp32.js';

document.addEventListener("DOMContentLoaded", () => {
    const connectUsbBtn = document.getElementById('connectUsb');
    if (connectUsbBtn) {
        connectUsbBtn.addEventListener('click', async () => {
            await USB.connect();
        });
    }

    const connectOgxmWBtn = document.getElementById('connectOgxmW');
    if (connectOgxmWBtn) {
        connectOgxmWBtn.addEventListener('click', async () => {
            await UsbEsp32.connect();
        });
    }
});