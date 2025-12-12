import { LitElement, html, css } from 'lit';
//import "@haxtheweb/meme-maker/meme-maker.js";

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = 'Title Default';
    this.image = 'https://via.placeholder.com/300x200.png?text=Image+Placeholder';
    this.description = 'Description Default';
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        box-sizing: border-box;
        font-family: Arial, sans-serif;
      }
      :host([fancy]) .card{
        background-color: var(--my-card-fancy-bg)
        }
      h1 {
        color: darkblue;
        font-family: Helvetica;
      }
      p {
        color: white;
        font-family: sans-serif;
        font-size: 12px;        
        margin-top: 4px;        
        text-align: left;       
        display: inline-block;  
        max-width: 350px;       
        overflow-wrap: break-word;
      }
      .card {
        background-color: lightblue;
        padding: 8px;
        margin: 12px;
        max-width: 400px;
        text-align: center;
      }
      .card img {
        width: 350px;
        height: 200px;
        object-fit: cover;
        object-position: center;
      }
      details summary {
          text-align: left;
          font-size: 20px;
          padding: 8px 0;
        }

      details[open] summary {
        font-weight: bold;
      }
      
      details div {
        border: 2px solid black;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow: auto;
      }
      @media (min-width: 500px) and (max-width: 800px) {
        .card button {
          display: block;
          font-size: 12px;
          padding: 4px 8px;
        }
      }
      @media (max-width: 500px) {
        .card {
          max-width: 90%;
          padding: 4px;
          margin: 12px auto;
        }
        .card img {
          height: auto;
          margin: 12px auto;
        }
        .card p {
          font-size: 8px;
          max-width: 100%;
        }
        .card button {
          display: none;
        }
      }
      .control-wrapper > button {
        display: inline-block !important;
        margin: 4px;
      }
          `;
        }


  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`<div class="card">
    <h1> ${this.title}</h1>
    <img src="${this.source}" alt="${this.title}">
    <div>
    <details ?open="${this.fancy}" @toggle="${this.openChanged}">
      <summary>Description</summary>
      <div>
        <slot></slot>
  </div>
    </details>
    </div>
  </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      source: { type: String },
      fancy: { type: Boolean, reflect: true },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);