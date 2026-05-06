import { motion } from 'framer-motion';
import { Award, Heart, ShieldCheck, Truck } from 'lucide-react';

const About = () => {
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
      {/* About Hero Section */}
      <section className="hero" style={{ minHeight: '60vh' }}>
        <div className="hero-bg">
          <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=2070&q=80" alt="About Us Hero" />
        </div>
        <div className="container">
          <motion.div className="hero-content" variants={itemVariants} initial="hidden" animate="visible" style={{ textAlign: 'center', margin: '0 auto' }}>
            <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>Our Story</h1>
            <div className="breadcrumb" style={{ justifyContent: 'center', fontSize: '1.2rem', opacity: 0.8 }}>
              <a href="/">Home</a> / <span>About Us</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
            <motion.div 
              style={{ flex: '1 1 400px', borderRadius: '12px', overflow: 'hidden' }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" alt="Fashion Boutique" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
            <motion.div 
              style={{ flex: '1 1 400px' }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="section-subtitle">Since 2020</span>
              <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', textAlign: 'left' }}>Redefining Elegance for the Modern Individual</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                At Sami's Collections, we believe that true style goes beyond what you wear; it's how you express yourself. Founded with a passion for high-quality fashion and beauty, our goal has always been to provide curated, premium pieces that empower you to look and feel your absolute best.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
                From elegant evening gowns and modern outfits to luxury makeup and classic leather bags, every single item in our collection is handpicked to ensure durability, comfort, and undeniable sophistication.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Promise</span>
            <h2 className="section-title">Why Choose Us</h2>
          </div>
          
          <motion.div 
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: <Award size={40} />, title: "Premium Quality", desc: "We source only the finest materials for all our fashion and beauty products." },
              { icon: <ShieldCheck size={40} />, title: "Secure Shopping", desc: "Your privacy and security are our top priorities during every transaction." },
              { icon: <Truck size={40} />, title: "Fast Delivery", desc: "Enjoy quick, reliable, and trackable shipping straight to your doorstep." },
              { icon: <Heart size={40} />, title: "Customer Care", desc: "Our dedicated support team is always here to assist you with a smile." }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="feature-card"
                style={{ backgroundColor: 'var(--bg)', padding: '2.5rem 2rem', borderRadius: '12px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
              >
                <div style={{ color: 'var(--secondary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="section-subtitle">Our Vision</span>
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>Empowering Confidence</h2>
          <p style={{ fontSize: '1.3rem', color: 'var(--text-light)', lineHeight: '1.8', fontStyle: 'italic' }}>
            "We envision a world where luxury and accessibility meet. Where every person has the tools to curate their own unique, beautiful aesthetic without compromising on quality or sustainability."
          </p>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
