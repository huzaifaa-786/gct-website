/**
 * GCT Bhakkar - Site Data Store
 * Central data store for college information
 */

const siteData = {
  // College Information
  college: {
    name: 'Government College of Technology',
    shortName: 'GCT Bhakkar',
    tagline: 'Excellence in Technical Education',
    established: 2005,
    address: 'GCT Campus, Main Road, Bhakkar, Punjab, Pakistan',
    phone: '+92 453 123456',
    email: 'info@gctbhakkar.edu.pk',
    website: 'https://gctbhakkar.edu.pk',
    workingHours: 'Monday - Friday: 8:00 AM - 4:00 PM'
  },

  // Social Media Links
  social: {
    facebook: 'https://facebook.com/gctbhakkar',
    twitter: 'https://twitter.com/gctbhakkar',
    instagram: 'https://instagram.com/gctbhakkar',
    linkedin: 'https://linkedin.com/school/gctbhakkar',
    youtube: 'https://youtube.com/@gctbhakkar'
  },

  // Navigation Structure
  navigation: [
    { name: 'Home', href: './index.html', icon: 'fa-home' },
    { name: 'About', href: './pages/about.html', icon: 'fa-info-circle' },
    {
      name: 'Programs',
      href: './pages/programs.html',
      icon: 'fa-graduation-cap',
      dropdown: [
        { name: 'Computer Information Technology', href: './pages/departments/cit.html' },
        { name: 'Electrical Technology', href: './pages/departments/electrical.html' },
        { name: 'Mechanical Technology', href: './pages/departments/mechanical.html' },
        { name: 'Civil Technology', href: './pages/departments/civil.html' },
        { name: 'Electronics Technology', href: './pages/departments/electronics.html' }
      ]
    },
    { name: 'Admissions', href: './pages/admissions.html', icon: 'fa-file-alt' },
    { name: 'Campus Life', href: './pages/campus-life.html', icon: 'fa-university' },
    { name: 'Contact', href: './pages/contact.html', icon: 'fa-envelope' }
  ],

  // Statistics
  stats: [
    { number: 2000, suffix: '+', label: 'Students Enrolled', icon: 'fa-users' },
    { number: 5, suffix: '', label: 'Technology Programs', icon: 'fa-laptop-code' },
    { number: 50, suffix: '+', label: 'Expert Faculty', icon: 'fa-chalkboard-teacher' },
    { number: 18, suffix: '+', label: 'Years of Excellence', icon: 'fa-award' }
  ],

  // Departments
  departments: [
    {
      id: 'cit',
      name: 'Computer Information Technology',
      shortName: 'CIT',
      icon: 'fa-laptop-code',
      color: '#2563eb',
      description: 'The Computer Information Technology department focuses on cutting-edge software development, network management, cybersecurity, and advanced computing technologies.',
      details: 'Students receive hands-on training in programming languages, database management, web development, and emerging tech trends.',
      duration: '3 Years',
      qualification: 'Matric with Science',
      careers: ['Software Developer', 'Network Administrator', 'Database Manager', 'Web Developer', 'IT Consultant']
    },
    {
      id: 'electrical',
      name: 'Electrical Technology',
      shortName: 'Electrical',
      icon: 'fa-bolt',
      color: '#f59e0b',
      description: 'Our Electrical Technology program provides in-depth knowledge of electrical systems, power generation, distribution, and renewable energy technologies.',
      details: 'Students learn about electrical design, control systems, microprocessors, and gain practical skills in electrical installation, maintenance, and industrial automation.',
      duration: '3 Years',
      qualification: 'Matric with Science',
      careers: ['Electrical Engineer', 'Power Systems Technician', 'Control Systems Specialist', 'Maintenance Engineer']
    },
    {
      id: 'mechanical',
      name: 'Mechanical Technology',
      shortName: 'Mechanical',
      icon: 'fa-cogs',
      color: '#10b981',
      description: 'The Mechanical Technology department offers comprehensive training in machine design, manufacturing processes, thermal engineering, and industrial maintenance.',
      details: 'Students learn CAD/CAM technologies, CNC programming, industrial robotics, and gain hands-on experience with advanced mechanical systems and precision engineering techniques.',
      duration: '3 Years',
      qualification: 'Matric with Science',
      careers: ['Mechanical Engineer', 'CAD/CAM Specialist', 'CNC Programmer', 'Production Manager', 'Quality Control Engineer']
    },
    {
      id: 'civil',
      name: 'Civil Technology',
      shortName: 'Civil',
      icon: 'fa-building',
      color: '#8b5cf6',
      description: 'The Civil Technology department prepares students for challenging roles in construction, infrastructure development, and environmental engineering.',
      details: 'Curriculum includes structural design, project management, surveying techniques, transportation engineering, and sustainable building practices with emphasis on modern construction technologies.',
      duration: '3 Years',
      qualification: 'Matric with Science',
      careers: ['Civil Engineer', 'Site Supervisor', 'Quantity Surveyor', 'Project Manager', 'Urban Planner']
    },
    {
      id: 'electronics',
      name: 'Electronics Technology',
      shortName: 'Electronics',
      icon: 'fa-microchip',
      color: '#ef4444',
      description: 'Electronics Technology program focuses on advanced electronic systems, circuit design, telecommunications, and embedded systems.',
      details: 'Students develop expertise in analog and digital electronics, microcontrollers, signal processing, IoT technologies, and receive practical training in electronic device fabrication and testing.',
      duration: '3 Years',
      qualification: 'Matric with Science',
      careers: ['Electronics Engineer', 'Embedded Systems Developer', 'Telecommunications Technician', 'PCB Designer']
    }
  ],

  // Fee Structure
  feeStructure: {
    morning: {
      name: 'Morning Shift',
      programs: [
        { name: 'Electronics', year1: 22000, year2: 20000, year3: 18000 },
        { name: 'Electrical', year1: 22000, year2: 20000, year3: 18000 },
        { name: 'Mechanical', year1: 22000, year2: 20000, year3: 18000 },
        { name: 'Civil', year1: 22000, year2: 20000, year3: 18000 }
      ]
    },
    evening: {
      name: 'Evening Shift / CIT',
      programs: [
        { name: 'Computer Information Technology', year1: 31000, year2: 29000, year3: 27000 },
        { name: 'Electrical (2nd Shift)', year1: 31000, year2: 29000, year3: 27000 }
      ]
    }
  },

  // Admission Requirements
  admissionRequirements: [
    { title: 'Age Limit', description: 'Minimum 15 years, Maximum 25 years (program dependent)', icon: 'fa-calendar-days' },
    { title: 'Education', description: 'Matric / Intermediate with Science subjects', icon: 'fa-graduation-cap' },
    { title: 'Minimum Marks', description: 'At least 50% marks in previous academic result', icon: 'fa-percent' },
    { title: 'Documents', description: 'CNIC/B-Form, Academic certificates, Domicile, Character certificate', icon: 'fa-file-alt' }
  ],

  // Facilities
  facilities: [
    { name: 'Modern Computer Labs', description: 'State-of-the-art computer labs with latest software', icon: 'fa-laptop-code' },
    { name: 'Equipped Workshops', description: 'Modern machinery and tools for hands-on training', icon: 'fa-tools' },
    { name: 'Library', description: 'Comprehensive collection of technical books and journals', icon: 'fa-book' },
    { name: 'Transport', description: 'Bus service covering multiple routes of the district', icon: 'fa-bus' },
    { name: 'Sports Facilities', description: 'Cricket ground, volleyball court, and indoor games', icon: 'fa-futbol' },
    { name: 'Canteen', description: 'Hygienic food and refreshments at affordable prices', icon: 'fa-utensils' }
  ],

  // Principal Message
  principal: {
    name: 'Principal GCT Bhakkar',
    image: './assets/images/principal.jpg',
    message: `Welcome to a place where passion meets purpose, and education goes beyond the classroom. At Government College of Technology, we are driven by a singular mission: to ignite a spirit of innovation, cultivate skills that stand the test of time, and shape leaders who make a difference.

We believe in empowering students with a dynamic mix of knowledge, practical experience, and the confidence to excel in the world. At GCT Bhakkar, we are driven by a commitment to excellence. I believe that honesty, dedication, and hard work are the keys to success.

As you journey through your time here, I encourage you to uphold these values, stay committed to your goals, and always give your best effort. Together, we can achieve great things and build a bright future.`
  },

  // Quick Links for Footer
  quickLinks: [
    { name: 'Home', href: './index.html' },
    { name: 'About Us', href: './pages/about.html' },
    { name: 'Programs', href: './pages/programs.html' },
    { name: 'Admissions', href: './pages/admissions.html' },
    { name: 'Contact', href: './pages/contact.html' }
  ],

  // Footer Programs Links
  footerPrograms: [
    { name: 'Computer Technology', href: './pages/departments/cit.html' },
    { name: 'Electrical Technology', href: './pages/departments/electrical.html' },
    { name: 'Mechanical Technology', href: './pages/departments/mechanical.html' },
    { name: 'Civil Technology', href: './pages/departments/civil.html' },
    { name: 'Electronics Technology', href: './pages/departments/electronics.html' }
  ]
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteData;
}
