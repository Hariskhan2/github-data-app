  const getUsers = async () => {
    try {
      setLoading(false);
      const response = await fetch("https://api.github.com/users");
      setUsers(await response.json());
    } catch (error) {
      setLoading(false);
      console.log("My error is " + error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
