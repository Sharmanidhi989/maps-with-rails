import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "output" ]
  clicked( event ) {
    alert("button clicked");
  }
}
