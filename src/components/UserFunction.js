import { useState, useEffect } from "react";
import { GIT_USER_DETAILS } from "../../utils/constants";
const UserFunction = (props) => {
  console.log(props);
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
    console.log("use effect called");
    fetchGITRepoList();
  }, []);

  return (
    <div className='rest-menu-list-cont'>
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
      <h1>Git details</h1>
      <h3>{`Name - ${userDetails.login}`}</h3>
      <img src={userDetails.avatar_url} />
      <h4>{`Git URL - ${userDetails.repos_url}`}</h4>
    </div>
  );
};

export default UserFunction;
