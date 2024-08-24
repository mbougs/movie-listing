import s from './style.module.css'

export const Logo = ({ logo, title, subtitle }) => {
  return (
    <>
    <div className={s.logo_container}>
        <img className={s.logo} src={logo} alt="logo" />
        <div className={s.logo_title}>{ title }</div>
    </div>
    <div className={s.logo_subtitle}>{ subtitle }</div>
    </>
  );
}
