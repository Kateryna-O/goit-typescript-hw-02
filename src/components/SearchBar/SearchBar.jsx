import style from "./SearchBar.module.css";
import { toast } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements[0].value.trim();
    if (inputValue === "") {
      toast.error("This didn't work. Enter a request");
      return;
    }
    onSubmit(inputValue);
  };

  return (
    <header className={style.header}>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={style.input}
        />
        <button type="submit" className={style.btn}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
