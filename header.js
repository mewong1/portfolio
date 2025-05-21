class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
          nav {
            background-color: #f8c9e8;
            padding: 20px 30px;
            text-align: center;
            position: sticky;
            top: 0;
          }
          a {
            color: #ffffff;
            text-decoration: none;
            padding: 10px 15px;
            font-family: "Times New Roman", Times, serif;
          }
            a:hover {
               background-color: #e0a3c2;
               border-radius: 5px;
            }
            .darkModebtn {
               background-color: #f8c9e8;
               color: #ffffff;
               border: 3px rgb(214, 87, 172);
               padding: 10px 15px;
               font-family: "Times New Roman", Times, serif;
               position: relative;
               top: 0px;
               right: 0px;
            }
            .darkModebtn:hover {
               background-color: #e0a3c2;
               border-radius: 5px;
            }
        </style>
        <header class="header" id="myHeader">
            <nav>
                <a href="index.html">Home</a>
                <a href="about.html">About Me</a>
                <a href="projects.html">My Projects</a>
                <button class="darkModebtn" id="darkModeToggle" onclick="darkModeToggle()">Dark Mode</button>
            </nav>

        </header>
        <script src = "scripts.js" type="text/javascript" defer></script>

     `;

  }
}

customElements.define('header-component', Header);
