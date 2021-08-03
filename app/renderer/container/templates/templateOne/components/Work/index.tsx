/**
 * @desc 工作经历
 * @author chengongwei
 */
import React from 'react';
import style from './index.less';

function Work() {
  return (
    <div className={style.content}>
      <p className={style.label}>工作经历 Post</p>
      <ul className={style.list}>
        <li className={style.flex}>
          <div className={style.left}>
            <p>2019.07-至今</p>
            <p>前端工程师</p>
          </div>
          <div className={style.right}>
            <p>CVTE</p>
            <p>就职于CVTE，部门人送广州彭于晏，其他的没啥介绍了</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Work;
