import Image from 'next/image';
import { AdminCMS } from '@/components/AdminCMS';
import { Calculators } from '@/components/Calculators';
import { RatingStars } from '@/components/RatingStars';
import { UserRating } from '@/components/UserRating';
import { categories, posts, tools } from '@/lib/content';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Aapka Sahayak',
  url: 'https://aapkasahayak.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://aapkasahayak.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl space-y-16 px-4 py-8 md:px-8 md:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="grid items-center gap-8 rounded-3xl bg-gradient-to-r from-cyan-700 to-sky-500 p-8 text-white md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-wider text-cyan-100">Reimagined experience</p>
          <h1 className="mt-2 text-4xl font-bold leading-tight md:text-5xl">
            Your modern hub for AI tools, calculators, and actionable guides.
          </h1>
          <p className="mt-4 text-cyan-50">
            Built with Next.js and Tailwind CSS for speed, accessibility, and SEO-driven growth.
          </p>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80"
          alt="Dashboard mockup"
          width={900}
          height={600}
          className="h-64 w-full rounded-2xl object-cover"
          priority
        />
      </section>

      <section>
        <h2 className="section-title">Top Categories</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <article key={category.name} className="rounded-2xl bg-white p-5 shadow-card">
              <p className="text-3xl">{category.icon}</p>
              <h3 className="mt-2 text-lg font-semibold">{category.name}</h3>
              <p className="text-sm text-slate-600">{category.count} curated tools</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Featured Tool Directory</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {tools.map((tool) => (
            <article key={tool.name} className="rounded-2xl bg-white p-5 shadow-card">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold">{tool.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{tool.description}</p>
                </div>
                <span className="rounded-full bg-cyan-50 px-2 py-1 text-xs font-medium text-cyan-700">
                  {tool.users} users
                </span>
              </div>
              <div className="mt-4">
                <RatingStars rating={tool.rating} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Latest Blog Posts</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {posts.map((post, index) => (
            <article key={post.title} className="overflow-hidden rounded-2xl bg-white shadow-card">
              <Image
                src={`https://images.unsplash.com/photo-${1510000000000 + index * 11000}?auto=format&fit=crop&w=700&q=80`}
                alt={post.title}
                width={700}
                height={400}
                className="h-40 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-cyan-700">{post.category}</p>
                <h3 className="mt-2 font-semibold">{post.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
                <p className="mt-3 text-xs text-slate-400">{post.date}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="section-title">Interactive Calculators</h2>
        <Calculators />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <UserRating />
        <AdminCMS />
      </section>
    </main>
  );
}
