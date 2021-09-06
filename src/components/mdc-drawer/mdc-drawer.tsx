import { Component,  h } from '@stencil/core';
// import { MDCDrawer } from '@material/drawer';

@Component({
  tag: 'mdc-drawer',
  styleUrl: 'mdc-drawer.css',
  shadow: true,
})
export class MdcDrawer {

  render() {
    return (
      <aside class="mdc-drawer">
        <div class="mdc-drawer__content">
          <nav class="mdc-list">
            <a class="mdc-list-item mdc-list-item--activated" href="#" aria-current="page">
              <span class="mdc-list-item__ripple"></span>
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">
                inbox
              </i>
              <span class="mdc-list-item__text">Inbox</span>
            </a>
            <a class="mdc-list-item" href="#">
              <span class="mdc-list-item__ripple"></span>
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">
                send
              </i>
              <span class="mdc-list-item__text">Outgoing</span>
            </a>
            <a class="mdc-list-item" href="#">
              <span class="mdc-list-item__ripple"></span>
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">
                drafts
              </i>
              <span class="mdc-list-item__text">Drafts</span>
            </a>
          </nav>
        </div>
      </aside>
    );
  }

}
