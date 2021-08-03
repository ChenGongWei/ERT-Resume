/**
 * @desc 模板1
 * @author chengongwei
 */
 import React from 'react';
 import classname from 'classnames';
 import style from './index.less';
 import Avatar from './components/Avatar';
 import BaseInfo from './components/BaseInfo';
 import Contact from './components/Contact';
 import Job from './components/Job';
 import Certificate from './components/Certificate';
 import Synopsis from './components/Synopsis';
 import Skill from './components/Skill';
 import Post from './components/Post';
 import Project from './components/Project';
 import Work from './components/Work';
 
 function TemplateOne() {
   // 必须带有id，以方便导出时获取DOM元素内容
   return (
     <div className={style.a4_box}>
       <div className={classname(style.flex, style.container)} id="visPdf">
         {/* 左侧 */}
         <div className={style.left}>
           <div className={style.avatar}>
             <Avatar />
           </div>
           <div className={style.fillColor}/>
           <div className={style.baseData}>
             <BaseInfo />
             <Contact />
             <Job />
             <Certificate />
           </div>
         </div>
         {/* 内容 */}
         <div className={style.center}>
           <Synopsis />
           <div className={style.listData}>
             <Skill />
             <Post />
             <Project />
             <Work />
           </div>
         </div>
       </div>
     </div>
   );
 }
 
 export default TemplateOne;