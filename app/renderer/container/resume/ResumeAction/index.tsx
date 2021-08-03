import React, { useCallback } from 'react';
import { useHistory } from 'react-router';
import ROUTER from '@common/constants/router';
import MyButton from '@common/components/MyButton';
import style from './index.less';

function ResumeAction() {
  const history = useHistory();

  // 返回首页
  const onBack = useCallback(() => {
    history.push(ROUTER.root);
  }, []);

  // 导出PDF
  const onExport = () => {};

  return (
    <div className={style.actions}>
      <div className={style.back} onClick={onBack}>返回</div>
      <MyButton size="middle" className={style.export_btn} onClick={onExport}>导出PDF</MyButton>
    </div>
  );
}

export default React.memo(ResumeAction);
