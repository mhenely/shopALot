import { Link } from "react-router-dom"

// Intro image — a bundled landscape stands in for a portrait. Swap in a real
// photo of yourself when you have one (import it the same way).
import introImage from "../../assets/parks.webp"

// NOTE: all copy below is a draft inferred from Matt's interests/background.
// Edit freely — verify the FSU/WashU/law details and rewrite in your own voice.
const CONTACT = {
  site: "https://matthenely.com",
  linkedin: "https://www.linkedin.com/in/matt-henely/",
  github: "https://github.com/mhenely",
  email: "henely.matt@gmail.com",
}

const facts = [
  { title: "Recovering attorney", body: "WashU Law grad with active bar licenses — now writing code instead of briefs." },
  { title: "Missouri roots", body: "Grew up in the Midwest. Still defend St. Louis-style pizza and toasted ravioli." },
  { title: "FSU & WashU", body: "Undergrad at Florida State, law at Washington University in St. Louis." },
  { title: "Soccer, always", body: "Liverpool ’til I die. I also coach — shout-out to my player Juan." },
  { title: "Happiest outdoors", body: "National parks, a boat with a good wind, or a long hike. Then a big meal." },
  { title: "Always learning", body: "Career-changer by choice. Reading, writing, music, and a stand-up open mic now and then." },
]

const AboutPage = () => {
  return (
    <main>
      {/* ===== INTRO ===== */}
      <section className="border-b border-clay-100">
        <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 py-16 md:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-sm">
            <img src={introImage} alt="" className="aspect-[5/6] w-full object-cover" />
          </div>
          <div>
            <p className="font-serif text-lg italic text-clay-600">The person behind the shop —</p>
            <h1 className="mt-3 font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">Hi, I’m Matt.</h1>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">
              A former attorney turned software engineer. shopALot isn’t a real store — it’s a portfolio
              project I built end-to-end, stocked entirely with things I actually love. Every category is a
              real part of my life, which made it a lot more fun to build than a catalog of widgets.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                to="/categories"
                className="bg-clay-700 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream hover:bg-clay-900"
              >
                Browse the shop
              </Link>
              <a href={CONTACT.github} className="border-b-2 border-clay-600 pb-1 text-sm font-semibold text-clay-700">
                See the code on GitHub →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NARRATIVE ===== */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="font-serif text-3xl font-semibold tracking-tight">How I got here</h2>
        <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/75">
          <p>
            I grew up in Missouri, studied at <span className="font-medium text-ink">Florida State</span>, and
            went on to law school at <span className="font-medium text-ink">WashU</span>. I practiced law for a
            few years and hold bar licenses to show for it — but the part of the job I loved most was solving
            problems and building things that worked.
          </p>
          <p>
            So I taught myself to code, and it stuck. These days I build full-stack web applications — like this
            one. shopALot is a MERN-stack store with real authentication, a server-synced cart, Stripe checkout,
            automated tests, and a CI/CD pipeline behind it. The friendly storefront is hiding a genuinely
            production-shaped codebase.
          </p>
          <p>
            When I’m not at a keyboard, I’m usually coaching youth soccer, out on a trail, on the water, or in
            the kitchen attempting a carbonara. The shop is just those interests, turned into pixels.
          </p>
        </div>
      </section>

      {/* ===== A FEW THINGS THAT ARE TRUE ===== */}
      <section className="border-y border-clay-100 bg-white/40">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="font-serif text-3xl font-semibold tracking-tight">A few things that are true</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {facts.map((f) => (
              <div key={f.title} className="border-t border-clay-100 pt-4">
                <p className="font-serif text-xl font-medium">{f.title}</p>
                <p className="mt-1 text-ink/60">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY THIS SHOP ===== */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h2 className="font-serif text-3xl font-semibold tracking-tight">Why a shop, of all things?</h2>
        <p className="mt-5 text-lg leading-relaxed text-ink/75">
          Because an e-commerce app touches everything a real product does — data modeling, auth, payments,
          state management, testing, deployment. Building it around things I care about kept me honest about the
          details. If you’re a hiring manager: thanks for reading this far. I’d love to talk.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm font-semibold">
          <a href={CONTACT.linkedin} className="border-b-2 border-clay-600 pb-1 text-clay-700">LinkedIn</a>
          <a href={CONTACT.github} className="border-b-2 border-clay-600 pb-1 text-clay-700">GitHub</a>
          <a href={`mailto:${CONTACT.email}`} className="border-b-2 border-clay-600 pb-1 text-clay-700">Email me</a>
          <a href={CONTACT.site} className="border-b-2 border-clay-600 pb-1 text-clay-700">matthenely.com →</a>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
