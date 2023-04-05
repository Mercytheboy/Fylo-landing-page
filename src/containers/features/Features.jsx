import React from "react";
import Feature from "../../components/feature/Feature";
import access from "../../assets/icon-access-anywhere.svg";
import security from "../../assets/icon-security.svg";
import collaboration from "../../assets/icon-collaboration.svg";
import anyfile from "../../assets/icon-any-file.svg";

import "./features.css";
function Features() {
  return (
    <div className="features__section section__padding">
      <Feature
        icon={access}
        title={"Access you file, anywhere"}
        desc={
          "The ability to use a smartphone, tablet, or computuer to access your account means your files follow you everywhere."
        }
      />
      <Feature
        icon={security}
        title={"security you can trust"}
        desc={
          "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
        }
      />
      <Feature
        icon={collaboration}
        title={"Real-time collaboration"}
        desc={
          "Securely share files and folderes with friends, family and collegues for live collaboration. No email attachments required."
        }
      />
      <Feature
        icon={anyfile}
        title={"Store any type of file"}
        desc={
          "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared"
        }
      />
    </div>
  );
}

export default Features;
