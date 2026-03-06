class AppNavbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<nav>Stuff</nav>`;
  }
}

customElements.define("navbar", AppNavbar);
