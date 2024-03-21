import { type NextPage } from "next";
import { NewTweetForm } from "~/components/NewTweetForm";

const Home: NextPage = () => {
  return (
    <>
      <header className="bg-shite sticky top-0 z-10 border-b pt-2">
        <h1 className="mb-2 px-4 text-lg font-bold">Home</h1>
      </header>
      <NewTweetForm />
    </>
  );
};

export default Home;
