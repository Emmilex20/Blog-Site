import React from 'react';

// Helper function to get the current date
const getCurrentDate = () => {
  const today = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return today.toLocaleDateString(undefined, options);
};

const TermsOfService = () => {
  const effectiveDate = getCurrentDate();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Terms of Service</h1>
      <p className="text-lg mb-4">
        <strong>Effective Date: {effectiveDate}</strong>
      </p>
      <p className="mb-4">
        Welcome to <strong>Stateside Scoop</strong> ("we," "us," "our"). These Terms of Service govern your use of our website <strong>statesidescoop.com</strong> ("Site"). By accessing or using our Site, you agree to comply with and be bound by these Terms of Service. If you do not agree with these terms, please do not use our Site.
      </p>
      <h2 className="text-2xl font-semibold mb-4">1. Use of the Site</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Eligibility:</strong> You must be at least 18 years old to use our Site. By using our Site, you represent and warrant that you meet this age requirement.
        </li>
        <li>
          <strong>License:</strong> We grant you a limited, non-exclusive, non-transferable license to access and use our Site for personal, non-commercial purposes. You may not use our Site for any unlawful purpose or in a way that could damage, disable, overburden, or impair our Site.
        </li>
        <li>
          <strong>Prohibited Activities:</strong> You may not engage in any activity that interferes with or disrupts the functionality of our Site, including but not limited to hacking, spamming, or unauthorized access.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property</h2>
      <p className="mb-4">
        All content on our Site, including articles, images, and trademarks, is the property of <strong>Stateside Scoop</strong> or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or otherwise use our content without our prior written consent.
      </p>
      <h2 className="text-2xl font-semibold mb-4">3. User Contributions</h2>
      <p className="mb-4">
        By submitting content to our Site, including comments or articles, you grant us a perpetual, royalty-free, worldwide license to use, modify, and distribute your content. You are solely responsible for the content you submit and must ensure that it does not infringe on any third-party rights or violate any laws.
      </p>
      <h2 className="text-2xl font-semibold mb-4">4. Disclaimers</h2>
      <p className="mb-4">
        Our Site is provided "as is" and "as available" without any warranties of any kind, whether express or implied. We do not guarantee the accuracy, completeness, or reliability of any content on our Site. We are not responsible for any errors or omissions, or for any loss or damage arising from the use of our Site.
      </p>
      <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
      <p className="mb-4">
        To the fullest extent permitted by law, <strong>Stateside Scoop</strong> and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of our Site. Our total liability for any claim related to our Site shall not exceed the amount you paid, if any, for accessing our Site.
      </p>
      <h2 className="text-2xl font-semibold mb-4">6. Indemnification</h2>
      <p className="mb-4">
        You agree to indemnify, defend, and hold harmless <strong>Stateside Scoop</strong>, its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or related to your use of our Site or any violation of these Terms of Service.
      </p>
      <h2 className="text-2xl font-semibold mb-4">7. Changes to These Terms</h2>
      <p className="mb-4">
        We may update these Terms of Service from time to time. Any changes will be posted on this page with the updated effective date. Your continued use of our Site following any changes constitutes your acceptance of the revised Terms of Service.
      </p>
      <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
      <p className="mb-4">
      These Terms of Service are governed by and construed in accordance with the laws of Nigeria, without regard to its conflict of law principles. Any disputes arising from or related to these Terms of Service or your use of our Site shall be resolved exclusively in the courts located in Lagos, Nigeria.
      </p>
      <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about these Terms of Service, please contact us at:
      </p>
      <p className="mb-4">
        <strong>Email:</strong> <a href="mailto:aginaemmanuel6@gmail.com" className="text-blue-600 hover:underline">aginaemmanuel6@gmail.com</a>
      </p>
      <p>
        <strong>Address:</strong> 24 Road, G close. Festac, Lagos, Nigeria
      </p>
    </div>
  );
};

export default TermsOfService;
