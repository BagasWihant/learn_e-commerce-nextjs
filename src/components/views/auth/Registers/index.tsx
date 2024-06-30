import Link from "next/link";
import style from "./Register.module.scss";
import { FormEvent, useState } from "react";
import { useRouter } from "next/router";

const RegisterView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push } = useRouter();
  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = {
      email: form.email.value,
      username: form.username.value,
      fullname: form.fullname.value,
      password: form.password.value,
      phone: form.phone.value,
    };

    const result = await fetch("/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (result.status === 200) {
      setIsLoading(false);

      form.reset();
      push("/auth/login");
    } else {
      setIsLoading(false);
      setError("Email sudah terdaftar");      
    }
  };

  return (
    <div className={style.register}>
      <h1 className={style.register__title}>Register</h1>
      {error && <p className={style.register__error}>{error}</p>}
      <div className={style.register__form}>
        <form onSubmit={handleRegister}>
          <div>
            <div className={style.register__form__item}>
              <label htmlFor="email">E-mail</label>
              <input
                className={style.register__form__item__input}
                id="email"
                name="email"
                type="email"
              />
            </div>

            <div className={style.register__form__item}>
              <label htmlFor="username">Username</label>
              <input
                className={style.register__form__item__input}
                id="username"
                name="username"
                type="text"
              />
            </div>

            <div className={style.register__form__item}>
              <label htmlFor="fullname">Fullname</label>
              <input
                className={style.register__form__item__input}
                id="fullname"
                name="fullname"
                type="text"
              />
            </div>

            <div className={style.register__form__item}>
              <label htmlFor="phone">Phone</label>
              <input
                className={style.register__form__item__input}
                id="phone"
                name="phone"
                type="number"
              />
            </div>

            <div className={style.register__form__item}>
              <label htmlFor="password">Password</label>
              <input
                className={style.register__form__item__input}
                id="password"
                type="password"
              />
            </div>

            <button className={style.register__form__button} type="submit">
              {isLoading ? "Loading..." : "Register"}
            </button>
          </div>
        </form>
      </div>
      <p className={style.register__link}>
        Have an account? Sign in <Link href="/auth/login">here</Link>
      </p>
    </div>
  );
};

export default RegisterView;
