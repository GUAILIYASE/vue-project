/// <reference types="vite/client" />
declare module "*.vue" {  //忽略导入文件时报错
  import { App, defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent> & {
      install(app: App): void;
  };
  export default component;
}
