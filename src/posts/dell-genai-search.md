# Search Response with RAG at Dell

I worked on Dell's previous global search experience, where the results page included a generated response alongside semantic search results.

## What the system did

- Generated a contextual response for support queries using a large language model backed by product data.
- Combined semantic search with traditional keyword retrieval to surface more relevant results.
- Ran behind a microservices architecture with a .NET and Angular UI.

## My contribution

- Enhanced the production response layer using Retrieval-Augmented Generation (RAG) to ground answers in real product knowledge and reduce hallucination.
- Built a proof-of-concept for an in-house alternative that ran on Dell's own internal models, reducing reliance on an external vendor.
- Implemented prompt pipelines and retrieval logic to make the generated response concise and support-focused.

## Outcome

The in-house approach proved the team could run the search response on internal infrastructure, but the work was not shipped because the organisation moved to a newer search platform shortly after.