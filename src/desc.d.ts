declare module "@wf/keycloak-axios-provider";

declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.svg" {
  const content: string;
  export default content;
}
