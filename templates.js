// const customNavbar = document.createElement("navbar-template");
// customNavbar.innerHTML = `<nav class="navbar">
//             <ul class="flex-row gap">
//                 <li class="no-bullet">
//                     <button
//                         class="nav-logo-button box-shadow nav-button-border"
//                         onclick="window.location.href = './index.html'"
//                     >
//                         <img
//                             src="./assets/badlogo.png"
//                             alt="LOGO"
//                             class="nav-logo"
//                         />
//                     </button>
//                 </li>
//                 <li class="no-bullet">
//                     <button
//                         class="nav-button box-shadow nav-button-border"
//                         onclick="window.location.href = './about.html'"
//                     >
//                         About
//                     </button>
//                 </li>
//                 <li class="no-bullet">
//                     <button
//                         class="nav-button box-shadow nav-button-border"
//                         onclick="window.location.href = './contact.html'"
//                     >
//                         Contact
//                     </button>
//                 </li>
//             </ul>
//         </nav>`;

// document.body.appendChild(customNavbar);

class CustomButton extends HTMLElement {
  constructor() {
    super();

    // Define the initial state
    this.clicked = false;

    // Set up the click event listener
    this.addEventListener('click', this.handleClick.bind(this));
  }

  static get observedAttributes() {
    return ['btnsize'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'btnsize') {
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  handleClick() {
    // Toggle the clicked state
    this.clicked = !this.clicked;
    this.render();
  }

  render() {
    const size = this.getAttribute('btnsize') || 'medium'; // Default size

    // Define the button size styles based on the btnSize attribute
    const sizeStyles = {
      small: {
        padding: '4px 8px',
        fontSize: '12px'
      },
      medium: {
        padding: '8px 16px',
        fontSize: '16px'
      },
      large: {
        padding: '12px 24px',
        fontSize: '20px'
      }
    };

    const { padding, fontSize } = sizeStyles[size] || sizeStyles.medium;

    // Define the button's appearance based on the clicked state
    this.innerHTML = `
      <style>
        button {
          display: inline-block;
          cursor: pointer;
          background-color: black;
          color: #fff;
          border: none;
          border-radius: 4px;
        }
      </style>
      <button style="padding: ${padding}; font-size: ${fontSize};">
        ${this.clicked ? 'Clicked!' : 'Click me!'}
      </button>
    `;
  }
}

class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<nav class="navbar">
            <ul class="flex-row gap">
                <li class="no-bullet">
                    <button
                        class="nav-logo-button box-shadow nav-button-border"
                        onclick="window.location.href = './index.html'"
                    >
                        <img
                            src="./assets/badlogo.png"
                            alt="LOGO"
                            class="nav-logo"
                        />
                    </button>
                </li>
                <li class="no-bullet">
                    <button
                        class="nav-button box-shadow nav-button-border"
                        onclick="window.location.href = './about.html'"
                    >
                        About
                    </button>
                </li>
                <li class="no-bullet">
                    <button
                        class="nav-button box-shadow nav-button-border"
                        onclick="window.location.href = './contact.html'"
                    >
                        Contact
                    </button>
                </li>
            </ul>
        </nav>`;
    }
}

// Register the custom button element
customElements.define('navbar', Navbar);