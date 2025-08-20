import classNames from "classnames/bind";
import styles from "./aboutUs.module.scss";

const cx = classNames.bind(styles);

function About() {
  return (
    <div className={cx("about-container")}>
      <h1>About Us</h1>
      <p>
        Welcome to <strong>My Blog</strong>! 🌿 <br />
        This is a place where we share knowledge, tutorials, and personal
        stories about technology, programming, and everyday life.
      </p>

      <section className={cx("mission")}>
        <h2>Our Mission</h2>
        <p>
          We aim to create a space where readers can explore new ideas, learn
          practical skills, and connect through meaningful content.
        </p>
      </section>

      <section className={cx("team")}>
        <h2>Meet the Team</h2>
        <ul>
          <li>
            <strong>Phat Nguyen</strong> – Frontend
          </li>
          <li>
            <strong>Nguyen Manh Cuong</strong> – Backend & API Specialist
          </li>
          <li>
            <strong>Guest Writers</strong> – Sharing their unique insights
          </li>
        </ul>
      </section>

      <section className={cx("contact")}>
        <h2>Contact Us</h2>
        <p>
          📧 Email: <a href="mailto:contact@myblog.com">contact@myblog.com</a>
        </p>
        <p>
          💬 Follow us on{" "}
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </a>{" "}
          or{" "}
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            Twitter
          </a>
        </p>
      </section>
    </div>
  );
}

export default About;
