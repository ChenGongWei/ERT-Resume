/**
 * @description 弹窗组件
 */
import React from 'react';
import classnames from 'classnames';
import style from './index.less';
import MyButton from '@common/components/MyButton';
import { IDialogModal } from '../types';

function MyDialog({
  title,
  width,
  className,
  showFooter,
  renderFooter,
  config = {},
  eleRef,
  children,
  childStyle,
}: IDialogModal) {
  const { cancelBtn = { isShow: true }, submitBtn = { isShow: true } } = config;
  return (
    <div className={style['vis-mask']}>
      <div className={style['center']}>
        <div className={classnames(style['vis-dialog-box'], className)} style={{ width: width || 760 }} ref={eleRef}>
          <div className={style['vis-dialog-header']}>{title || 'VisResumeMook 提示您'}</div>
          <div
            className={style['vis-dialog-close']}
            onClick={() => {
              cancelBtn?.callback && cancelBtn.callback();
            }}
          />
          <div className={style['vis-dialog-content']} style={childStyle}>
            {children}
          </div>
          {showFooter &&
            (renderFooter || (
              <div className={style['vis-dialog-footer']}>
                {cancelBtn?.isShow && (
                  <MyButton
                    size="middle"
                    className="vis-dialog-footer-btn vis-dialog-footer-cancel-btn"
                    onClick={() => {
                      cancelBtn?.callback && cancelBtn.callback();
                    }}
                  >
                    {cancelBtn?.text || '取消'}
                  </MyButton>
                )}
                {submitBtn?.isShow && (
                  <MyButton
                    size="middle"
                    className="vis-dialog-footer-btn vis-dialog-footer-submit-btn"
                    onClick={() => {
                      submitBtn?.callback && submitBtn.callback();
                    }}
                  >
                    {submitBtn?.text || '确定'}
                  </MyButton>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MyDialog;
