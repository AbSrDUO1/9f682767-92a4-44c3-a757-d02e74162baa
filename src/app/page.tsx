"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'highlight' }}>
      <div id="nav" data-section="nav">
        <NavbarBase
          logoSrc="/images/logo.svg"
          logoAlt="Xeven Logo"
          leftButtonText="Menu"
          rightButtonText="Contact"
          onLeftButtonClick={() => console.log('Menu Clicked')}
          onRightButtonClick={() => console.log('Contact Clicked')}
          className="flex justify-between items-center px-5"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero
          title="Welcome to Xeven"
          subtitle="Empower your business with our innovative SaaS solutions."
          primaryButtonText="Get started"
          secondaryButtonText="Learn more"
          onPrimaryButtonClick={() => console.log('Getting started')}
          onSecondaryButtonClick={() => console.log('Learning more')}
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="About Xeven"
          descriptions={[
            "At Xeven, we revolutionize your workflow with cutting-edge SaaS solutions.",
            "Join our community of innovators and boost your productivity with us!",
            "Explore our features and discover how Xeven can transform your business."
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy Xeven"
          steps={[
            { title: "Step 1", description: "Visit our website to learn more about our offerings.", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Choose a plan that suits your needs and click 'Get Started'.", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Complete the signup process and watch your productivity soar!", image: "/images/placeholder3.avif", position: "right", isCenter: false }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics
          title="Xeven Tokenomics"
          description="Understanding our economic model is key to enjoying our services."
          cardItems={[
            { id: 1, title: "Supply", description: "1,000,000 XEVEN tokens available." },
            { id: 2, title: "Market Cap", description: "$1,000,000." },
            { id: 3, title: "Circulating Supply", description: "500,000 XEVEN tokens in circulation." }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logowhite.svg"
          logoAlt="Xeven"
          logoText="Xeven"
          className="bg-gray-900 text-white p-5"
          columns={[
            { title: "Links", items: [
              { label: "Home", onClick: () => console.log('Home') },
              { label: "Features", onClick: () => console.log('Features') },
              { label: "Pricing", onClick: () => console.log('Pricing') }
            ] },
            { title: "Support", items: [
              { label: "Contact", onClick: () => console.log('Contact') },
              { label: "FAQ", onClick: () => console.log('FAQ') },
              { label: "Terms", onClick: () => console.log('Terms') }
            ] }
          ]}
          copyrightText="© 2023 Xeven. All rights reserved."
          onPrivacyClick={() => console.log('Privacy Policy Clicked')}
        />
      </div>
    </SiteThemeProvider>
  );
}
