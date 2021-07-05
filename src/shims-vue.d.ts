// Mocks all files ending in `.vue` showing them as plain Vue instances
declare module '*.vue' {
  import { Component } from 'vue';
  const component: Component
  export default component
}