import { pipeline, env } from "@huggingface/transformers";

// Recommended: set the cache directory to a writeable path if running in a serverless environment
// If you're deploying to Vercel, this might require specific setup or a temporary directory
// env.cacheDir = './.cache'; // Or a suitable temp directory if Vercel allows write access

// This will load the model only once.
let embeddingPipeline: any = null;

export async function getEmbeddingPipeline() {
  if (!embeddingPipeline) {
    embeddingPipeline = await pipeline(
      "feature-extraction",
      "Xenova/all-MiniLM-L6-v2"
    );
  }
  return embeddingPipeline;
}
