import './Home.css'

const Home = () => {
  const stats = [
    { number: '10,000+', label: 'Lives Impacted' },
    { number: '50+', label: 'Communities Served' },
    { number: '200+', label: 'Volunteers' },
    { number: '15', label: 'Years of Service' }
  ]

  const programs = [
    {
      title: 'Education for All',
      description: 'Providing quality education and learning opportunities to underprivileged children.',
      icon: '📚'
    },
    {
      title: 'Healthcare Access',
      description: 'Ensuring basic healthcare services reach remote and underserved communities.',
      icon: '🏥'
    },
    {
      title: 'Clean Water Initiative',
      description: 'Building wells and water systems to provide clean drinking water.',
      icon: '💧'
    },
    {
      title: 'Women Empowerment',
      description: 'Supporting women through skill development and economic opportunities.',
      icon: '👥'
    }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1>Building Hope, Transforming Lives</h1>
            <p className="hero-subtitle">
              Join us in creating lasting positive change in communities around the world. 
              Together, we can make a difference that matters.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Get Involved</button>
              <button className="btn btn-outline">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section section">
        <div className="container">
          <div className="stats-grid grid grid-4">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                At HopeForAll, we believe every person deserves access to basic necessities like 
                education, healthcare, and clean water. Our mission is to empower communities 
                and create sustainable solutions that address the root causes of poverty and inequality.
              </p>
              <p>
                Through collaborative partnerships and community-driven initiatives, we work 
                tirelessly to build a world where everyone has the opportunity to thrive.
              </p>
              <button className="btn btn-secondary">Read Our Story</button>
            </div>
            <div className="mission-image">
              <img 
                src="https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Community volunteers working together"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section section">
        <div className="container">
          <div className="section-header">
            <h2>Our Programs</h2>
            <p>Discover the impactful initiatives we're running to create positive change</p>
          </div>
          <div className="programs-grid grid grid-2">
            {programs.map((program, index) => (
              <div key={index} className="program-card card">
                <div className="program-icon">{program.icon}</div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <button className="btn btn-outline">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Make a Difference?</h2>
            <p>Join our community of changemakers and help us create a better world for everyone.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Become a Volunteer</button>
              <button className="btn btn-secondary">Make a Donation</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home