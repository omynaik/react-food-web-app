import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>This is an About us Page</h1>
      <h2>Hello and welcome to the Namaste React web series !!!</h2>
      <User />
      <UserClass name={"Omkar Naik (from class based component)"} />
    </div>
  );
};

export default About;
