import { Component, h } from '@stencil/core';

import { MDCTextField } from '@material/textfield';

import { MDCList } from '@material/list';

import { MDCDrawer } from '@material/drawer';

@Component({
  tag: 'mdc-drawer',
  styleUrl: 'mdc-drawer.scss',
  shadow: false,
})
export class MdcDrawer {
  constructor() {
    const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
    const list = MDCList.attachTo(document.querySelector('.mdc-list'));
    list.wrapFocus = true;
    const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
    console.log('textField', textField);
    console.log('drawer :>> ', drawer);
  }

  render() {
    return (
      <aside class="mdc-drawer">
        <div class="mdc-drawer__header">
          <h3 class="mdc-drawer__title">Mail</h3>
          <h6 class="mdc-drawer__subtitle">email@material.io</h6>
        </div>
        <div>
          <label class="mdc-text-field mdc-text-field--outlined">
            <span class="mdc-notched-outline">
              <span class="mdc-notched-outline__leading"></span>
              <span class="mdc-notched-outline__notch">
                <span class="mdc-floating-label" id="my-label-id">
                  Your Name
                </span>
              </span>
              <span class="mdc-notched-outline__trailing"></span>
            </span>
            <input type="text" class="mdc-text-field__input" aria-labelledby="my-label-id" />
          </label>
        </div>
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
