// 模块路径
const ROUTER = {
    root: '/',
    resume: '/resume',
    github: 'https://github.com/ChenGongWei/ERT-Resume',
};

export default ROUTER;

export const ROUTER_KEY = {
    root: 'root',
    resume: 'resume',
};

// 入口模块，TS 定义类型必须为 TSRouter.Item
export const ROUTER_ENTRY: TSRouter.Item[] = [
    {
        key: 'intro',
        text: '介绍',
        url: ROUTER.github,
    },
    {
        key: ROUTER_KEY.resume,
        text: '简历',
        url: ROUTER.resume,
    },
    {
        key: 'code',
        text: '源码',
        url: ROUTER.github,
    }
]