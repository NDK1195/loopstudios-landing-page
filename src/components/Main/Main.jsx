import Interactive from "./Interactive";
import OurCreations from "./OurCreations";

function Main() {
  return (
    <main className="bg-white py-24 lg:pb-[184px] lg:pt-[160px]">
      {/* interactive */}
      <section className="mx-auto mb-24 max-w-[1110px] lg:mb-[184px]">
        <Interactive />
      </section>
      {/* interactive */}

      {/* our creations */}
      <section className="mx-auto max-w-[1110px]">
        <OurCreations />
      </section>
      {/* our creations */}
    </main>
  );
}
export default Main;
