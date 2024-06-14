import { useState, useEffect } from "react";
import { GIT_USER_DETAILS } from "../../utils/constants";
const UserFunction = (props) => {
  const { name, id, email } = props;

  const [registered, setRegistered] = useState(false);
  const [buttonName, setButtonName] = useState("Register");

  const [userDetails, setUserDetails] = useState({
    login: "Sample",
    avatar_url: "",
    repos_url: "",
  });

  fetchGITRepoList = async () => {
    const data = await fetch(GIT_USER_DETAILS);
    const gitResponse = await data.json();
    setUserDetails(gitResponse);
  };

  useEffect(() => {
    fetchGITRepoList();
  }, []);

  return (
    <div className='git-menu-list-cont'>
      <h2>Name: {name}</h2>
      <h4>Email: {email}</h4>
      <h4>Id: {id}</h4>
      <p>{!registered ? "Please Register" : "Registration successful"}</p>
      <button
        onClick={() => {
          if (registered) {
            setRegistered(false);
            setButtonName("Register");
          } else {
            setRegistered(true);
            setButtonName("UnRegister");
          }
        }}>
        {buttonName}
      </button>
      <div className='details-cont'>
        <div>
          <h1>Git details</h1>
          <h3>{`Name - ${userDetails.login}`}</h3>
          <h4>{`Git URL - ${userDetails.repos_url}`}</h4>
        </div>
        <img src={userDetails.avatar_url} width='100' height='100' />
      </div>
    </div>
  );
};

export default UserFunction;
