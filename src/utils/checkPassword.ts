const checkPassword = (
  password: string
): { strength: string; color: string } => {
  let count = 0;
  if (password.length >= 8) count += 1;
  if (/[A-Z]/.test(password)) count += 1;
  if (/[a-z]/.test(password)) count += 1;
  if (/[0-9]/.test(password)) count += 1;
  if (/[\W!]/.test(password)) count += 1;
  switch (count) {
    case 1:
      return { strength: "easy-peasy", color: "darkred" };
    case 2:
      return { strength: "easy", color: "crimson" };
    case 3:
      return { strength: "medium", color: "orange" };
    case 4:
      return { strength: "almost strong", color: "yellow" };
    case 5:
      return { strength: "strong", color: "green" };
    default:
      return { strength: "", color: "" };
  }
};

export { checkPassword };
