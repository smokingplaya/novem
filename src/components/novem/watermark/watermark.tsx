import Link from "../link";

function Watermark() {
  return (
    <div>
      <p
        className="text-neutral-400 drop-shadow-lg">
        <Link href="https://github.com/smokingplaya/novem">Novem</Link> by smokingplaya
      </p>
    </div>
  );
}

export default Watermark;