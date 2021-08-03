/**
 * @desc 求职意向
 * @author chengonwei
 */
 import React from 'react';
 import style from '../../../styles/template-one.less';
 import './index.less';
 
 function Job() {
   return (
     <div className={style.container}>
       <p className={style.title}>求职意向 Work</p>
       <ul className={style.content}>
         <li>职位：前端工程师</li>
         <li>城市：广州｜成都｜海口</li>
       </ul>
     </div>
   );
 }
 
 export default Job;