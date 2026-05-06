import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const Shop = () => {
  const products = [
    { name: 'Classic Leather Bag', price: '$120.00', category: 'Ladies Bags', img: '/images/bags.png' },
    { name: 'Urban Sneakers', price: '$85.00', category: 'Shoes', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80' },
    { name: 'Matte Lipstick Set', price: '$45.00', category: 'Makeup', img: 'https://m.media-amazon.com/images/I/71sq9dMnz2L.jpg' },
    { name: 'Elegant Evening Gown', price: '$250.00', category: 'Women Outfits', img: 'https://www.newyorkdress.com/cdn/shop/files/Jadore-JM303_-_Blue_1_9642d06f-f242-49fd-ae50-11c30d5d8569_1024x.jpg?v=1757345764' },
    { name: 'Men Casual Suit', price: '$180.00', category: 'Men Outfits', img: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&q=80' },
    { name: 'Running Shoes', price: '$95.00', category: 'Shoes', img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80' },
    { name: 'Tote Bag', price: '$65.00', category: 'Ladies Bags', img: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&q=80' },
    { name: 'Eyeshadow Palette', price: '$35.00', category: 'Makeup', img: '/images/makeup.png' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Shop Now</h1>
          <div className="breadcrumb">
            <a href="/">Home</a> / <span>Shop</span>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="product-grid">
            {products.map((prod, index) => (
              <motion.div 
                key={index} 
                className="product-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Shop;
