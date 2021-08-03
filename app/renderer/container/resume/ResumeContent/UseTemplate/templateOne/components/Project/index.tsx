/**
 * @desc 项目经历
 * @author chengongwei
 */
 import React from 'react';
 import style from './index.less';
 
 function Project() {
   return (
     <div className={style.content}>
       <p className={style.label}>项目经历 Project</p>
       <ul className={style.list}>
         <li className={style.flex}>
           <div className={style.left}>
             <p>
               <span>2021.03 - 2021.05</span>
             </p>
           </div>
           <div className={style.right}>
             <p>
               <span>visResumeMook 可视化简历平台 -前端工程师</span>
             </p>
           </div>
           <div className={style.text}>
             <ul className={style.item_box}>
               <li className={style.item_content}>
                 <span>Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版</span>
               </li>
               <li className={style.item_content}>
                 <span>通过 jsonfile 方式实现主题换肤，支持导出 PDF 简历文档</span>
               </li>
               <li className={style.item_content}>
                 <span>通过可视化拖拽形式，自定义组件模版</span>
               </li>
             </ul>
           </div>
         </li>
       </ul>
     </div>
   );
 }
 
 export default Project;