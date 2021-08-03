import React from 'react';
import MyScrollBox from '@common/components/MyScrollBox';
import RESUME_TOOLBAR_LIST from '@common/constants/resume';
import style from './index.less';

function ResumeToolbar() {
  const height = document.body.clientHeight;
  return (
    <div className={style.slider}>
      <MyScrollBox maxHeight={height - 180}>
        <div className={style.module}>
          全部模块
          <div className={style.content}>
            {RESUME_TOOLBAR_LIST.map((toolbar: TSResume.SliderItem) => {
              return (
                <div className={style.box} key={toolbar.key}>
                  <div className={style.info}>
                    <i className={style.icon} />
                    <div className={style.text}>
                      <div className={style.name}>{toolbar.name}</div>
                      <div className={style.summary}>{toolbar.summary}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </MyScrollBox>
    </div>
  );
}

export default ResumeToolbar;
