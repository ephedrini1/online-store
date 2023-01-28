import './footer.css'
import Component from '../../utils/component';

export default class Footer extends Component {
  private footerContainer: Component;

  constructor(parentNode: HTMLElement) {
    super(document.body, 'footer', 'footer');
    this.footerContainer = new Component(this.node, 'div', 'footer-container');
    this.renderContainer();
  }
  renderContainer() {
    this.footerContainer.node.innerHTML = `
      <div class="container">
          <div class="footer_wrapper">
              <a class="footer_link" href="https://github.com/ephedrini1/" target="_blank"> @ephedrini1</a>
              <p class="year">2022</p>
              <a class="footer_link" href="https://rs.school/js-stage0/" target="_blank"><img
                      src="assets/img/rs_school_js.svg" width="40" alt="geo"> Rolling Scopes School</a>
          </div>
      </div>
`;
  }
}