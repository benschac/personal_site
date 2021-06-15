export const HeadPost = ({ meta, isBlogPost }) => (
  <>
    <h1 className={isBlogPost ?? "Benjamin Schachter Blog Post" ?? ""}>
      {meta.title}
    </h1>
    <div>
      {<p>{meta?.description ?? ""}</p>}
      <span>{meta.date}</span>
      <span role="img" aria-label="one coffee">
        `☕ ${meta.readTime} + min read`
      </span>
    </div>
  </>
);
