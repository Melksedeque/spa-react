import { useParams } from "react-router-dom";
import styles from "./Post.module.css";

export default function Post({ post }) {
  const params = useParams();
  console.log(params);
  return (
    <div className={styles.post}>
      <h2>Post com ID: {params.id}</h2>
    </div>
  );
}
