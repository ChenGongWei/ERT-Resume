/**
 * @desc 头像
 * @author chengongwei
 */
import React from 'react';
import style from './index.less';
import AvatarImage from '@assets/avatar.jpg';

function Avatar() {
  return (
    <div className={style.box}>
      <div className={style.avatar}>
        <img className={style.img} src={AvatarImage} />
      </div>
    </div>
  );
}

export default Avatar;