import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Collection = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const activeCategory = queryParams.get('category') || 'all';

  const categories = [
    { id: 'shoes', title: 'Premium Shoes', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80', desc: 'Step out in style with our premium footwear collection.' },
    { id: 'bags', title: 'Ladies Bags', image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80', desc: 'Carry elegance everywhere you go with our luxury bags.' },
    { id: 'makeup', title: 'Luxury Makeup', image: '/images/makeup.png', desc: 'Enhance your natural beauty with our high-end cosmetics.' },
    { id: 'outfits', title: 'Modern Outfits', image: '/images/outfits.png', desc: 'Discover the latest trends for men and women.' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Our Collections</h1>
          <div className="breadcrumb">
            <a href="/">Home</a> / <span>Collections</span>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          {categories.map((cat, index) => (
            <motion.div 
              key={index} 
              style={{ display: activeCategory === 'all' || activeCategory === cat.id ? 'flex' : 'none', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', alignItems: 'center', gap: '4rem', marginBottom: '6rem' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="collection-img-wrap" style={{ flex: 1, borderRadius: '12px', overflow: 'hidden', height: '400px' }}>
                <img src={cat.image} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{cat.title}</h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '2rem' }}>{cat.desc}</p>
                <a href="/shop" className="btn btn-primary">Shop {cat.title}</a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Collection;
