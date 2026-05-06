import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: 'The Ultimate Guide to Sustainable Fashion in 2026',
    date: 'May 4, 2026',
    author: 'Sarah Jenkins',
    category: 'Lifestyle',
    desc: 'Sustainability is no longer just a buzzword; it is a movement. Discover how you can build a stunning, eco-friendly wardrobe without compromising on luxury and elegance.',
    img: 'https://files.cdn.printful.com/o/upload/blog-post-img-upload/d3/d36499833de58801e5cb23eb6acd48a1_l'
  };

  const posts = [
    { title: 'Top 10 Fashion Trends for This Season', date: 'May 1, 2026', author: 'Emma Collins', category: 'Trends', desc: 'Discover what is hot in the fashion world this year. From sustainable fabrics to bold new colors.', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80' },
    { title: 'Choosing the Perfect Handbag', date: 'April 25, 2026', author: 'Mia Wong', category: 'Accessories', desc: 'A guide to selecting the right handbag for every occasion, ensuring you always step out in style.', img: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80' },
    { title: 'Makeup Essentials Every Woman Needs', date: 'April 15, 2026', author: 'Sophia Rossi', category: 'Beauty', desc: 'The must-have makeup products to keep in your beauty arsenal for a flawless look anytime.', img: '/images/makeup.png' },
    { title: 'Styling Evening Gowns for Galas', date: 'April 8, 2026', author: 'Isabella Fox', category: 'Guides', desc: 'Tips and tricks for selecting and accessorizing the perfect evening gown for high-end events.', img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80' },
    { title: 'Transitioning Your Wardrobe for Winter', date: 'March 30, 2026', author: 'Emma Collins', category: 'Trends', desc: 'How to gracefully layer your clothes and pick the best winter coats to stay warm and fashionable.', img: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80' },
    { title: 'The Power of Minimalist Jewelry', date: 'March 22, 2026', author: 'Mia Wong', category: 'Accessories', desc: 'Why sometimes less is more. Explore our favorite minimalist jewelry pieces of the year.', img: 'https://img.kwcdn.com/product/fancy/ac9c41b9-eab4-4b6e-aed7-14bdde1df0c5.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp' },
  ];

  const categories = ['All', 'Trends', 'Beauty', 'Accessories', 'Lifestyle', 'Guides'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <header className="page-header" style={{ height: '30vh', minHeight: '250px' }}>
        <div className="container">
          <h1 className="page-title">The Style Journal</h1>
          <div className="breadcrumb">
            <a href="/">Home</a> / <span>Blog</span>
          </div>
        </div>
      </header>

      <section className="section" style={{ paddingTop: '3rem' }}>
        <div className="container">
          
          {/* Categories Bar */}
          <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '2rem', marginBottom: '2rem', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
            {categories.map((cat, index) => (
              <button key={index} className={`btn ${index === 0 ? 'btn-primary' : 'btn-secondary'}`} style={{ padding: '0.5rem 1.5rem', borderRadius: '30px', whiteSpace: 'nowrap' }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <motion.div 
            className="blog-card"
            style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: 'var(--bg-secondary)', borderRadius: '16px', overflow: 'hidden', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div style={{ flex: '1 1 500px', height: '400px' }}>
              <img src={featuredPost.img} alt={featuredPost.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: '1 1 400px', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--secondary)', fontWeight: '600', textTransform: 'uppercase' }}><Tag size={14} /> {featuredPost.category}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Calendar size={14} /> {featuredPost.date}</span>
              </div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>{featuredPost.title}</h2>
              <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6' }}>{featuredPost.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500' }}><User size={18} /> {featuredPost.author}</span>
                <a href="#" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem' }}>Read Article</a>
              </div>
            </div>
          </motion.div>

          <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'left' }}>
            <h2 className="section-title">Latest Articles</h2>
          </div>

          {/* Regular Posts Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {posts.map((post, index) => (
              <motion.div 
                key={index}
                className="blog-card"
                style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div style={{ height: '250px', overflow: 'hidden', position: 'relative' }}>
                  <span style={{ position: 'absolute', top: '15px', left: '15px', backgroundColor: 'var(--secondary)', color: 'var(--white)', padding: '0.3rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600', zIndex: 2, textTransform: 'uppercase' }}>
                    {post.category}
                  </span>
                  <img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.8rem' }}>
                    <Calendar size={14} /> {post.date}
                  </span>
                  <h3 style={{ fontSize: '1.4rem', margin: '0 0 1rem 0', lineHeight: '1.3' }}>{post.title}</h3>
                  <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', flexGrow: 1 }}>{post.desc}</p>
                  <a href="#" style={{ color: 'var(--primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s ease' }}>
                    Read More <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', marginTop: '4rem' }}>
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', backgroundColor: 'var(--bg)', padding: '4rem 2rem', borderRadius: '16px', boxShadow: '0 15px 40px rgba(0,0,0,0.05)' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Join Our Newsletter</h2>
            <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>Subscribe to get the latest style guides, trend reports, and exclusive offers delivered straight to your inbox.</p>
            <form style={{ display: 'flex', gap: '0.5rem', maxWidth: '400px', margin: '0 auto' }} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" style={{ flex: 1, padding: '1rem', borderRadius: '8px', border: '1px solid #ddd', outline: 'none' }} />
              <button type="submit" className="btn btn-primary" style={{ borderRadius: '8px' }}>Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Blog;
