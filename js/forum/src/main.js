import {override} from 'flarum/extend';
import app from 'flarum/app';
import Carousel from './components/Carousel';

app.initializers.add('hao-hello', () => {
  $('#app > .App-content').prepend($('<div id="app-carousel"></div>'));
  m.mount($('#app-carousel')[0], Carousel.component());
});
