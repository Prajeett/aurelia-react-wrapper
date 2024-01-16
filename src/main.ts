import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import { ReactWrapper } from './react-wrapper';

Aurelia
  .register(ReactWrapper) 
  .app(MyApp)
  .start();
