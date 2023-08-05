import chalkAnimation from "chalk-animation";

const sleep = async () => {
  return new Promise((res) => {
    return setTimeout(res, 2000);
  });
};

async function welcome() {
  const greetings = chalkAnimation.neon(
    `-------WELCOME TO THE CLI WORD-COUNTER--------`
  );
  await sleep();
  greetings.stop();
}
export default welcome;
