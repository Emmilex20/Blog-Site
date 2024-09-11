import React from "react";

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <p className="text-lg mb-4">
          <strong>Effective Date:</strong> {currentDate}
        </p>
        <p className="text-base mb-4">
          Welcome to <strong>Stateside Scoop</strong> ("we," "us," "our"). This Privacy Policy
          outlines how we collect, use, and protect your information when you
          visit our website <strong>statesidescoop.com</strong> ("Site"). By using our Site, you
          agree to the terms of this Privacy Policy.
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          1. Information We Collect
        </h2>
        <p className="text-base mb-4">
          We may collect information about you in a variety of ways. The
          information we may collect includes:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">
            <strong>Personal Data:</strong> Personally identifiable information,
            such as your name, shipping address, email address, and telephone
            number, and demographic information, that you voluntarily give to us
            when you register with the Site or when you choose to participate in
            various activities related to the Site.
          </li>
          <li className="mb-2">
            <strong>Derivative Data:</strong> Information our servers
            automatically collect when you access the Site, such as your IP
            address, your browser type, your operating system, your access
            times, and the pages you have previously visited.
          </li>
          <li className="mb-2">
            <strong>Financial Data:</strong> Financial information, such as data
            related to your payment method (e.g., valid credit card number, card
            brand, expiration date) that we may collect when you purchase,
            order, return, exchange, or request information about our services
            from the Site.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">
          2. Use of Your Information
        </h2>
        <p className="text-base mb-4">
          Having accurate information about you permits us to provide you with a
          smooth, efficient, and customized experience. Specifically, we may use
          information collected about you via the Site to:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">
            Assist law enforcement and respond to subpoenas.
          </li>
          <li className="mb-2">
            Compile anonymous statistical data and analysis for use internally
            or with third parties.
          </li>
          <li className="mb-2">
            Deliver targeted advertising, coupons, newsletters, and other
            information regarding promotions and the Site to you.
          </li>
          <li className="mb-2">Email you regarding your account or order.</li>
          <li className="mb-2">
            Monitor and analyze usage and trends to improve your experience with
            the Site.
          </li>
          <li className="mb-2">Notify you of updates to the Site.</li>
          <li className="mb-2">Perform other business activities as needed.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">
          3. Disclosure of Your Information
        </h2>
        <p className="text-base mb-4">
          We may share information we have collected about you in certain
          situations. Your information may be disclosed as follows:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">
            <strong>By Law or to Protect Rights:</strong> If we believe the
            release of information about you is necessary to respond to legal
            process, to investigate or remedy potential violations of our
            policies, or to protect the rights, property, and safety of others,
            we may share your information as permitted or required by any
            applicable law, rule, or regulation.
          </li>
          <li className="mb-2">
            <strong>Business Transfers:</strong> We may share or transfer your
            information in connection with, or during negotiations of, any
            merger, sale of company assets, financing, or acquisition of all or
            a portion of our business to another company.
          </li>
          <li className="mb-2">
            <strong>Third-Party Service Providers:</strong> We may share your
            information with third-party service providers that perform services
            for us or on our behalf, such as payment processing, data analysis,
            email delivery, hosting services, customer service, and marketing
            assistance.
          </li>
          <li className="mb-2">
            <strong>Affiliates:</strong> We may share your information with our
            affiliates, in which case we will require those affiliates to honor
            this privacy policy. Affiliates include our parent company and any
            other subsidiaries, joint venture partners, or other companies that
            we control or that are under common control with us.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">
          4. Security of Your Information
        </h2>
        <p className="text-base mb-4">
          We use administrative, technical, and physical security measures to
          help protect your personal information. While we have taken reasonable
          steps to secure the personal information you provide to us, please be
          aware that despite our efforts, no security measures are perfect or
          impenetrable, and no method of data transmission can be guaranteed
          against any interception or other type of misuse.
        </p>
        <h2 className="text-2xl font-semibold mb-4">5. Policy for Children</h2>
        <p className="text-base mb-4">
          We do not knowingly solicit information from or market to children
          under the age of 13. If we learn that we have collected personal
          information from a child under age 13 without verification of parental
          consent, we will delete that information as quickly as possible.
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          6. Changes to This Privacy Policy
        </h2>
        <p className="text-base mb-4">
          We may update this privacy policy from time to time in order to
          reflect, for example, changes to our practices or for other
          operational, legal, or regulatory reasons. We will notify you of any
          changes by posting the new privacy policy on this page and updating
          the effective date at the top of this policy.
        </p>
        <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
        <p className="text-base mb-4">
          If you have questions or comments about this privacy policy, please
          contact us at:
        </p>
        <p className="text-base mb-4">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:aginaemmanuel6@gmail.com"
            className="text-blue-600 hover:underline"
          >
            aginaemmanuel6@gmail.com
          </a>
        </p>
        <p className="text-base mb-4">
          <strong>Phone:</strong>{" "}
          <a href="tel:+1234567890" className="text-blue-600 hover:underline">
            (+234) 913-206-2212
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
