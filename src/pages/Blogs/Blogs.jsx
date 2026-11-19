import React from "react";
import { Link } from "react-router";

const articles = [
  {
    id: 1,
    category: "Legal Awareness",
    date: "November 12, 2026",
    readTime: "5 min read",
    title: "Why Understanding Your Legal Rights Matters",
    description:
      "Learn why knowing your basic legal rights can help you make informed decisions and protect your interests.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    category: "Family Law",
    date: "November 08, 2026",
    readTime: "4 min read",
    title: "A Beginner's Guide to Understanding Family Law",
    description:
      "Explore some common family law matters and understand when professional legal guidance may be helpful.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    category: "Business Law",
    date: "November 02, 2026",
    readTime: "6 min read",
    title: "Important Legal Considerations Before Starting a Business",
    description:
      "Discover some important legal considerations entrepreneurs should explore before launching a business.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    category: "Consumer Rights",
    date: "October 25, 2026",
    readTime: "5 min read",
    title: "Consumer Rights: What Every Customer Should Know",
    description:
      "An introduction to consumer protection and the importance of understanding your rights as a customer.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    category: "Property Law",
    date: "October 18, 2026",
    readTime: "7 min read",
    title: "Things to Check Before Signing a Property Agreement",
    description:
      "Understand why reviewing documents and seeking professional advice can matter in property transactions.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    category: "Legal Tips",
    date: "October 10, 2026",
    readTime: "3 min read",
    title: "How to Prepare for Your First Lawyer Consultation",
    description:
      "A practical checklist of information and documents you may want to prepare before meeting a lawyer.",
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=900&q=80",
  },
];

const Blogs = () => {
  return (
    <main className="bg-gray-50">
      <section className="bg-emerald-950 px-5 py-24 text-center text-white sm:px-8">
        <span className="text-sm font-bold uppercase tracking-[3px] text-emerald-300">
          Law.BD Journal
        </span>
        <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
          Knowledge is Your Best Protection.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-emerald-100">
          Explore articles, practical insights, and introductory guides on
          different legal topics.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mb-10">
          <span className="text-sm font-bold uppercase tracking-[3px] text-emerald-700">
            Latest Articles
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900">
            Explore Our Legal Insights
          </h2>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-56 overflow-hidden bg-gray-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">
                    {article.readTime}
                  </span>
                </div>

                <p className="mt-4 text-xs text-gray-400">{article.date}</p>

                <h3 className="mt-3 text-xl font-bold leading-7 text-gray-900">
                  {article.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {article.description}
                </p>

                <Link
                  to="/contact"
                  className="mt-5 inline-flex font-bold text-emerald-800 hover:text-emerald-600"
                >
                  Ask About This Topic →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 rounded-2xl bg-amber-50 p-5 text-sm leading-7 text-amber-900">
          <strong>Disclaimer:</strong> These articles are for general
          informational purposes only. They are not a substitute for
          professional legal advice.
        </p>
      </section>
    </main>
  );
};

export default Blogs;
