import { NavLink } from "react-router-dom";
export const Header = (): React.ReactNode => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">home</NavLink>
          <NavLink to="/controlled-form">controlled Form</NavLink>
          <NavLink to="/uncontrolled-form">uncontrolled Form</NavLink>
        </nav>
      </header>
    </>
  );
};
