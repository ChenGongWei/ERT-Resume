/**
 * @desc 基本信息
 * @author chengongwei
 */
 import React from 'react';
 import style from '../../../styles/template-one.less';
 
 function BaseInfo() {
   return (
     <div className={style.container}>
       <p className={style.title}>基本信息 Basic</p>
       <ul className={style.content}>
         <li>院校：湖南瞎说大学</li>
         <li>专业：软件工程</li>
         <li>学历：本科</li>
         <li>学年：2015.09 - 2019.06</li>
         <li>籍贯：海南·海口</li>
       </ul>
     </div>
   );
 }
 
 export default BaseInfo;