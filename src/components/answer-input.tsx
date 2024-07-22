export default function AnswerInput() {
  return (
    <>
    <form className="flex p-2 items-center justify-evenl gap-2 w-full">
      <label className="input input-bordered flex items-center gap-2 w-full">
        <input type="text" placeholder="Answer" className="rounded-sm"/>
      </label>
      <button className="btn btn-primary rounded-md">Submit</button>
    </form>
    </>
  );
}
