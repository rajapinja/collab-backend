import React from 'react';
import './ChromaDB.css';

const ChromaDB = () => {
  return (
    <div className="chromadb">
      <h1>Getting Started</h1>
      <p>

Chroma is the AI-native open-source vector database. Chroma makes it easy to build LLM apps by making knowledge, facts, and skills pluggable for LLMs.
     
        It comes with everything you need to get started built in, and runs on your machine. A hosted version is coming soon!
      </p>

      <h2>1. Install</h2>
      <h3>Command Line</h3>
      <pre>
        <code>pip install chromadb</code>
      </pre>

      <h2>2. Create a Chroma Client</h2>
      <pre>
        <code>{`python
import chromadb
chroma_client = chromadb.Client()`}</code>
      </pre>

      <h2>3. Create a collection</h2>
      <p>Collections are where you'll store your embeddings, documents, and any additional metadata. You can create a collection with a name:</p>
      <pre>
        <code>{`python
collection = chroma_client.create_collection(name="my_collection")`}</code>
      </pre>

      <h2>4. Add some text documents to the collection</h2>
      <p>Chroma will store your text and handle embedding and indexing automatically. You can also customize the embedding model.</p>
      <pre>
        <code>{`python
collection.add(
  documents=[
    "This is a document about pineapple",
    "This is a document about oranges"
  ],
  ids=["id1", "id2"]
)`}</code>
      </pre>

      <h2>5. Query the collection</h2>
      <p>You can query the collection with a list of query texts, and Chroma will return the n most similar results. It's that easy!</p>
      <pre>
        <code>{`python
results = collection.query(
  query_texts=["This is a query document about hawaii"], // Chroma will embed this for you
  n_results=2 // how many results to return
)
print(results)`}</code>
      </pre>

      <h2>6. Inspect Results</h2>
      <p>From the above query - you can see that our query about hawaii is the semantically most similar to the document about pineapple. This, intuitively, makes sense!</p>
      <pre>
        <code>{`javascript
{
  'documents': [[
      'This is a document about pineapple',
      'This is a document about oranges'
  ]],
  'ids': [['id1', 'id2']],
  'distances': [[1.0404009819030762, 1.243080496788025]],
  'uris': None,
  'data': None,
  'metadatas': [[None, None]],
  'embeddings': None,
}`}</code>
      </pre>

      <h2>7. Try it out yourself</h2>
      <p>For example - what if we tried querying with "This is a document about florida"?</p>
      <pre>
        <code>{`python
import chromadb
chroma_client = chromadb.Client()
// switch \`create_collection\` to \`get_or_create_collection\` to avoid creating a new collection every time
collection = chroma_client.get_or_create_collection(name="my_collection")
// switch \`add\` to \`upsert\` to avoid adding the same documents every time
collection.upsert(
  documents=[
    "This is a document about pineapple",
    "This is a document about oranges"
  ],
  ids=["id1", "id2"]
)
results = collection.query(
  query_texts=["This is a query document about florida"], // Chroma will embed this for you
  n_results=2 // how many results to return
)
print(results)`}</code>
      </pre>

      <h2>Next steps</h2>
      <ul>
        <li>Read the <a href="#">Usage Guide</a> to learn more about the API</li>
        <li>Learn how to <a href="#">Deploy Chroma to a server</a></li>
        <li>Join Chroma's <a href="#">Discord Community</a> to ask questions and get help</li>
        <li>Follow Chroma on Twitter (<a href="https://twitter.com/trychroma">@trychroma</a>) for updates</li>
        <li><a href="#">Edit this page on GitHub</a></li>
      </ul>
    </div>
  );
};

export default ChromaDB;
