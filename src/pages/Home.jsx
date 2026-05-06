import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag } from 'lucide-react';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const categories = [
    { title: 'Premium Shoes', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80', link: '/collection?category=shoes' },
    { title: 'Ladies Bags', image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80', link: '/collection?category=bags' },
    { title: 'Luxury Makeup', image: '/images/makeup.png', link: '/collection?category=makeup' },
    { title: 'Modern Outfits', image: '/images/outfits.png', link: '/collection?category=outfits' },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2070&q=80" alt="Hero Banner" />
        </div>
        <div className="container">
          <motion.div className="hero-content" variants={itemVariants}>
            <h1>Discover True Elegance</h1>
            <p>Welcome to Sami's Collections. Explore our premium selection of shoes, bags, makeup, and outfits crafted for perfection.</p>
            <div className="hero-btns">
              <Link to="/shop" className="btn btn-primary">
                Shop Now <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </Link>
              <Link to="/collection" className="btn btn-secondary glass">
                View Collections
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="section">
        <div className="container">
          <motion.div className="section-header" variants={itemVariants}>
            <span className="section-subtitle">Our Categories</span>
            <h2 className="section-title">Shop by Category</h2>
          </motion.div>

          <motion.div className="categories-grid" variants={itemVariants}>
            {categories.map((cat, index) => (
              <Link to={cat.link} key={index} className="category-card">
                <img src={cat.image} alt={cat.title} className="category-img" />
                <div className="category-overlay">
                  <h3 className="category-title">{cat.title}</h3>
                  <span className="category-link">Explore Collection <ArrowRight size={14} style={{ marginLeft: '4px', verticalAlign: 'middle' }}/></span>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trending Products Preview */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div className="section-header" variants={itemVariants}>
            <span className="section-subtitle">Trending Now</span>
            <h2 className="section-title">New Arrivals</h2>
          </motion.div>

          <motion.div className="product-grid" variants={itemVariants}>
            {[
              { name: 'Classic Leather Bag', price: '$120.00', category: 'Ladies Bags', img: '/images/bags.png' },
              { name: 'Urban Sneakers', price: '$85.00', category: 'Shoes', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80' },
              { name: 'Matte Lipstick Set', price: '$45.00', category: 'Makeup', img: 'https://m.media-amazon.com/images/I/71sq9dMnz2L.jpg' },
              { name: 'Elegant Evening Gown', price: '$250.00', category: 'Women Outfits', img: 'https://www.newyorkdress.com/cdn/shop/files/Jadore-JM303_-_Blue_1_9642d06f-f242-49fd-ae50-11c30d5d8569_1024x.jpg?v=1757345764' }
            ].map((prod, index) => (
              <div key={index} className="product-card">
                <div className="product-img-wrap">
                  <img src={prod.img} alt={prod.name} className="product-img" />
                  <div className="product-actions">
                    <button className="action-btn" title="Add to Cart"><ShoppingBag size={18} /></button>
                  </div>
                </div>
                <div className="product-info">
                  <span className="product-category">{prod.category}</span>
                  <h4 className="product-title">{prod.name}</h4>
                  <div className="product-price">{prod.price}</div>
                </div>
              </div>
            ))}
          </motion.div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/shop" className="btn btn-primary">View All Products</Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
