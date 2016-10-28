import Component from 'flarum/Component';

export default class Carousel extends Component {
  init() {
    console.log('Carousel Init');
  }

  view() {
    return (
      <div class="container">
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
      </div>
    )
  }

  config() {
    $(this.element).slick();
  }
}