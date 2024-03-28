'use strict'

// Subscriber.js
import User from './user.js';

export default class Subscriber extends User {
  constructor(id, name, userName, email, pages, groups, canMonetize) {
    super(id, name, userName, email);
    this._pages = pages;
    this._groups = groups;
    this._canMonetize = canMonetize;
  }

  get pages() {
    return this._pages;
  }

  get groups() {
    return this._groups;
  }

  get canMonetize() {
    return this._canMonetize;
  }

  getInfo() {
    return super.getInfo() + `\nPages: ${this._pages.join(', ')}\nGroups: ${this._groups.join(', ')}\nMonetization: ${this._canMonetize ? 'Eligible' : 'Not eligible'}`;
  }
}
