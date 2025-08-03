import './About.css';
import image1 from '../assets/image1.jpeg';

const About = () => {
  const values = [
    {
      title: 'Transparency',
      description: 'We maintain open communication and accountability in all our operations.',
      icon: '🔍'
    },
    {
      title: 'Empowerment',
      description: 'We believe in empowering communities to create sustainable change.',
      icon: '💪'
    },
    {
      title: 'Collaboration',
      description: 'We work together with local partners and global supporters.',
      icon: '🤝'
    },
    {
      title: 'Innovation',
      description: 'We embrace creative solutions to address complex social challenges.',
      icon: '💡'
    }
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      position: 'Executive Director',
      description: 'With 15 years of experience in international development, Sarah leads our global initiatives.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Michael Chen',
      position: 'Program Manager',
      description: 'Michael oversees our education and healthcare programs across multiple countries.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Dr. Amara Okafor',
      position: 'Health Director',
      description: 'Dr. Okafor brings medical expertise and passion for community health initiatives.',
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero section">
        <div className="container-fluid">
          <div className="about-hero-content fade-in-up">
            <h1>About HopeForAll</h1>
            <p className="hero-subtitle">
              Founded in 2009, HopeForAll has been at the forefront of creating positive change 
              in communities worldwide. Our journey began with a simple belief: that every person 
              deserves the opportunity to live with dignity and hope.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section section">
        <div className="container">
          <div className="story-content">
            <div className="story-image">
              <img 
                src={image1}
                alt="Community gathering and celebration"
              />
            </div>
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                What started as a small group of passionate individuals has grown into a 
                global movement for change. We've learned that sustainable development happens 
                when communities are empowered to lead their own transformation.
              </p>
              <p>
                Today, we work in partnership with local organizations, governments, and 
                communities to address the most pressing challenges facing our world: 
                poverty, lack of education, healthcare access, and environmental degradation.
              </p>
              <div className="story-highlights">
                <div className="highlight">
                  <h4>Community-Centered Approach</h4>
                  <p>All our programs are designed and implemented with community input.</p>
                </div>
                <div className="highlight">
                  <h4>Sustainable Solutions</h4>
                  <p>We focus on long-term impact rather than short-term fixes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid grid grid-2">
            {values.map((value, index) => (
              <div key={index} className="value-card card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <p>Dedicated professionals working to create lasting change</p>
          </div>
          <div className="team-grid grid grid-3">
            {team.map((member, index) => (
              <div key={index} className="team-card card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <div className="team-position">{member.position}</div>
                  <p>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section section">
        <div className="container">
          <div className="impact-content">
            <h2>Our Impact</h2>
            <p>
              Over the past 15 years, we've seen firsthand how targeted interventions 
              can transform entire communities. From building schools that serve hundreds 
              of children to establishing healthcare clinics that provide essential services, 
              our work creates ripple effects that last for generations.
            </p>
            <div className="impact-highlights">
              <div className="impact-item">
                <h4>Education Programs</h4>
                <p>Built 45 schools and provided scholarships to over 3,000 students</p>
              </div>
              <div className="impact-item">
                <h4>Healthcare Initiatives</h4>
                <p>Established 12 health clinics serving 25,000+ people annually</p>
              </div>
              <div className="impact-item">
                <h4>Water Projects</h4>
                <p>Installed 150+ water wells providing clean water to 50,000 people</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About