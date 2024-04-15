import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";

function Contact({ item: { name, number, id }, onDelete }) {
  return (
    <>
      <div className={css.row}>
        <BsFillPersonFill className={css.icon} />
        <p>{name}</p>
      </div>
      <div className={css.row}>
        <BsFillTelephoneFill className={css.icon} />
        <p>{number}</p>
      </div>
      <button type="button" onClick={() => onDelete(id)} className={css.button}>
        Delete
      </button>
    </>
  );
}

export default Contact;