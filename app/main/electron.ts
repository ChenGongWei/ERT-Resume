/**
 * @desc electron 主入口
 */

import path from 'path';
import { app, BrowserWindow, ipcMain } from 'electron';

// 判断是否为开发环境
function isDev() {
    return process.env.NODE_ENV === 'development';
}

function createWindow() {
    // 创建浏览器窗口
    const mainWindow = new BrowserWindow({
        width: 1200, // 窗口宽度
        height: 800, // 窗口高度
        webPreferences: {
            nodeIntegration: true, // 注入node模块
        },
    });

    if(isDev()) { // 开发环境下加载运行在 7001 端口的react项目
        mainWindow.loadURL('http://127.0.0.1:7001');
    } else {
        mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
    }
    // mainWindow.loadFile('index.html'); // 加载文件
}

app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

const ROOT_PATH = path.join(app.getAppPath(), '../');

ipcMain.on('get-root-path', (event, arg) => {
    event.reply('reply-root-path', ROOT_PATH);
});