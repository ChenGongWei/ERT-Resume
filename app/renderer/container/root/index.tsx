import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router';
import { shell } from 'electron';
import { ROUTER_ENTRY, ROUTER_KEY } from '@common/constants/router';
import { isHttpOrHttpsUrl } from '@common/utils/router';
import Logo from '@assets/logo.png';
import style from './index.less';

function Root() {
    //  通过 history.push 进行跳转
    const history = useHistory();


    const onRouterToLink = useCallback((router: TSRouter.Item) => {
        if(!isHttpOrHttpsUrl(router.url)) { // 简历
            history.push(router.url);
        } else {
            // 通过 shell 模块， 打开默认浏览器，进入GitHub
            shell.openExternal(router.key)
        }
    }, [])

    return (
        <div className={style.root}>
            <div className={style.container}>
                <img src={Logo} alt="Logo" />
                <div className={style.title}>ERT-Resume</div>
                <div className={style.tips}>一个模板简历制作平台，让你的简历更加出众 ~</div>
                <div className={style.action}>
                    { 
                        ROUTER_ENTRY.map((router: TSRouter.Item) => 
                            <div 
                                key={router.key} 
                                className={style.item} 
                                onClick={() => onRouterToLink(router)}
                            >
                                {router.text}
                            </div>
                        )
                    }
                </div>
                <div className={style.copyright}>
                    <div className={style.footer}>
                        <p className={style.copyright_text}>
                            Copyright © 2021-{new Date().getFullYear()} All Rights Reserved. Copyright By chengongwei
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Root;