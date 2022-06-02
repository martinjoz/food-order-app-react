import Card from "../UI/Card";
import styles from "./List.module.css";

function List(props) {
  return (
    <Card className={styles.list}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            <span>
              {user.name} ({user.age}) Years
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
export default List;
