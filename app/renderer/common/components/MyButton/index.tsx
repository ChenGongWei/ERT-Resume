/**
 * @description 按钮组件
 */
 import React from 'react';
 import classnames from 'classnames';
 import less from './index.less';
 
 export interface Button {
   /**
    * @description 按钮大小
    */
   size?: 'middle' | 'big' | 'small';
   /**
    * @description 宽度
    */
   width?: number;
   /**
    * @description 自定义样式
    */
   style?: React.CSSProperties;
   /**
    * @description 子组件
    */
   children?: React.ReactNode | any;
   /**
    * @description 禁止
    */
   disabled?: boolean;
   /**
    * @description 样式名
    */
   className?: string;
   /**
    * @description 点击事件
    */
   onClick?: Function;
   /**
    * @description 是否显示边框
    */
   border?: boolean;
 }
 function MyButton({ size = 'small', style, width, children, disabled, className, onClick, border = true }: Button) {
   return (
     <div
       style={{
         ...style,
         width: width,
       }}
       className={classnames(className, less.es_button, 
        less[`es_button_${size}`], 
        less[disabled ? 'es_button_disabled' : ''], 
        less[border? 'es_button_border' : ''])}
       onClick={() => {
         onClick && onClick();
       }}
     >
       {children}
     </div>
   );
 }
 
 export default MyButton;