import React from 'react';
import ResumeAction from './ResumeAction';
import ResumeContent from './ResumeContent';
import ResumeToolbar from './ResumeToolbar';
import style from './index.less';

function Resume() {
    
    return (
        <div className={style.container}>
            <div className={style.header}>
                <ResumeAction />
            </div>
            <div className={style.content}>
                <ResumeContent />
            </div>
            <div className={style.toolbar}>
                <ResumeToolbar />
            </div>
        </div>
    )
}

export default React.memo(Resume);