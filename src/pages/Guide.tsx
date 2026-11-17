import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDownRight, ArrowUp, Plus } from "lucide-react";

const topics = [
  {
    id: "right-fit",
    title: "Do I need a website?",
    intro: "Start with the problem your site needs to solve, then choose the simplest approach that solves it well.",
    questions: [
      { q: "Do I need a website if most of my customers find me on social media?", a: "Social media is useful for discovery, but your website gives people one dependable place to understand what you offer, check the details, and take the next step. It also gives you more control over how your business is presented." },
      { q: "What should my website help visitors do?", a: "Choose one main action first: enquire, book, buy, or learn more. The pages, content, and calls to action should make that step easy, while still answering the questions people need resolved before they take it." },
      { q: "How many pages do I need to launch?", a: "Only enough to explain the offer clearly and build trust. A focused home page, services or product details, an about section, and a clear contact path can be a strong start. Add pages when real content or customer needs call for them." },
      { q: "Will a website bring me more customers?", a: "A website can help people understand your business and contact you, but it cannot promise new customers by itself. The result also depends on what you offer, how people find you, and whether the site answers their questions." },
      { q: "Can I use social media instead of a website?", a: "You can, especially when you are just getting started. A website gives you a place you control, where people can find your services, prices, location, and contact details in one place." },
    ],
  },
  {
    id: "budget",
    title: "Website cost and payment",
    intro: "A useful estimate comes from agreeing on the work and the outcome before deciding on a number.",
    questions: [
      { q: "What affects the cost of a website?", a: "The number of pages, special features, writing and images, and time needed to design and build the site all affect the cost. Once we know what you need, I can suggest a clear plan." },
      { q: "Why can two websites that look similar cost different amounts?", a: "A website may look simple but still need extra features, more pages, or links to other services. The amount of planning and testing can also be different." },
      { q: "Can we start small and add more later?", a: "Yes. We can start with the pages and features you need most, then add more when your business is ready. The first version will still be useful on its own." },
      { q: "What is included in the price?", a: "That depends on the plan we agree on. Before work begins, we should list the pages, features, writing or images, changes, and support included, along with anything that would cost extra." },
      { q: "Are there costs after the website is finished?", a: "There may be yearly costs for your website address or ongoing costs for services the site uses. I will explain the costs that apply to your site before you decide to go ahead." },
    ],
  },
  {
    id: "process",
    title: "How we'll work together",
    intro: "A good process makes decisions visible and gives you regular chances to guide the result.",
    questions: [
      { q: "What happens after I get in touch?", a: "We start with a conversation about your business, audience, goals, and timing. From there, I can recommend a sensible scope and explain what I would need from you to get started." },
      { q: "What do you need from me?", a: "Your goals, background on the business, any existing brand assets, and the content or information you already have are a helpful start. If something is missing, we can work out who should prepare it." },
      { q: "How will I know what the site looks like before launch?", a: "You will review the direction as the work takes shape. We can discuss the layout and visual choices, then refine the implementation with your feedback before the site is ready to go live." },
      { q: "How long does it take to make a website?", a: "The time depends on how many pages and features you need, how soon the words and images are ready, and how quickly we can review each step. I can give you a time estimate after we agree on the plan." },
      { q: "Can I ask for changes as we go?", a: "Yes. We will agree on how feedback and changes work before we start. Sharing your thoughts early helps keep the work on track." },
    ],
  },
  {
    id: "content-design",
    title: "Your website address and setup",
    intro: "A clear plan for your website address, words, and images makes it easier to get started.",
    questions: [
      { q: "What is a website address, and do I need one?", a: "A website address is what people type to visit your site, like yourbusiness.com. You will need one, and I can help you choose and set it up." },
      { q: "Where does my website live?", a: "A website needs an online home so people can visit it. I can help choose a suitable service and explain any costs before we begin." },
      { q: "Will my website work well on phones?", a: "Yes. I build the site so it is easy to read and use on phones, tablets, and computers." },
      { q: "Should the website address be in my name?", a: "Yes. Registering the address in your own name helps you keep control of it. ICANN identifies the registrant as the person or organisation with rights to the domain name." },
      { q: "Will I get the logins and files for my website?", a: "We should agree before work begins which accounts and files you will receive. Keep the website address and important accounts in your name, and make sure you have the login details." },
    ],
  },
  {
    id: "launch-tech",
    title: "Helping people find you online",
    intro: "A clear website can help people understand what you do and find the right way to reach you.",
    questions: [
      { q: "Will people find my website on Google?", a: "I will set up the pages so Google can read them, but it can take time for a new website to appear in search results. Where it appears depends on many things, so no one can promise a first place spot." },
      { q: "Can people contact me through the website?", a: "Yes. We can add the contact options that suit your business, such as a form, email link, phone number, or WhatsApp." },
      { q: "Can my website help me get more customers?", a: "A good website can explain what you offer and make it easy to get in touch. It is one part of finding customers, alongside the ways you already tell people about your business." },
      { q: "Do I have to pay Google to show my website in search?", a: "No. Google does not charge for including a page in its normal search results. You can pay for adverts, but those are separate from regular search results." },
      { q: "Can anyone promise my website will be first on Google?", a: "No. Google does not guarantee that it will include a website in search results or place it first. Be careful of anyone who promises a specific position." },
    ],
  },
  {
    id: "care",
    title: "Changes and help after launch",
    intro: "A launch is a beginning. Know who handles updates, fixes, and future improvements.",
    questions: [
      { q: "Can I update the site myself?", a: "That depends on how the site is built and what you need to change. We can choose an approach that makes common updates manageable and talk through any ongoing developer support you may need." },
      { q: "What ongoing costs should I plan for?", a: "Typical costs can include the domain, hosting, and any paid services or software the site relies on. These depend on the setup, so we can list the actual services and their costs for your project." },
      { q: "Can you help after the website goes live?", a: "We can discuss what support or future changes would be useful for your site. The plan should match the work you expect, from occasional fixes to a new feature or a broader refresh." },
      { q: "Do I have to pay a monthly fee to keep my website online?", a: "Not always. It depends on the service used to keep the site online and any other tools it needs. I will explain which bills continue after the website is finished." },
      { q: "What if something stops working?", a: "First, contact the person or company responsible for the website or the service that stopped working. We can also agree on what help is available after launch and how quickly you can expect a reply." },
    ],
  },
  {
    id: "choosing",
    title: "Choosing the right person",
    intro: "Look for someone who understands the outcome you need, communicates clearly, and can show relevant work.",
    questions: [
      { q: "What should I look for when choosing a developer?", a: "Look at work that is relevant to your needs, ask how decisions and feedback are handled, and make sure the scope and next steps are understandable. A good fit should make the process feel clear." },
      { q: "How do I know if we're a good fit?", a: "A first conversation should leave room for your questions and give us both a clearer picture of the work. You should understand what I can contribute and feel comfortable discussing your goals and concerns." },
      { q: "What should I include in my first message?", a: "Tell me what your business does, what you want the website to help with, whether you already have a site, and any timing or constraints you know about. A rough idea is enough to start." },
      { q: "What should I check before agreeing to the work?", a: "Make sure you understand the price, what is included, when you will review the work, who keeps the website address and accounts, and what help is available afterwards." },
      { q: "Can I see examples of your work?", a: "Yes. You can explore the projects on my portfolio and ask me about work that is closest to what you have in mind." },
    ],
  },
  {
    id: "website-content",
    title: "What to put on your website",
    intro: "The best pages answer the questions your customers already have.",
    questions: [
      { q: "What should I put on my website?", a: "Start with what you offer, who it helps, what makes your business a good choice, and how people can reach you. We can decide together which pages are useful." },
      { q: "Do I need to write everything before we start?", a: "No. We can first list what each page needs. You can then prepare the words and images as we work through the site." },
      { q: "Can I use photos from my phone?", a: "Often, yes. Clear, bright photos of your real work or business can be a good fit. We can review what you have and see where new photos might help." },
      { q: "Can people book or pay through my website?", a: "Often, yes. We can look at options for bookings or payments and choose one that fits your business. Any extra service fees should be checked before you choose." },
      { q: "Can you add a map, WhatsApp, or a contact form?", a: "Yes. We can include helpful ways for customers to find you or get in touch, such as a map, WhatsApp link, phone number, or contact form." },
    ],
  },
  {
    id: "before-we-start",
    title: "Questions before we begin",
    intro: "A few simple details can help us make a useful plan for your website.",
    questions: [
      { q: "What should I tell you in my first message?", a: "Tell me what your business does, what you want the website to help with, and when you hope to launch. A rough idea is enough to start." },
      { q: "How long will it take to make my website?", a: "It depends on the number of pages and features, and how quickly we can review the work and share the needed information. I can give you a better estimate after we discuss what you need." },
      { q: "What if I have more questions?", a: "Send them my way. You don't need to know all the answers before we talk. We can work through the details together and see what makes sense for your business." },
      { q: "What if I already have a website?", a: "We can look at what is working, what is getting in the way, and what you want to improve. Sometimes a few changes are enough; sometimes a new website makes more sense." },
      { q: "What happens if I want to work with another developer later?", a: "You should be able to keep control of your website address and important accounts. Before we begin, we can also agree what website files or handover details you will receive." },
    ],
  },
];

const Guide = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const questionCount = topics.reduce((total, topic) => total + topic.questions.length, 0);

  return (
    <div className="min-h-screen px-6 pb-24 pt-10 text-primary dark:text-white md:px-12 md:pt-16 lg:px-16">
      <header className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-end text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
          <Link to="/" className="normal-case tracking-normal hover:text-primary dark:hover:text-white">JoshTheFrontendGuy ↗</Link>
        </div>
        <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400"><span className="h-1.5 w-1.5 rounded-full bg-primary dark:bg-white" />The website guide</p>
        <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.04] tracking-[-0.045em] md:text-6xl lg:text-7xl">A clearer first step toward your next website.</h1>
        <div className="mt-7 grid gap-6 md:grid-cols-2 md:items-end">
          <p className="max-w-xl text-base leading-relaxed text-gray-600 dark:text-gray-300 md:text-lg">Straightforward answers for people planning a website. Explore the questions that matter, get a feel for the process, and start with what you know.</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 md:justify-self-end">By Joshua Adekunle <span aria-hidden="true">·</span> {questionCount} answers to get you started</p>
        </div>
      </header>

      <section id="topics" className="mx-auto mt-20 max-w-6xl scroll-mt-8 md:mt-28" aria-labelledby="topics-title">
        <div className="mb-5 flex items-end justify-between border-b border-gray-300 pb-4 dark:border-gray-700">
          <h2 id="topics-title" className="font-display text-lg font-semibold">Explore the guide</h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">{topics.length} topics</span>
        </div>
        <nav aria-label="Guide topics" className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic, index) => (
            <a key={topic.id} href={`#${topic.id}`} className="group grid min-h-32 grid-cols-[2.4rem_1fr_auto] items-start border-b border-gray-300 py-5 transition-colors hover:border-primary dark:border-gray-700 dark:hover:border-white">
              <span className="pt-0.5 text-sm tabular-nums text-gray-400">{String(index + 1).padStart(2, "0")}</span>
              <span><span className="block font-display text-lg font-medium leading-snug">{topic.title}</span><span className="mt-1 block text-xs text-gray-500 dark:text-gray-400">{topic.questions.length} questions</span></span>
              <ArrowDownRight size={17} className="mt-1 text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
          ))}
        </nav>
      </section>

      <div className="mx-auto mt-20 max-w-6xl md:mt-28">
        {topics.map((topic, topicIndex) => (
          <section id={topic.id} key={topic.id} className="grid scroll-mt-8 gap-8 border-t border-gray-300 py-12 dark:border-gray-700 md:grid-cols-[0.75fr_1.5fr] md:gap-12 md:py-16 lg:gap-20">
            <div>
              <span className="text-sm tabular-nums text-gray-400">{String(topicIndex + 1).padStart(2, "0")}.</span>
              <h2 className="mt-3 max-w-sm font-display text-2xl font-semibold leading-tight tracking-[-0.025em] md:text-3xl">{topic.title}</h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-500 dark:text-gray-400">{topic.intro}</p>
              <a href="#topics" className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-gray-500 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-white"><ArrowUp size={14} aria-hidden="true" />Back to topics</a>
            </div>
            <div>
              <div className="border-t border-gray-300 dark:border-gray-700">
                {topic.questions.map((item, questionIndex) => {
                  const key = `${topic.id}-${questionIndex}`;
                  const isOpen = openQuestion === key;
                  return (
                    <article key={key} className="border-b border-gray-300 dark:border-gray-700">
                      <h3>
                        <button type="button" aria-expanded={isOpen} aria-controls={`${key}-answer`} onClick={() => setOpenQuestion(isOpen ? null : key)} className="flex w-full items-start justify-between gap-6 py-5 text-left font-display text-base font-medium leading-snug md:py-6 md:text-lg">
                          <span>{item.q}</span><Plus size={19} className={`mt-0.5 shrink-0 text-gray-500 transition-transform duration-200 dark:text-gray-400 ${isOpen ? "rotate-45" : ""}`} aria-hidden="true" />
                        </button>
                      </h3>
                      <div id={`${key}-answer`} hidden={!isOpen}>
                        <p className="max-w-2xl pb-6 pr-10 text-sm leading-relaxed text-gray-600 dark:text-gray-300 md:text-base">{item.a}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
              <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-gray-500 dark:text-gray-400">Have a question that isn't here?</p>
                <Link to="/contact" className="inline-flex items-center gap-3 border border-gray-300 px-5 py-3 text-sm font-semibold transition-colors hover:border-primary hover:bg-primary hover:text-white dark:border-gray-700 dark:hover:border-white dark:hover:bg-white dark:hover:text-primary">Tell me about it <ArrowDownRight size={16} aria-hidden="true" /></Link>
              </div>
            </div>
          </section>
        ))}
      </div>

    </div>
  );
};

export default Guide;
