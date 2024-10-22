import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import Image from "../Image/Image";
import styles from './styles.module.css'

const NewsBanner = ({ item }) => {
    return (
        <div className={styles.banner}>
            <a href={item?.url}>
                <Image image={item?.image} />
            </a>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.extra}>
                {formatTimeAgo(item.published)} by {item.author}
            </p>
        </div>
    )
};

export default NewsBanner;
