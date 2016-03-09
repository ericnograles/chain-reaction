import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="demo-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100">
        <header className="demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">React for Complete Beginners</span>
            <div className="mdl-layout-spacer"></div>
            {/*<div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
              <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search">
                <i className="material-icons">search</i>
              </label>
              <div className="mdl-textfield__expandable-holder">
                <input className="mdl-textfield__input" type="text" id="search" />
                <label className="mdl-textfield__label" htmlFor="search">Enter your query...</label>
              </div>
            </div>*/}
          </div>
        </header>
        <div className="demo-ribbon"></div>
        <main className="demo-main mdl-layout__content">
          <div className="demo-container mdl-grid">
            <div className="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
            <div className="demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
              {/*<div className="demo-crumbs mdl-color-text--grey-500">
                Google &gt; Material Design Lite &gt; How to install MDL
              </div>*/}
              <h3>Getting Started</h3>
              <p>
                React is a framework based on components.  Instead of building webpages as huge pieces of DOM states, we tend to think of each page as a "container" for "components".
              </p>
              <h3>Component States</h3>
              <p>
                In practice, only containers should be stateful.  Components should be as stateless as possible.  This is not a hard and fast rule, as there could be scenarios where you must maintain state in a component -- for example, to initiate animations.
              </p>
              <h3>Unidirectional Binding</h3>
              <p>
                There are two accepted architectures for data flow and binding in React: Flux and Redux.  Both, while mechanically similar, have some key differences.
              </p>
            </div>
          </div>
          <footer className="demo-footer mdl-mini-footer">
            <div className="mdl-mini-footer--left-section">
              <ul className="mdl-mini-footer--link-list">
                <li><a href="https://facebook.github.io/react/docs/getting-started.html">React Documentation</a></li>
                <li><a href="https://github.com/facebook/react">React GitHub</a></li>
              </ul>
            </div>
          </footer>
        </main>
      </div>
    );
  }
}