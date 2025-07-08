# Contex

Contex is an open-source semantic search engine designed for engineers, developers, and technical professionals. It understands the intent behind your queries, delivering context-aware results to accelerate problem-solving and knowledge discovery. Whether you're debugging cryptic errors, searching for vague code concepts, or navigating fragmented documentation, Contex acts as your "bug-fixer's assistant" and "corporate brain."

## Key Features

- **Semantic Understanding**: Matches queries to the meaning of source documents, not just keywords.
- **Context-Aware Results**: Tailors solutions to your specific context (e.g., a `TypeError` in a React `useEffect` hook).
- **Unified Knowledge Search**: Aggregates insights from GitHub Issues, Stack Overflow, internal docs (Notion, Confluence), and public blogs.
- **Engineer-Centric**: Built to solve real-world developer pain points, from error resolution to code discovery.

## Installation

> **Note**: Contex is in early development. Instructions below assume a basic setup for developers interested in contributing or testing.

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/PrtHub/contex.git
    cd contex
    ```

2.  **Install dependencies:**
    This project uses pnpm as the package manager.

    ```bash
    pnpm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root directory.

    ```bash
    cp .env.example .env.local
    ```

    Add required variables (e.g., API keys for external services). See `.env.example` for details.

4.  **Run the development server:**
    ```bash
    pnpm dev
    ```

Open <http://localhost:3000> in your browser to see Contex in action.

## Usage

### Search Queries

Enter queries like `"TypeError in React useEffect async"` or `"calculate user age from DOB"` in the search bar.

Contex will return semantically relevant results from trusted sources.

### Example Scenarios

- **Debugging**: Find solutions to specific error messages with context-aware suggestions.
- **Code Discovery**: Locate functions or snippets by describing their purpose, not their exact name.
- **Knowledge Aggregation**: Pull insights from scattered sources into a single interface.

## Contributing

We welcome contributions from the community! To get started:

1.  Fork the repository.
2.  Create a feature branch:
    ```bash
    git checkout -b feature/your-feature
    ```
3.  Commit your changes:
    ```bash
    git commit -m "Add your feature"
    ```
4.  Push to the branch:
    ```bash
    git push origin feature/your-feature
    ```
5.  Open a Pull Request.

Please read our `Contributing Guidelines` and `Code of Conduct` before submitting.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For questions, feedback, or collaboration, reach out via GitHub Issues or email at `your-email@example.com`.

---

_Built with ❤️ for engineers, by engineers._
