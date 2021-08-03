// png 类型声明
declare module '*.png' {
    const png: string;
    export default png;
}

// jpg 类型声明
declare module '*.jpg' {
    const jpg: string;
    export default jpg;
}


// svg 类型声明
declare module '*.svg';

// less 类型声明
declare module '*.less' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

// redux-logger 类型声明
declare module 'redux-logger';

// rc-redux-model 类型声明
declare module 'rc-redux-model';