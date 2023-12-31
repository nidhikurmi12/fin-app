import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";
const FILE_PATH = "./data.json";

const makeComit = (n) => {
  if (n === 0)   simpleGit().push();
  const x = random.int(0, 54);
  const y = random.int(0, 6);
  const DATE = moment().subtract(2, "y").add(1, "d").add(x, "w").add(y, "d").format();

  const data = {
    date: DATE,
  };
  console.log(DATE)
  jsonfile.writeFile(FILE_PATH, data);
  simpleGit().add([FILE_PATH]).commit(DATE, { "--date": DATE }, makeComit.bind(this, --n));
};

makeComit(500);