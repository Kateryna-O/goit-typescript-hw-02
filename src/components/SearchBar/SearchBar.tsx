import style from "./SearchBar.module.css";
import { toast } from "react-hot-toast";
import { FormEvent, useState } from "react";

type Props = {
  onSubmit: (query: string) => void;
};

const SearchBar = ({ onSubmit }: Props) => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("This didn't work. Enter a request");
      return;
    }
    onSubmit(query);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
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
          value={query}
          onChange={handleChange}
        />
        <button type="submit" className={style.btn}>
          Search
        </button>
      </form>
    </header>
  );
};
export default SearchBar;
