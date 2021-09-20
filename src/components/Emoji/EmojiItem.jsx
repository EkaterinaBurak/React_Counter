import react from "react";
import styles from "./Emoji.module.css";

export class EmojiItem extends react.Component {
  render() {
    const data = this.props.data;
    const title = this.props.title;
    return (
      <ul className={styles.emojiItem}>
        {data.map((emoji) => {
          if (emoji.title === title) {
            return (
              <li emoji={emoji}>
                {emoji.symbol}
                {emoji.title}
              </li>
            );
          }
        })}
      </ul>
    );
  }
}
