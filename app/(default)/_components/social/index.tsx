import { BsGithub } from "react-icons/bs";

export default function () {
  return (
    <div className="mx-auto flex flex-row items-center">
      <a
        href="https://github.com/linchen1987/sorafm"
        target="_blank"
        className="mx-3 flex max-w-[24px] flex-col items-center justify-center"
      >
        <BsGithub className="text-lg" />
      </a>
    </div>
  );
}
