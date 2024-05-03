// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            <p>
              <h3>Basic Plan</h3>
              <em>Price: Free</em>
              <br />
            </p>
            <p>
              <h3>Plus Plan</h3>
              <em>Price: $4.99/month</em>
              <br />
            </p>
            <p>
              <h3>Premium Plan</h3>
              <em>Price: $9.99/month</em>
              <br />
            </p>
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
