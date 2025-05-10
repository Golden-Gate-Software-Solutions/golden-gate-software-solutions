export const content = {
  navigation: {
    menuItems: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Contact', href: '/contact' },
    ],
    branding: {
      line1: 'Golden Gate',
      line2: 'Software Solutions',
    },
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Golden Gate Software Solutions. All rights reserved.`,
    contactLink: {
      label: 'Contact Us',
      href: '/contact',
    },
  },
  landing: {
    hero: {
      title: 'Websites That Win You Business',
      description: 'We design fast, modern websites that help you stand out, attract more customers, and turn visitors into loyal clients — all without the tech headaches.',
      primaryCTA: {
        text: 'Get Started',
        href: '/contact',
      },
      secondaryCTA: {
        text: 'Our Services',
        href: '/services',
      },
      backgroundImage: 'https://goldengatesoftwaresolutions.com/ggss_hero.webp',
    },
  },
  services: {
    heroHeading: 'Our Services',
    servicesList: [
      {
        title: 'Custom Web Development',
        description: 'Modern, responsive websites built with the latest technologies to deliver exceptional user experiences.',
        icon: 'MdWeb',
      },
      {
        title: 'Full-Stack Development',
        description: 'End-to-end solutions that seamlessly integrate front-end interfaces with robust back-end systems.',
        icon: 'MdCode',
      },
      {
        title: 'Performance Optimization',
        description: 'Speed up your existing applications and ensure they run smoothly across all devices.',
        icon: 'MdSpeed',
      },
      {
        title: 'Application Maintenance',
        description: 'Regular updates and maintenance to keep your applications secure and running efficiently.',
        icon: 'MdAutorenew',
      },
      {
        title: 'Security Implementation',
        description: 'Implement best-practice security measures to protect your applications and user data.',
        icon: 'MdSecurity',
      },
    ],
    cta: {
      text: 'Ready to start your next project?',
      button: {
        label: 'Get in Touch',
        href: '/contact',
      },
    },
  },
  about: {
    heroHeading: 'About Us',
    heading: 'About Us',
    description: 'Golden Gate Software Solutions is a San Francisco-based development company dedicated to crafting exceptional digital experiences.',
    story: {
      image: {
        src: '/ggb.jpg',
        alt: 'San Francisco Golden Gate Bridge',
      },
      heading: 'Our Story',
      paragraphs: [
        'Founded in the heart of San Francisco, Golden Gate Software Solutions emerged from a vision to bridge the gap between innovative ideas and technological excellence.',
        'Our team combines Silicon Valley expertise with a commitment to delivering solutions that empower businesses to thrive in the digital age.',
        'We specialize in creating custom web applications, e-commerce platforms, and enterprise solutions that help our clients achieve their business objectives.',
      ],
    },
    valuesHeading: 'Our Values',
    values: [
      {
        title: 'Innovation',
        description: 'We stay ahead of the curve, embracing cutting-edge technologies to deliver modern solutions that drive business growth.',
        icon: 'MdLightbulb',
      },
      {
        title: 'Performance',
        description: 'Speed and efficiency are at the core of everything we build, ensuring your applications run smoothly and reliably.',
        icon: 'MdSpeed',
      },
      {
        title: 'Security',
        description: 'We prioritize the security of your data and applications, implementing industry-leading practices and protocols.',
        icon: 'MdSecurity',
      },
    ],
    cta: {
      heading: 'Ready to Build Something Amazing?',
      description: `Let's work together to bring your vision to life.`,
      button: {
        label: 'Get in Touch',
        href: '/contact',
      },
    },
  },
  contact: {
    heading: "Hi there, let's chat!",
    methods: [
      {
        type: "email",
        text: "hello@goldengatesoftwaresolutions.com"
      },
      {
        type: "phone",
        text: "(415) 761-3680"
      },
      {
        type: "location",
        text: "San Francisco, CA"
      }
    ]
  }
};
