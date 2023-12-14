import React from 'react';
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
        <div className="aboutTop" style={{  backgroundImage: `url(${MultiplePizzas})` }} 
        ></div>
        <div className="aboutBottom">
            <h1> ABOUT US </h1>
            <p> Welcome to Leo Pizzas, where tradition meets innovation.
                Founded in 2010 by Leonardo García, a passionate chef with Italian roots, Leo Pizzas has become a reference point in the city for lovers of authentic pizza. Our founder, Leonardo, grew up in a family where pizza was more than a meal: it was a celebration of culture and family togetherness. Inspired by his grandmother's culinary secrets and his own creative spirit, Leonardo decided to share his love of pizza with the world.
                At Leo Pizzas, each pizza is a work of art. We use only the freshest, highest quality ingredients, many of which are imported directly from small farms in Italy. Our menu combines traditional recipes with modern touches, offering a unique experience to each customer. From the classic Margherita to original creations like the Honey Fig Prosciutto Pizza, there's something for everyone on our menu.
                But Leo Pizzas isn't just about the food; It's about the experience.

            </p>
            <p>
              Our cozy restaurant, decorated in a rustic-modern style, is the perfect place to meet with family and friends. Whether you're celebrating a special event or just enjoying a casual night out, our team makes sure every visit is memorable. Committed to the community, we actively participate in local events and collaborate with charitable organizations. We strongly believe in giving back and helping those in our community. At Leo Pizzas, we pride ourselves on keeping traditions alive while embracing innovation. We invite you to be part of our history and enjoy a pizza that not only feeds the body, but also the soul.
            We hope to welcome you soon at Leo Pizzas!
            </p>
        </div>
    </div>
  )
}

export default About