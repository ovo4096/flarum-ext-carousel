import Component from 'flarum/Component';

export default class Carousel extends Component {
  init() {
  }

  view() {
    return <div className="container">
      <div>
        <div>TextA</div>
      </div>
      <div>
        <div>2</div>
      </div>
      <div>
        <div>3</div>
      </div>
      <div>
        <div>4</div>
      </div>
      <div>
        <div>5</div>
      </div>
      <div>
        <div>6</div>
      </div>
    </div>
  }

  config() {
    $(this.element).slick({});
  }
}