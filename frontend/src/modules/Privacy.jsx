import React from "react";
import { Link } from "react-router-dom";
import "./Privacy.css";

function Privacy() {
  return (
    <div className="pira">
      <h1>Privacy Policy</h1>

      <h2>Effective Date: February 08, 2025</h2>

      <h2>Introduction</h2>
      <p>
        Welcome to GUIITAR Council ("we," "our," or "us"). As a Section 8
        company affiliated with GSFC University, we are committed to protecting
        your privacy. This Privacy Policy explains how we collect, use,
        disclose, and safeguard your information when you visit our{" "}
        <a href="https://guiitarcouncil.vercel.app/">website.</a>
      </p>

      <h2>Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li>
          <strong>Personal Information:</strong> Name, email address, phone
          number, designation, and any other details provided through forms or
          registrations.
        </li>
        <li>
          <strong>Non-Personal Information:</strong> IP addresses, browser type,
          operating system, and browsing behavior through cookies and analytics
          tools.
        </li>
        <li>
          <strong>Application & Business Information:</strong> If you apply for
          incubation, we may collect business-related details, including company
          name, business plans, and funding details.
        </li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We use the collected data to:</p>
      <ul>
        <li>Provide and manage incubation services and programs.</li>
        <li>Respond to inquiries and provide customer support.</li>
        <li>Improve website functionality and user experience.</li>
        <li>Analyze website traffic and trends for optimization.</li>
        <li>Comply with legal and regulatory obligations.</li>
      </ul>

      <h2>Information Sharing & Disclosure</h2>
      <p>
        We do not sell, rent, or trade your personal information. However, we
        may share data with:
      </p>
      <ul>
        <li>
          <strong>University Affiliates & Partners:</strong> To facilitate
          incubation programs and business development.
        </li>
        <li>
          <strong>Service Providers:</strong> Third-party vendors who assist in
          website management, analytics, or communication services.
        </li>
        <li>
          <strong>Legal Authorities:</strong> If required by law, court order,
          or to protect our rights and interests.
        </li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We implement appropriate security measures to protect your personal
        information. However, no method of transmission over the internet is
        100% secure, and we cannot guarantee absolute security.
      </p>

      <h2>Cookies & Tracking Technologies</h2>
      <p>
        Our website may use cookies and tracking technologies to enhance user
        experience. You can manage cookie preferences through your browser
        settings.
      </p>

      <h2>Third-Party Content</h2>
      <p>
        Our website may contain links to third-party websites. We are not
        responsible for their privacy policies or content. Please review their
        policies before providing any information.
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain your information as long as necessary to fulfill the purposes
        outlined in this policy or as required by law.
      </p>

      <h2>Your Rights & Choices</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access, update, or correct your personal information.</li>
        <li>Withdraw consent for marketing communications.</li>
        <li>
          Request the deletion of your data, subject to legal obligations.
        </li>
      </ul>

      <h2>Updates to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The latest version
        will be posted on our website with the effective date.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions or concerns regarding this Privacy Policy,
        please contact us:
      </p>

      <div className="contact-details">
        <strong>GUITAR Council</strong>
        <br />
        Event Room, Second Floor, <br />
        Anviksha - GSFC University <br />
        <strong>Email:</strong>{" "}
        <a href="mailto:guiitar@gsfcuniversity.ac.in">
          guiitar@gsfcuniversity.ac.in
        </a>{" "}
        <br />
        <strong>Phone:</strong> +91 93132 62712
      </div>
    </div>
  );
}

export default Privacy;
