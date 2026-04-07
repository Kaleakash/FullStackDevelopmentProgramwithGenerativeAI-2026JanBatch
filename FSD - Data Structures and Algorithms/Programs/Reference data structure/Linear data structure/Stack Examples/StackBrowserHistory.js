class Browser {
  constructor() {
    this.history = [];
  }

  visit(page) {
    this.history.push(page);
    console.log("Visited:", page);
  }

  back() {
    this.history.pop();
    console.log("Current:", this.history[this.history.length - 1]);
  }
}

const browser = new Browser();
browser.visit("Home");
browser.visit("About");
browser.visit("Contact");

browser.back(); // Current: About
browser.back(); // Current: Home
browser.back(); // Current: undefined (no more history)