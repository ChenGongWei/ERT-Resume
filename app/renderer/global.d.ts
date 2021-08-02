declare module '*.jpg' {
    const jpg: string;
    export default jpg;
}

declare module '*.png' {
    const png: string;
    export default png;
}

declare module '*.less' {
    const classes: { readonly [key: string]: string };
    export default classes;
  }