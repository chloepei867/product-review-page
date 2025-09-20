export default function ReviewListFooter({ showMore }) {
  return (
    <div className="flex flex-col items-end gap-2 self-stretch px-4 md:px-8  py-6 ">
      <button
        onClick={showMore}
        className="flex justify-center items-center gap-1.5 self-stretch bg-white px-4 py-2.5 lg:px-5 lg:py-3 rounded border-[0.5px] border-solid border-neutral-200 shadow-sm"
      >
        Show 10 More Reviews
      </button>
    </div>
  );
}
