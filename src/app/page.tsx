import styles from "@/styles/Home.module.scss";
import Image from "next/image";
import statusbar from "@/assets/statusbar.png";
import home from "@/assets/home.png";
import hourlyrate from "@/assets/hourlyrate.png";
import earningslog from "@/assets/earningslog.png";
import statistics from "@/assets/statistics.png";
import twitter from "@/assets/twitter.png";
import mail from "@/assets/gmail.png";
import share from "@/assets/share.png";

export default function Home() {
  return (
    <div>
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <h1>hour-tracker</h1>
          <p>
            a timer app for hourly contractors that shows your earnings in real
            time on the status bar
          </p>
          <Image src={statusbar} alt="" />
        </div>
      </section>

      <section className={styles.ctaSection}>
        <p>glimpse</p>
        <div className={styles.ctaContainer}>
          <Image src={home} alt="" />
          <Image src={hourlyrate} alt="" />
          <Image src={earningslog} alt="" />
          <Image src={statistics} alt="" />
        </div>
      </section>

      <section className={styles.shareSection}>
        <div>
          {/* <p>
            have friends who might need this? they'll thank you when you share
            this with them
          </p> */}
          <div className={styles.shareContainer}>
            <p>
              have friends who might need this? <br></br> they'll thank you when
              you share this with them.
            </p>
            <a
              href="https://example.com/link1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={twitter} alt="twitter" />
            </a>
            <a
              href="https://example.com/link2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={mail} alt="mail" />
            </a>
            <a
              href="https://example.com/link3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={share} alt="share" />
            </a>
          </div>
        </div>
      </section>

      <section className={styles.footerSection}>
        <div className={styles.footerContainer}>
          <span>
            by <a href="https://www.abhijitsahoo.com/">abhijit sahoo</a>
          </span>
          <span>
            vote on <a href="https://www.abhijitsahoo.com/">product hunt</a>
          </span>
          <span>
            send feedback to{" "}
            <a href="https://www.abhijitsahoo.com/">hi@abhijit.info</a>
          </span>
          <span>
            connect: <a href="https://x.com/justabhi99">twitter</a>
          </span>
        </div>
      </section>
    </div>
  );
}
