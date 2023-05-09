const fire = (e) => {
  switch (true) {
    case e.target.className.split(" ").includes("enemyship"):
      e.target.className += " hit";
      break;
    case e.target.className.split(" ").includes("playership"):
      e.target.className += " hit";
      break;
    default:
      e.target.className += " miss";
  }
};
export default fire;
