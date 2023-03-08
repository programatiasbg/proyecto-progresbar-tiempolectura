import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="reader"
export default class extends Controller {
  static targets = ["readingTime","body"];

  connect() {
    this.readingTime();
  }

  readingTime(){
    const text = this.bodyTarget.textContent;
    const wordsXmin = 256;
    const numberWords = text.split(/\s/g).length;

    const minutes = numberWords / wordsXmin;
    const readTime = Math.ceil(minutes);

    if(minutes < 1){
      this.readingTimeTarget.textContent = `< ${readTime} min. de lectura.`;
    } else {
      this.readingTimeTarget.textContent = `${readTime} min. de lectura.`;
    }
  }

}
