import type { HeaderProps } from "../types/types";

function Header(props: HeaderProps) {
  const { id, name, studentDetails, state } = props;

  return (
    <div>
      {state.map((item) => (
        <div>{item.price}</div>
      ))}
      {id}: {name}
      {studentDetails.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
}

export default Header;
