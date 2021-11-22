import Link from "next/link";
import Image from "next/image";
import styles from "../styles/EventItem.module.css";

export default function EventItem(props) {
  return (
    <div className={styles.event}>
      <div className={styles.image}>
        <Image
          src={
            props.eventData.image
              ? props.eventData.image
              : "/images/event-default.png"
          }
          width={170}
          height={100}
        />
      </div>
      <div className={styles.info}>
        <span>{props.eventData.date}</span>
        <h1>{props.eventData.name}</h1>
      </div>
    </div>
  );
}
