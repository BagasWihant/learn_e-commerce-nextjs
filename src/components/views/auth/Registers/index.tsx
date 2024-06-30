import Link from "next/link";
import style from "./Register.module.scss";

const RegisterView = () => {
  return (
    <div className={style.register}>
      <h1 className={style.register__title}>Register</h1>
      <div className={style.register__form}>
        <form>
          <div>
            <div className={style.register__form__item}>
              <label htmlFor="username">Username</label>
              <input className={style.register__form__item__input} id="username" type="text" />
            </div>

            <div className={style.register__form__item}>
              <label htmlFor="password">Password</label>
              <input className={style.register__form__item__input} id="password" type="password" />
            </div>

            <div className={style.register__form__item}>
              <label htmlFor="password2">Confirm Password</label>
              <input className={style.register__form__item__input} id="password2" type="password" />
            </div>

            <button className={style.register__form__button} type="submit">Register</button>
          </div>
        </form>
      </div>
      <p className={style.register__link}>Have an account? Sign in <Link href="/auth/login">here</Link></p>
    </div>
  );
};

export default RegisterView;
