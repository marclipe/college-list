import { SearchBar } from "../../components/Search/SearchBar";
import '../../index.css'

export function Search() {
  return (
    <section className="@apply flex justify-center items-center flex-col gap-12">
      <div className="background-college mb-6 @apply text-center w-full h-[250px]">
        <h1 className="text-shadow  @apply text-[2rem] mt-16 text-white font-semibold">
          Hello, student!
        </h1>
        <p className="text-shadow mb-2 text-white text-2xl font-semibold">
          Ready to choose your university?
        </p>
      </div>
      <div className="m-auto">
        <SearchBar />
      </div>
    </section>
  );
}