import React from "react";
import Btn from "../btn/Btn";

import "./mailbox.css";

function Mailbox() {
  return (
    <div className="mailbox__section">
      <h2>Get early access today</h2>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team woulb be happy to
        help you.
      </p>

      <form
        action=""
        className="mailbox__section-form
      ">
        <input type="text" placeholder="email@example.com"  />
        <Btn label={"Get started For Free"} type={"submit"} />
      </form>
    </div>
  );
}

export default Mailbox;
