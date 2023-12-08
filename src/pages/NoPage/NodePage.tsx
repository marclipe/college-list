import imagePageNotFound from '../../assets/img/page-not-found.svg'

export function NoPage() {
  return (
    <section className="flex justify-center items-center flex-col h-screen">
      <h1 className="text-[3.5rem] font-bold text-[#3f3cbb]">OH NO!</h1>
      <p className="text-[1rem] text-[#3f3cbb] font-medium">
        Sorry, the page not found :(
      </p>
      <img
        className="w-[600px] rounded-[20%]"
        src={imagePageNotFound}
        alt=""
      />
    </section>
  );
}