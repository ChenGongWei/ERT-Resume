import fs, { promises as fsPromiseAPIs } from 'fs';

// 文件的操作
const fileAction = {
    // 读文件
    read: (path: string): Promise<string> => {
        return fsPromiseAPIs.readFile(path, { encoding: 'utf8'});
    },

    // 写文件
    write: (path: string, content: string): Promise<void> => {
        return fsPromiseAPIs.writeFile(path, content, { encoding: 'utf8'});
    },

    // 文件重命名
    rename: (oldPath: string, newPath: string) => {
        return fsPromiseAPIs.rename(oldPath, newPath);
    },

    // 删除文件
    delete: (path: string) => {
        return fsPromiseAPIs.unlink(path);
    },

    // 文件是否存在
    hasFile: (path: string) => {
        return fsPromiseAPIs.access(path, fs.constants.F_OK);
    },

    // 文件是否可写
    canWrite: (path: string) => {
        return fsPromiseAPIs.access(path, fs.constants.W_OK);
    },

    // 文件是否可读
    canRead: (path: string) => {
        return fsPromiseAPIs.access(path, fs.constants.R_OK);
    },
};

export default fileAction;