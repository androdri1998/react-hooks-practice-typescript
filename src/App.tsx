import React, { useState, useMemo, useCallback, useRef } from "react";

interface IUser {
  name: string;
  avatar_url: string;
  login: string;
}

const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [user, setUser] = useState<IUser>();
  const [users] = useState<[IUser]>();

  async function loadData() {
    setUser({
      name: "NAME",
      avatar_url: "AVATAR_URL",
      login: "TEST_USERNAME",
    });
  }

  const names = useMemo(
    () => users?.map((user) => user.name).join(", ") || "",
    [users]
  );

  const greeting = useCallback((user: IUser) => alert(`Hello ${user?.name}`), [
    names,
  ]);

  inputRef.current?.focus();

  return (
    <div>
      {user?.name}
      <form action="">
        <input type="text" ref={inputRef} />
      </form>
    </div>
  );
};

export default App;
