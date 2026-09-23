<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:appwrite-agent-rules -->
# Appwrite-first development

For any Appwrite-related implementation, debugging, or API usage:

- Use the connected `appwrite-docs` MCP as the primary source of truth.
- Check Appwrite Docs MCP before writing or changing Appwrite code.
- Prefer current Appwrite docs over model memory when they differ.
- Keep examples aligned with this project defaults:
  - Endpoint: `https://level0.ijsselheem.dev/v1`
  - Env file: `.env` (not `.env.local`)
<!-- END:appwrite-agent-rules -->

<!-- BEGIN:verification-agent-rules -->
# Verification before completion

- Always run `npm run typecheck` after code changes and before marking work as done.
<!-- END:verification-agent-rules -->