/**
 * @desc 联系方式
 * @author chengongwei
 */
 import React from 'react';
 import style from '../../../styles/template-one.less';
 
 function Contact() {
   return (
     <div className={style.container}>
       <p className={style.title}>联系方式 Contact</p>
       <ul className={style.content}>
         <li>电话：176****2612</li>
         <li>邮箱：1063137960@qq.com</li>
       </ul>
     </div>
   );
 }
 
 export default Contact;