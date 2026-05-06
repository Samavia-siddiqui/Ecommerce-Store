import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Contact Hero Section */}
      <section className="hero" style={{ minHeight: '50vh', padding: 0 }}>
        <div className="hero-bg">
          <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80" alt="Contact Us Hero" style={{ filter: 'brightness(0.5)' }} />
        </div>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '50vh' }}>
          <motion.div className="hero-content" variants={itemVariants} initial="hidden" animate="visible" style={{ textAlign: 'center', background: 'transparent', border: 'none', backdropFilter: 'none' }}>
            <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>Get in Touch</h1>
            <div className="breadcrumb" style={{ justifyContent: 'center', fontSize: '1.2rem', opacity: 0.9 }}>
              <a href="/">Home</a> / <span>Contact Us</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem' }}>
            
            {/* Contact Information */}
            <motion.div 
              style={{ flex: '1 1 400px' }}
              variants={staggerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'left' }}>We're Here to Help</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '3rem', lineHeight: '1.8' }}>
                Whether you have a question about our collections, need styling advice, or require assistance with an order, our dedicated team is ready to provide you with the best support.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {[
                  { icon: <MapPin size={24} />, title: 'Our Boutique', desc: '123 Fashion Avenue, New York, NY 10001' },
                  { icon: <Phone size={24} />, title: 'Phone Number', desc: '+1 (555) 123-4567' },
                  { icon: <Mail size={24} />, title: 'Email Address', desc: 'support@samiscollections.com' },
                  { icon: <Clock size={24} />, title: 'Opening Hours', desc: 'Mon-Sat: 10AM - 8PM | Sun: Closed' }
                ].map((info, index) => (
                  <motion.div key={index} variants={itemVariants} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', flexShrink: 0 }}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.2rem', marginBottom: '0.3rem', fontFamily: 'Outfit' }}>{info.title}</h4>
                      <p style={{ color: 'var(--text-light)' }}>{info.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              style={{ flex: '1 1 500px', backgroundColor: 'var(--bg)', padding: '3rem', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', fontFamily: 'Outfit' }}>Send Us a Message</h3>
              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-light)' }}>First Name</label>
                    <input type="text" placeholder="John" style={{ width: '100%', padding: '1rem', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text)', outline: 'none' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-light)' }}>Last Name</label>
                    <input type="text" placeholder="Doe" style={{ width: '100%', padding: '1rem', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text)', outline: 'none' }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-light)' }}>Email Address</label>
                  <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '1rem', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text)', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-light)' }}>Message</label>
                  <textarea rows="5" placeholder="How can we help you?" style={{ width: '100%', padding: '1rem', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text)', outline: 'none', resize: 'vertical' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ padding: '1.2rem', borderRadius: '8px', fontSize: '1.1rem', marginTop: '1rem' }}>
                  Send Message
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
