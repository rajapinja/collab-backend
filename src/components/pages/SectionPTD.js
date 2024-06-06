import React from 'react';

function SectionPTD({ title, content }) {
  return (
    <section className="ptd-section">
      <h2>{title}</h2>
      <pre>{content}</pre>
    </section>
  );
}

export default SectionPTD;
