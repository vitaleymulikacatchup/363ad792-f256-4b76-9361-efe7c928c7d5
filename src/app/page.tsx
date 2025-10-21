"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Code, HelpCircle, Rocket, Shield, Sparkles, Star, Users } from "lucide-react";

const assetMap: { id: string; url: string; alt?: string }[] = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/7688173/pexels-photo-7688173.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A diverse group of professionals engage in a collaborative team meeting in a stylish office environment."},
  {"id":"about-image","url":"https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Engineers collaborating on a car project in a modern automotive workshop using advanced technology."},
  {"id":"service-web-dev","url":"https://images.pexels.com/photos/4974922/pexels-photo-4974922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Top view of young programmer working on multiple laptops in a modern office setting."},
  {"id":"service-mobile-app","url":"https://images.pexels.com/photos/7947951/pexels-photo-7947951.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Hands holding a smartphone displaying business stages in a cozy indoor setting."},
  {"id":"service-cloud-solutions","url":"https://images.pexels.com/photos/17323801/pexels-photo-17323801.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A modern server room featuring network equipment with blue illumination. Ideal for technology themes."},
  {"id":"service-consulting","url":"https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Business professionals discussing data charts and graphs in a modern office setting."},
  {"id":"team-member-1","url":"https://images.pexels.com/photos/3776969/pexels-photo-3776969.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Confident engineer in suit and hard hat, ready for construction project."},
  {"id":"team-member-2","url":"https://images.pexels.com/photos/7606019/pexels-photo-7606019.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"An adult man focused on remote work using a laptop in a stylish bedroom office."},
  {"id":"team-member-3","url":"https://images.pexels.com/photos/5990030/pexels-photo-5990030.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A diverse group of professionals engaged in a dynamic meeting in a modern office environment."},
  {"id":"team-member-4","url":"https://images.pexels.com/photos/3862599/pexels-photo-3862599.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A woman engineer focuses on software analysis using a laptop indoors."},
  {"id":"testimonial-1","url":"https://images.pexels.com/photos/3755824/pexels-photo-3755824.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Young businesswoman using smartphone indoors with confident expression. Modern and professional setting."},
  {"id":"testimonial-2","url":"https://images.pexels.com/photos/9301461/pexels-photo-9301461.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A cheerful young man in a white shirt smiling at his desk in a modern office environment."},
  {"id":"testimonial-3","url":"https://images.pexels.com/photos/8528742/pexels-photo-8528742.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Businesswoman in a light blazer sitting at a desk with a laptop, exuding confidence in a modern office."},
  {"id":"testimonial-4","url":"https://images.pexels.com/photos/5716042/pexels-photo-5716042.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Businesswoman presenting data on a large digital screen in a modern office setting."},
  {"id":"testimonial-5","url":"https://images.pexels.com/photos/6896322/pexels-photo-6896322.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A portrait of a man wearing a scarf indoors, capturing a theatrical ambiance."},
  {"id":"microsoft-logo","url":"https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Interior view of Microsoft office with logo on wooden wall in Brussels, Belgium."},
  {"id":"google-logo","url":"https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A vibrant retro Apple logo with rainbow colors on a sleek black background."},
  {"id":"amazon-logo","url":"https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A vibrant retro Apple logo with rainbow colors on a sleek black background."},
  {"id":"apple-logo","url":"https://images.pexels.com/photos/9949426/pexels-photo-9949426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Vibrant Apple logo design featuring rainbow colors on a white background."},
  {"id":"netflix-logo","url":"https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A couple enjoys streaming shows on a large TV in a cozy, brick-walled living room."},
  {"id":"spotify-logo","url":"https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A vibrant retro Apple logo with rainbow colors on a sleek black background."},
  {"id":"adobe-logo","url":"https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A vibrant retro Apple logo with rainbow colors on a sleek black background."}
];

function resolveAsset(assetId: string): { url: string; alt: string } {
  const _a = assetMap.find(a => a.id === assetId);
  const resolvedUrl = _a?.url ?? "/public/images/placeholder.webp";
  const resolvedAlt = _a?.alt ?? "Decorative image";
  return { url: resolvedUrl, alt: resolvedAlt };
}

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            {name: "About", id: "about"},
            {name: "Services", id: "services"},
            {name: "Team", id: "team"},
            {name: "Testimonials", id: "testimonials"},
            {name: "Contact", id: "contact"}
          ]}
          brandName="TechFlow Solutions"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Transform Your Business with Custom Software Solutions"
          description="We deliver cutting-edge web applications, mobile apps, and cloud solutions that drive growth and innovation for forward-thinking companies."
          tag="Innovation Driven"
          tagIcon={Sparkles}
          buttons={[
            {text: "Start Your Project", href: "contact"},
            {text: "View Our Work", href: "services"}
          ]}
          imageSrc={resolveAsset("hero-image").url}
          imageAlt={resolveAsset("hero-image").alt}
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About TechFlow"
          description={[
            "We're a team of passionate software engineers, designers, and strategists who believe technology should amplify human potential.",
            "Since 2018, we've helped over 200 companies transform their operations through custom software solutions, from startups to Fortune 500 enterprises."
          ]}
          buttons={[
            {text: "Learn More", href: "team"},
            {text: "Get in Touch", href: "contact"}
          ]}
          showBorder={true}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardOne
          title="Our Services"
          description="Comprehensive technology solutions tailored to your business needs, from initial concept to deployment and beyond."
          tag="Services"
          tagIcon={Code}
          features={[
            {
              title: "Web Development",
              description: "Custom web applications built with modern frameworks like React, Next.js, and Node.js. Scalable, secure, and optimized for performance.",
              imageSrc: resolveAsset("service-web-dev").url,
              imageAlt: resolveAsset("service-web-dev").alt,
              button: {text: "Learn More", href: "contact"}
            },
            {
              title: "Mobile App Development",
              description: "Native and cross-platform mobile applications for iOS and Android. User-centric design meets powerful functionality.",
              imageSrc: resolveAsset("service-mobile-app").url,
              imageAlt: resolveAsset("service-mobile-app").alt,
              button: {text: "Learn More", href: "contact"}
            },
            {
              title: "Cloud Solutions",
              description: "Cloud migration, infrastructure setup, and DevOps automation. Scale your applications with confidence and reliability.",
              imageSrc: resolveAsset("service-cloud-solutions").url,
              imageAlt: resolveAsset("service-cloud-solutions").alt,
              button: {text: "Learn More", href: "contact"}
            },
            {
              title: "Technology Consulting",
              description: "Strategic technology guidance and architecture planning. Make informed decisions about your tech stack and roadmap.",
              imageSrc: resolveAsset("service-consulting").url,
              imageAlt: resolveAsset("service-consulting").alt,
              button: {text: "Learn More", href: "contact"}
            }
          ]}
          layout="default"
          carouselMode="buttons"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Meet Our Expert Team"
          description="Talented professionals with diverse backgrounds in software development, design, and technology leadership."
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "Lead Software Engineer",
              imageSrc: resolveAsset("team-member-1").url,
              imageAlt: resolveAsset("team-member-1").alt,
              socialLinks: [
                {icon: "Linkedin", url: "https://linkedin.com/in/sarahchen"},
                {icon: "Github", url: "https://github.com/sarahchen"}
              ]
            },
            {
              id: "2",
              name: "Marcus Rodriguez",
              role: "Full Stack Developer",
              imageSrc: resolveAsset("team-member-2").url,
              imageAlt: resolveAsset("team-member-2").alt,
              socialLinks: [
                {icon: "Linkedin", url: "https://linkedin.com/in/marcusrodriguez"},
                {icon: "Twitter", url: "https://twitter.com/marcusdev"}
              ]
            },
            {
              id: "3",
              name: "Emily Thompson",
              role: "Project Manager",
              imageSrc: resolveAsset("team-member-3").url,
              imageAlt: resolveAsset("team-member-3").alt,
              socialLinks: [
                {icon: "Linkedin", url: "https://linkedin.com/in/emilythompson"}
              ]
            },
            {
              id: "4",
              name: "David Kim",
              role: "UX/UI Designer",
              imageSrc: resolveAsset("team-member-4").url,
              imageAlt: resolveAsset("team-member-4").alt,
              socialLinks: [
                {icon: "Linkedin", url: "https://linkedin.com/in/davidkim"},
                {icon: "Globe", url: "https://davidkim.design"}
              ]
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Real feedback from companies who've transformed their business with our technology solutions."
          tag="Success Stories"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Michael Zhang",
              role: "CEO",
              company: "InnovateTech Solutions",
              rating: 5,
              imageSrc: resolveAsset("testimonial-1").url,
              imageAlt: resolveAsset("testimonial-1").alt
            },
            {
              id: "2",
              name: "Jessica Brown",
              role: "CTO",
              company: "StartupHub Inc",
              rating: 5,
              imageSrc: resolveAsset("testimonial-2").url,
              imageAlt: resolveAsset("testimonial-2").alt
            },
            {
              id: "3",
              name: "Robert Johnson",
              role: "VP Engineering",
              company: "TechForward Corp",
              rating: 5,
              imageSrc: resolveAsset("testimonial-3").url,
              imageAlt: resolveAsset("testimonial-3").alt
            },
            {
              id: "4",
              name: "Amanda Williams",
              role: "Product Director",
              company: "NextGen Systems",
              rating: 5,
              imageSrc: resolveAsset("testimonial-4").url,
              imageAlt: resolveAsset("testimonial-4").alt
            },
            {
              id: "5",
              name: "James Martinez",
              role: "Operations Manager",
              company: "ScaleTech Ltd",
              rating: 5,
              imageSrc: resolveAsset("testimonial-5").url,
              imageAlt: resolveAsset("testimonial-5").alt
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join hundreds of companies that trust us to deliver exceptional software solutions."
          tag="Partners"
          tagIcon={Shield}
          logos={[
            resolveAsset("microsoft-logo").url,
            resolveAsset("google-logo").url,
            resolveAsset("amazon-logo").url,
            resolveAsset("apple-logo").url,
            resolveAsset("netflix-logo").url,
            resolveAsset("spotify-logo").url,
            resolveAsset("adobe-logo").url
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about our services, process, and how we can help your business succeed."
          tag="FAQ"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What technologies do you specialize in?",
              content: "We work with modern technologies including React, Next.js, Node.js, Python, AWS, Docker, and more. We choose the best tech stack based on your specific project requirements and goals."
            },
            {
              id: "2",
              title: "How long does a typical project take?",
              content: "Project timelines vary based on complexity and scope. Simple web applications take 4-8 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during our initial consultation."
            },
            {
              id: "3",
              title: "Do you provide ongoing support and maintenance?",
              content: "Yes, we offer comprehensive post-launch support including bug fixes, security updates, feature enhancements, and performance monitoring. We have flexible maintenance packages to suit your needs."
            },
            {
              id: "4",
              title: "What is your development process?",
              content: "We follow an agile development approach with regular client communication, weekly demos, and iterative improvements. This ensures transparency and allows for feedback throughout the development cycle."
            },
            {
              id: "5",
              title: "Can you help with cloud migration?",
              content: "Absolutely. We specialize in cloud migration services including AWS, Azure, and Google Cloud. We handle everything from planning and architecture to implementation and optimization."
            },
            {
              id: "6",
              title: "What are your pricing models?",
              content: "We offer flexible pricing including fixed-price projects, hourly rates, and dedicated team arrangements. Pricing depends on project scope, timeline, and technology requirements. Contact us for a detailed quote."
            }
          ]}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={Rocket}
          title="Ready to Transform Your Business?"
          description="Let's discuss your project requirements and how we can help you achieve your technology goals."
          inputPlaceholder="Enter your email address"
          buttonText="Start Project"
          termsText="By submitting, you agree to our Terms of Service and Privacy Policy."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="TechFlow Solutions"
          columns={[
            {
              items: [
                {label: "About Us", href: "about"},
                {label: "Our Services", href: "services"},
                {label: "Case Studies", href: "testimonials"}
              ]
            },
            {
              items: [
                {label: "Web Development", href: "services"},
                {label: "Mobile Apps", href: "services"},
                {label: "Cloud Solutions", href: "services"}
              ]
            },
            {
              items: [
                {label: "Contact", href: "contact"},
                {label: "Support", href: "contact"},
                {label: "Careers", href: "team"}
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}