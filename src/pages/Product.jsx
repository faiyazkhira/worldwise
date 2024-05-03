import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>Explore the World with WorldWise.</h2>
          <p>
            Embark on a journey of discovery with WorldWise – the ultimate
            travel companion for adventurers, explorers, and dreamers alike.
            With our intuitive app, you can:
          </p>
          <ul>
            <li>
              Track Your Travels: Mark the places you've been to on an
              interactive world map, creating a visual representation of your
              adventures.
            </li>
            <li>
              Discover New Destinations: Receive personalized travel
              recommendations based on your past journeys, helping you uncover
              hidden gems and must-visit locations around the globe.
            </li>
            <li>
              Plan Your Next Adventure: Create custom travel itineraries, share
              them with friends and family, and turn your wanderlust into
              reality.
            </li>
            <li>
              Gain Insights: Dive deep into your travel history with detailed
              analytics and insights, including maps showcasing visited places,
              travel distance covered, and more.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
