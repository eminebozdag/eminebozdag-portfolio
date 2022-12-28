import Social from "../components/social";

const Index = () => {
  return (
    <div className="pt-20 flex-grow sm:pt-40">
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <h1 className="text-5xl font-bold pt-10 tracking-normal text-zinc-800 max-w-2xl">
            Software Engineer, Art-Lover and Enthusiastic.
          </h1>
          <p className="mt-10 text-base text-zinc-600 max-w-2xl">
            Hey, it's Emine 👋
          </p>
          <p className="mt-2 text-base text-zinc-600 max-w-2xl">
            I write blog posts about software and other topics I am passionate
            about. Also creating some open source projects to share my knowledge
            with the community.
          </p>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Index;
