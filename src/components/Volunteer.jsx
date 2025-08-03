import { useState } from 'react'
import './Volunteer.css'

const Volunteer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    address: '',
    city: '',
    country: '',
    interests: [],
    availability: '',
    experience: '',
    motivation: '',
    skills: '',
    newsletter: false
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const interestOptions = [
    'Education & Teaching',
    'Healthcare & Medical',
    'Environmental Conservation',
    'Community Development',
    'Emergency Relief',
    'Fundraising & Events',
    'Administrative Support',
    'Social Media & Marketing'
  ]

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (type === 'checkbox' && name === 'interests') {
      setFormData(prev => ({
        ...prev,
        interests: checked 
          ? [...prev.interests, value]
          : prev.interests.filter(interest => interest !== value)
      }))
    } else if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.age) newErrors.age = 'Age is required'
    if (!formData.city.trim()) newErrors.city = 'City is required'
    if (!formData.country.trim()) newErrors.country = 'Country is required'
    if (formData.interests.length === 0) newErrors.interests = 'Please select at least one area of interest'
    if (!formData.availability) newErrors.availability = 'Please select your availability'
    if (!formData.motivation.trim()) newErrors.motivation = 'Please tell us about your motivation'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      setSubmitted(true)
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData)
    }
  }

  if (submitted) {
    return (
      <div className="volunteer">
        <section className="success-section section">
          <div className="container">
            <div className="success-content">
              <div className="success-icon">✅</div>
              <h1>Thank You for Volunteering!</h1>
              <p>
                We've received your application and are excited to have you join our mission. 
                Our team will review your information and contact you within 3-5 business days.
              </p>
              <p>
                In the meantime, follow us on social media to stay updated on our latest 
                initiatives and volunteer opportunities.
              </p>
              <button 
                className="btn btn-primary"
                onClick={() => setSubmitted(false)}
              >
                Submit Another Application
              </button>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="volunteer">
      {/* Hero Section */}
      <section className="volunteer-hero section">
        <div className="container">
          <div className="volunteer-hero-content fade-in-up">
            <h1>Join Our Volunteer Team</h1>
            <p className="hero-subtitle">
              Make a meaningful impact in communities around the world. Whether you have 
              a few hours a week or can commit to longer-term projects, there's a place for you.
            </p>
          </div>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="why-volunteer-section section">
        <div className="container">
          <h2>Why Volunteer With Us?</h2>
          <div className="benefits-grid grid grid-3">
            <div className="benefit-card card">
              <div className="benefit-icon">🌍</div>
              <h3>Global Impact</h3>
              <p>Your efforts directly contribute to positive change in communities worldwide.</p>
            </div>
            <div className="benefit-card card">
              <div className="benefit-icon">🎓</div>
              <h3>Skill Development</h3>
              <p>Gain valuable experience and develop new skills while making a difference.</p>
            </div>
            <div className="benefit-card card">
              <div className="benefit-icon">👥</div>
              <h3>Community</h3>
              <p>Connect with like-minded individuals who share your passion for helping others.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="form-section section">
        <div className="container">
          <div className="form-container">
            <div className="form-header">
              <h2>Volunteer Application Form</h2>
              <p>Please fill out this form to get started with your volunteer journey.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="volunteer-form">
              {/* Personal Information */}
              <div className="form-section-title">
                <h3>Personal Information</h3>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                  {errors.firstName && <div className="form-error">{errors.firstName}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                  {errors.lastName && <div className="form-error">{errors.lastName}</div>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                  {errors.email && <div className="form-error">{errors.email}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                  {errors.phone && <div className="form-error">{errors.phone}</div>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="age" className="form-label">Age *</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    min="16"
                    max="100"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                  {errors.age && <div className="form-error">{errors.age}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="city" className="form-label">City *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                  {errors.city && <div className="form-error">{errors.city}</div>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="country" className="form-label">Country *</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="form-input"
                />
                {errors.country && <div className="form-error">{errors.country}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="address" className="form-label">Address</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="form-textarea"
                  rows="3"
                />
              </div>

              {/* Volunteer Preferences */}
              <div className="form-section-title">
                <h3>Volunteer Preferences</h3>
              </div>

              <div className="form-group">
                <label className="form-label">Areas of Interest * (Select all that apply)</label>
                <div className="checkbox-grid">
                  {interestOptions.map(interest => (
                    <label key={interest} className="checkbox-label">
                      <input
                        type="checkbox"
                        name="interests"
                        value={interest}
                        checked={formData.interests.includes(interest)}
                        onChange={handleInputChange}
                        className="checkbox-input"
                      />
                      <span className="checkbox-text">{interest}</span>
                    </label>
                  ))}
                </div>
                {errors.interests && <div className="form-error">{errors.interests}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="availability" className="form-label">Availability *</label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">Select your availability</option>
                  <option value="weekends">Weekends only</option>
                  <option value="weekdays">Weekdays only</option>
                  <option value="flexible">Flexible schedule</option>
                  <option value="full-time">Full-time commitment</option>
                </select>
                {errors.availability && <div className="form-error">{errors.availability}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="experience" className="form-label">Previous Volunteer Experience</label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Tell us about any previous volunteer work or relevant experience..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="skills" className="form-label">Special Skills or Qualifications</label>
                <textarea
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="List any special skills, qualifications, or certifications that might be helpful..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="motivation" className="form-label">Why do you want to volunteer with us? *</label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Share your motivation and what you hope to achieve through volunteering..."
                />
                {errors.motivation && <div className="form-error">{errors.motivation}</div>}
              </div>

              <div className="form-group">
                <label className="checkbox-label newsletter-label">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="checkbox-input"
                  />
                  <span className="checkbox-text">
                    I would like to receive updates and newsletters about HopeForAll's work
                  </span>
                </label>
              </div>

              <div className="form-submit">
                <button type="submit" className="btn btn-primary submit-btn">
                  Submit Application
                </button>
                <p className="form-note">
                  * Required fields. We'll review your application and get back to you soon!
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Volunteer