type PasswordCheckerProps = {
  strength: string;
  color: string;
};

export const PasswordChecker = ({
  strength,
  color,
}: PasswordCheckerProps): React.ReactNode => {
  return (
    <div>
      <p>
        password strength: <span style={{ color }}>{strength}</span>
      </p>
    </div>
  );
};
