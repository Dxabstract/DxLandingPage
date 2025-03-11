const TermsAndConditions = () => {
  // Define styles
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
      color: '#white',
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    mainTitle: {
      fontSize: '32px',
      marginBottom: '15px',
      color: 'blue',
    },
    lastUpdated: {
      fontSize: '14px',
      marginBottom: '30px',
      color: '#7f8c8d',
    },
    sectionTitle: {
      fontSize: '24px',
      marginTop: '40px',
      marginBottom: '20px',
      borderBottom: '1px solid #e0e0e0',
      paddingBottom: '10px',
      color: 'blue',
    },
    subSectionTitle: {
      fontSize: '20px',
      marginTop: '25px',
      marginBottom: '15px',
      color: '#34495e',
    },
    paragraph: {
      marginBottom: '20px',
    },
    link: {
      color: '#3498db',
      textDecoration: 'none',
    },
    tableOfContents: {
      backgroundColor: '#f9f9f9',
      padding: '20px',
      borderRadius: '5px',
      marginBottom: '30px',
    },
    tocTitle: {
      marginBottom: '15px',
    },
    tocLink: {
      display: 'block',
      padding: '5px 0',
      color: '#3498db',
      textDecoration: 'none',
    },
    tocLinkHover: {
      textDecoration: 'underline',
    },
    listItem: {
      marginBottom: '10px',
      marginLeft: '20px',
    },
    contactInfo: {
      backgroundColor: '#f8f9fa',
      padding: '20px',
      borderRadius: '5px',
      marginTop: '30px',
    },
    strong: {
      fontWeight: 'bold',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.mainTitle}>TERMS AND CONDITIONS</h1>
        <div style={styles.lastUpdated}>
          <strong>Last updated</strong> <strong>March 09, 2025</strong>
        </div>
      </div>

      <div>
        <h2 style={styles.sectionTitle}>AGREEMENT TO OUR LEGAL TERMS</h2>
      </div>
      <div>
        <div id="agreement"></div>
      </div>
      <div>
        <div style={styles.paragraph}>
          We are DxAbstract (<strong>"Company"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, <strong>"our"</strong>), a company registered in Colombia at Calle 78#37-15, Pereira, Risaralda 660003.
        </div>
      </div>
      
      <div style={styles.paragraph}>
        We operate the mobile application DxSales (the <strong>"App"</strong>), as well as any other related products and services that refer or link to these legal terms (the <strong>"Legal Terms"</strong>) (collectively, the <strong>"Services"</strong>).
      </div>
      
      <div style={styles.paragraph}>
        You can contact us by phone at 3183988102, email at dxabstract@gmail.com, or by mail to Calle 78#37-15, Pereira, Risaralda 660003, Colombia.
      </div>
      
      <div style={styles.paragraph}>
        These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity (<strong>"you"</strong>), and DxAbstract, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
      </div>
      
      <div style={styles.paragraph}>
        Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms at any time and for any reason. We will alert you about any changes by updating the <strong>"Last updated"</strong> date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.
      </div>

      <div style={styles.paragraph}>
        The Services are intended for users who are at least 13 years of age. All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Services. If you are a minor, you must have your parent or guardian read and agree to these Legal Terms prior to you using the Services.
      </div>
      
      <div style={styles.paragraph}>
        We recommend that you print a copy of these Legal Terms for your records.
      </div>

      <div style={styles.tableOfContents}>
        <h2 style={styles.tocTitle}>TABLE OF CONTENTS</h2>
        <a href="#services" style={styles.tocLink}>1. OUR SERVICES</a>
        <a href="#ip" style={styles.tocLink}>2. INTELLECTUAL PROPERTY RIGHTS</a>
        <a href="#userreps" style={styles.tocLink}>3. USER REPRESENTATIONS</a>
        <a href="#purchases" style={styles.tocLink}>4. PURCHASES AND PAYMENT</a>
        <a href="#subscriptions" style={styles.tocLink}>5. SUBSCRIPTIONS</a>
        <a href="#prohibited" style={styles.tocLink}>6. PROHIBITED ACTIVITIES</a>
        <a href="#ugc" style={styles.tocLink}>7. USER GENERATED CONTRIBUTIONS</a>
        <a href="#license" style={styles.tocLink}>8. CONTRIBUTION LICENSE</a>
        <a href="#mobile" style={styles.tocLink}>9. MOBILE APPLICATION LICENSE</a>
        <a href="#sitemanage" style={styles.tocLink}>10. SERVICES MANAGEMENT</a>
        <a href="#ppyes" style={styles.tocLink}>11. PRIVACY POLICY</a>
        <a href="#terms" style={styles.tocLink}>12. TERM AND TERMINATION</a>
        <a href="#modifications" style={styles.tocLink}>13. MODIFICATIONS AND INTERRUPTIONS</a>
        <a href="#law" style={styles.tocLink}>14. GOVERNING LAW</a>
        <a href="#disputes" style={styles.tocLink}>15. DISPUTE RESOLUTION</a>
        <a href="#corrections" style={styles.tocLink}>16. CORRECTIONS</a>
        <a href="#disclaimer" style={styles.tocLink}>17. DISCLAIMER</a>
        <a href="#liability" style={styles.tocLink}>18. LIMITATIONS OF LIABILITY</a>
        <a href="#indemnification" style={styles.tocLink}>19. INDEMNIFICATION</a>
        <a href="#userdata" style={styles.tocLink}>20. USER DATA</a>
        <a href="#electronic" style={styles.tocLink}>21. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</a>
        <a href="#misc" style={styles.tocLink}>22. MISCELLANEOUS</a>
        <a href="#contact" style={styles.tocLink}>23. CONTACT US</a>
      </div>

      {/* Continue with the rest of the content using the defined styles */}
      <div id="services">
        <h2 style={styles.sectionTitle}>1. OUR SERVICES</h2>
        <div style={styles.paragraph}>
          The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
        </div>
      </div>

      <div id="ip">
        <h2 style={styles.sectionTitle}>2. INTELLECTUAL PROPERTY RIGHTS</h2>
        <div>
          <h3 style={styles.subSectionTitle}>Our intellectual property</h3>
          <div style={styles.paragraph}>
            We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the <strong>"Content"</strong>), as well as the trademarks, service marks, and logos contained therein (the <strong>"Marks"</strong>).
          </div>

          <div style={styles.paragraph}>
            Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties around the world.
          </div>

          <div style={styles.paragraph}>
            The Content and Marks are provided in or through the Services <strong>"AS IS"</strong> for your personal, non-commercial use or internal business purpose only.
          </div>

          <h3 style={styles.subSectionTitle}>Your use of our Services</h3>
          <div style={styles.paragraph}>
            Subject to your compliance with these Legal Terms, including the <a href="#prohibited" style={styles.link}>PROHIBITED ACTIVITIES</a> section below, we grant you a non-exclusive, non-transferable, revocable license to:
          </div>
          <ul>
            <li style={styles.listItem}>access the Services; and</li>
            <li style={styles.listItem}>download or print a copy of any portion of the Content to which you have properly gained access,</li>
          </ul>
          <div style={styles.paragraph}>
            solely for your personal, non-commercial use or internal business purpose.
          </div>

          <div style={styles.paragraph}>
            Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
          </div>

          <div style={styles.paragraph}>
            If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: dxabstract@gmail.com. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.
          </div>
        </div>
      </div>

      <div style={styles.paragraph}>
        We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.
      </div>

      <div style={styles.paragraph}>
        Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.
      </div>

      <div id="userreps">
        <h2 style={styles.sectionTitle}>3. USER REPRESENTATIONS</h2>
        <div style={styles.paragraph}>
          By using the Services, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Legal Terms; (2) you are not under the age of 13; (3) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Services; (4) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (5) you will not use the Services for any illegal or unauthorized purpose; and (6) your use of the Services will not violate any applicable law or regulation.
        </div>
      </div>

      <div style={styles.paragraph}>
        If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).
      </div>

      <div id="purchases">
        <h2 style={styles.sectionTitle}>4. PURCHASES AND PAYMENT</h2>
        <div style={styles.paragraph}>
          We accept the following forms of payment:
        </div>
        <div style={styles.paragraph}>
          - Visa
        </div>
        <div style={styles.paragraph}>
          - Mastercard
        </div>
        <div style={styles.paragraph}>
          - American Express
        </div>
        <div style={styles.paragraph}>
          You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in COP.
        </div>
      </div>

      <div style={styles.paragraph}>
        You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.
      </div>

      <div style={styles.paragraph}>
        We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers, or distributors.
      </div>

      <div id="subscriptions">
        <h2 style={styles.sectionTitle}>5. SUBSCRIPTIONS</h2>
        <h3 style={styles.subSectionTitle}>Billing and Renewal</h3>
        <div style={styles.paragraph}>
          Subscriptions will not be renewed automatically. We will contact you by email prior to expiry to ask if you wish to renew your subscription and communicate the cost of renewing your subscription.
        </div>
        <h3 style={styles.subSectionTitle}>Free Trial</h3>
        <div style={styles.paragraph}>
          We offer a 15-day free trial to new users who register with the Services. The account will not be charged and the subscription will be suspended until upgraded to a paid version at the end of the free trial.
        </div>
        <h3 style={styles.subSectionTitle}>Cancellation</h3>
        <div style={styles.paragraph}>
          All purchases are non-refundable. You can cancel your subscription at any time by contacting us using the contact information provided below. Your cancellation will take effect at the end of the current paid term. If you have any questions or are unsatisfied with our Services, please email us at dxabstract@gmail.com.
        </div>
        <h3 style={styles.subSectionTitle}>Fee Changes</h3>
        <div style={styles.paragraph}>
          We may, from time to time, make changes to the subscription fee and will communicate any price changes to you in accordance with applicable law.
        </div>
      </div>

      <div id="prohibited">
        <h2 style={styles.sectionTitle}>6. PROHIBITED ACTIVITIES</h2>
        <div style={styles.paragraph}>
          You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
        </div>
        <div style={styles.paragraph}>
          As a user of the Services, you agree not to:
        </div>
        <ul>
          <li style={styles.listItem}>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
          <li style={styles.listItem}>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
          <li style={styles.listItem}>Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.</li>
          <li style={styles.listItem}>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
          <li style={styles.listItem}>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
          <li style={styles.listItem}>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
          <li style={styles.listItem}>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
          <li style={styles.listItem}>Engage in unauthorized framing of or linking to the Services.</li>
          <li style={styles.listItem}>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.</li>
          <li style={styles.listItem}>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
          <li style={styles.listItem}>Delete the copyright or other proprietary rights notice from any Content.</li>
          <li style={styles.listItem}>Attempt to impersonate another user or person or use the username of another user.</li>
          <li style={styles.listItem}>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ("gifs"), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as "spyware" or "passive collection mechanisms" or "pcms").</li>
          <li style={styles.listItem}>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li>
          <li style={styles.listItem}>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</li>
          <li style={styles.listItem}>Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.</li>
          <li style={styles.listItem}>Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
          <li style={styles.listItem}>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.</li>
          <li style={styles.listItem}>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.</li>
          <li style={styles.listItem}>Use a buying agent or purchasing agent to make purchases on the Services.</li>
          <li style={styles.listItem}>Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
          <li style={styles.listItem}>Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
          <li style={styles.listItem}>Use the Services to advertise or offer to sell goods and services.</li>
          <li style={styles.listItem}>Sell or otherwise transfer your profile.</li>
        </ul>
      </div>

      <div id="ugc">
        <h2 style={styles.sectionTitle}>7. USER GENERATED CONTRIBUTIONS</h2>
        <div style={styles.paragraph}>
          The Services does not offer users to submit or post content.
        </div>
      </div>

      <div id="license">
        <h2 style={styles.sectionTitle}>8. CONTRIBUTION LICENSE</h2>
        <div style={styles.paragraph}>
          You and Services agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).
        </div>
        <div style={styles.paragraph}>
          By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.
        </div>
      </div>

      <div id="mobile">
        <h2 style={styles.sectionTitle}>9. MOBILE APPLICATION LICENSE</h2>
        <h3 style={styles.subSectionTitle}>Use License</h3>
        <div style={styles.paragraph}>
          If you access the Services via the App, then we grant you a revocable, non-exclusive, non-transferable, limited right to install and use the App on wireless electronic devices owned or controlled by you, and to access and use the App on such devices strictly in accordance with the terms and conditions of this mobile application license contained in these Legal Terms. You shall not: (1) except as permitted by applicable law, decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt the App; (2) make any modification, adaptation, improvement, enhancement, translation, or derivative work from the App; (3) violate any applicable laws, rules, or regulations in connection with your access or use of the App; (4) remove, alter, or obscure any proprietary notice (including any notice of copyright or trademark) posted by us or the licensors of the App; (5) use the App for any revenue-generating endeavor, commercial enterprise, or other purpose for which it is not designed or intended; (6) make the App available over a network or other environment permitting access or use by multiple devices or users at the same time; (7) use the App for creating a product, service, or software that is, directly or indirectly, competitive with or in any way a substitute for the App; (8) use the App to send automated queries to any website or to send any unsolicited commercial email; or (9) use any proprietary information or any of our interfaces or our other intellectual property in the design, development, manufacture, licensing, or distribution of any applications, accessories, or devices for use with the App.
        </div>
        <h3 style={styles.subSectionTitle}>Apple and Android Devices</h3>
        <div style={styles.paragraph}>
          The following terms apply when you use the App obtained from either the Apple Store or Google Play (each an "App Distributor") to access the Services: (1) the license granted to you for our App is limited to a non-transferable license to use the application on a device that utilizes the Apple iOS or Android operating systems, as applicable, and in accordance with the usage rules set forth in the applicable App Distributor’s terms of service; (2) we are responsible for providing any maintenance and support services with respect to the App as specified in the terms and conditions of this mobile application license contained in these Legal Terms or as otherwise required under applicable law, and you acknowledge that each App Distributor has no obligation whatsoever to furnish any maintenance and support services with respect to the App; (3) in the event of any failure of the App to conform to any applicable warranty, you may notify the applicable App Distributor, and the App Distributor, in accordance with its terms and policies, may refund the purchase price, if any, paid for the App, and to the maximum extent permitted by applicable law, the App Distributor will have no other warranty obligation whatsoever with respect to the App; (4) you represent and warrant that (i) you are not located in a country that is subject to a US government embargo, or that has been designated by the US government as a "terrorist supporting" country and (ii) you are not listed on any US government list of prohibited or restricted parties; (5) you must comply with applicable third-party terms of agreement when using the App, e.g., if you have a VoIP application, then you must not be in violation of their wireless data service agreement when using the App; and (6) you acknowledge and agree that the App Distributors are third-party beneficiaries of the terms and conditions in this mobile application license contained in these Legal Terms, and that each App Distributor will have the right (and will be deemed to have accepted the right) to enforce the terms and conditions in this mobile application license contained in these Legal Terms against you as a third-party beneficiary thereof.
        </div>
      </div>

      <div id="sitemanage">
        <h2 style={styles.sectionTitle}>10. SERVICES MANAGEMENT</h2>
        <div style={styles.paragraph}>
          We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.
        </div>
      </div>

      <div id="ppyes">
        <h2 style={styles.sectionTitle}>11. PRIVACY POLICY</h2>
        <div style={styles.paragraph}>
          We care about data privacy and security. Please review our Privacy Policy: <a href="https://www.privacypolicies.com/live/1a054620-fb33-41ac-830f-334c33e24fcb" style={styles.link}>https://www.privacypolicies.com/live/1a054620-fb33-41ac-830f-334c33e24fcb</a>. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms. Please be advised the Services are hosted in Colombia and United States. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in Colombia and United States, then through your continued use of the Services, you are transferring your data to Colombia and United States, and you expressly consent to have your data transferred to and processed in Colombia and United States.
        </div>
      </div>

      <div id="terms">
        <h2 style={styles.sectionTitle}>12. TERM AND TERMINATION</h2>
        <div style={styles.paragraph}>
          These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
        </div>
        <div style={styles.paragraph}>
          If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
        </div>
      </div>

      <div id="modifications">
        <h2 style={styles.sectionTitle}>13. MODIFICATIONS AND INTERRUPTIONS</h2>
        <div style={styles.paragraph}>
          We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.
        </div>
        <div style={styles.paragraph}>
          We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.
        </div>
      </div>

      <div id="law">
        <h2 style={styles.sectionTitle}>14. GOVERNING LAW</h2>
        <div style={styles.paragraph}>
          These Legal Terms shall be governed by and defined following the laws of Colombia. DxAbstract and yourself irrevocably consent that the courts of Colombia shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.
        </div>
      </div>

      <div id="disputes">
        <h2 style={styles.sectionTitle}>15. DISPUTE RESOLUTION</h2>
        <div style={styles.paragraph}>
          You agree to irrevocably submit all disputes related to these Legal Terms or the legal relationship established by these Legal Terms to the jurisdiction of the Colombia courts. DxAbstract shall also maintain the right to bring proceedings as to the substance of the matter in the courts of the country where you reside or, if these Legal Terms are entered into in the course of your trade or profession, the state of your principal place of business.
        </div>
      </div>

      <div id="corrections">
        <h2 style={styles.sectionTitle}>16. CORRECTIONS</h2>
        <div style={styles.paragraph}>
          There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
        </div>
      </div>

      <div id="disclaimer">
        <h2 style={styles.sectionTitle}>17. DISCLAIMER</h2>
        <div style={styles.paragraph}>
          THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
        </div>
      </div>

      <div id="liability">
        <h2 style={styles.sectionTitle}>18. LIMITATIONS OF LIABILITY</h2>
        <div style={styles.paragraph}>
          IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </div>
      </div>

      <div id="indemnification">
        <h2 style={styles.sectionTitle}>19. INDEMNIFICATION</h2>
        <div style={styles.paragraph}>
          You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.
        </div>
      </div>

      <div id="userdata">
        <h2 style={styles.sectionTitle}>20. USER DATA</h2>
        <div style={styles.paragraph}>
          We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
        </div>
      </div>

      <div id="electronic">
        <h2 style={styles.sectionTitle}>21. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h2>
        <div style={styles.paragraph}>
          Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.
        </div>
      </div>

      <div id="misc">
        <h2 style={styles.sectionTitle}>22. MISCELLANEOUS</h2>
        <div style={styles.paragraph}>
          These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.
        </div>
      </div>

      <div id="contact" style={styles.contactInfo}>
        <h2 style={styles.sectionTitle}>23. CONTACT US</h2>
        <div style={styles.lastUpdated}>
          In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
        </div>
        
        <div style={styles.lastUpdated}>
          <strong>DxAbstract</strong><br />
          <strong>Calle 78#37-15</strong><br />
          <strong>Pereira, Risaralda 660003</strong><br />
          <strong>Colombia</strong><br />
          <strong>Phone: 3183988102</strong><br />
          <strong>Email: dxabstract@gmail.com</strong>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;