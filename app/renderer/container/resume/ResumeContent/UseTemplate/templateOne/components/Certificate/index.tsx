/**
 * @desc 荣誉奖励
 * @author chengonwei
 */
 import React from 'react';
 import style from '../../../styles/template-one.less';
 
 function Certificate() {
   return (
     <div className={style.container}>
       <p className={style.title}>荣誉奖励 Certificate</p>
       <ul className={style.content}>
         <li>全国英语四级证书</li>
         <li>全国计算机二级证书</li>
         <li>湖南瞎说大学自封骰王</li>
         <li>广州第一届酒王大赛参与奖</li>
       </ul>
     </div>
   );
 }
 
 export default Certificate;