module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/lib/model.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SYSTEM_PROMPT",
    ()=>SYSTEM_PROMPT,
    "openai",
    ()=>openai
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/openai/index.mjs [app-route] (ecmascript)");
;
const openai = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]({
    apiKey: process.env.OPENAI_API_KEY
});
const SYSTEM_PROMPT = `
You are an academic advisor. Use ONLY provided context to answer.
Return concise, source-grounded answers. Offer term-by-term plans when asked.
Ask for missing info (major/minor, credits, target grad date, load per term, summers).
Always cite source URLs you used.
Warn to verify with an official advisor.
`;
}),
"[project]/lib/sources.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "degreeCatalogLinks",
    ()=>degreeCatalogLinks
]);
const degreeCatalogLinks = [
    "https://catalog.mcneese.edu/preview_program.php?catoid=97&poid=59137&_gl=1*1mrh98w*_gcl_au*MTk4MjAwMzc3MS4xNzYwMTUwNjgx",
    "https://catalog.mcneese.edu/preview_program.php?catoid=97&poid=59280&_gl=1*1mrh98w*_gcl_au*MTk4MjAwMzc3MS4xNzYwMTUwNjgx",
    "https://catalog.mcneese.edu/preview_program.php?catoid=97&poid=59024&_gl=1*1mrh98w*_gcl_au*MTk4MjAwMzc3MS4xNzYwMTUwNjgx"
];
}),
"[project]/lib/utilsChunk.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chunkHtml",
    ()=>chunkHtml
]);
function stripTags(html) {
    return html.replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "").replace(/<[^>]+>/g, " ");
}
function normalize(text) {
    return text.replace(/\s+/g, " ").trim();
}
function chunkHtml(html, source, size = 800, overlap = 120) {
    const clean = normalize(stripTags(html));
    const chunks = [];
    for(let i = 0; i < clean.length; i += size - overlap){
        const slice = clean.slice(i, i + size);
        if (!slice.trim()) continue;
        chunks.push({
            id: `${source}#${i}`,
            source,
            text: slice,
            embedding: []
        });
        if (i + size >= clean.length) break;
    }
    return {
        chunks
    };
}
}),
"[project]/lib/vectorStore.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadChunks",
    ()=>loadChunks,
    "search",
    ()=>search
]);
let chunks = [];
function loadChunks(newChunks) {
    chunks = newChunks;
}
function search(queryEmbedding, k = 6) {
    return chunks.map((c)=>({
            ...c,
            score: cosine(queryEmbedding, c.embedding)
        })).sort((a, b)=>b.score - a.score).slice(0, k);
}
function cosine(a, b) {
    let dot = 0;
    let na = 0;
    let nb = 0;
    for(let i = 0; i < a.length; i++){
        dot += a[i] * b[i];
        na += a[i] * a[i];
        nb += b[i] * b[i];
    }
    return dot / (Math.sqrt(na) * Math.sqrt(nb) + 1e-8);
}
}),
"[project]/lib/ingest.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensureIngested",
    ()=>ensureIngested
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sources$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sources.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$model$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/model.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utilsChunk$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utilsChunk.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vectorStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/vectorStore.ts [app-route] (ecmascript)");
;
;
;
;
let ready = false;
async function ensureIngested() {
    if (ready) return;
    const all = [];
    for (const url of __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sources$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["degreeCatalogLinks"]){
        const html = await fetch(url).then((r)=>r.text());
        const { chunks } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utilsChunk$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["chunkHtml"])(html, url, 900, 150);
        const embeddings = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$model$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["openai"].embeddings.create({
            model: "text-embedding-3-small",
            input: chunks.map((c)=>c.text)
        });
        chunks.forEach((c, idx)=>{
            c.embedding = embeddings.data[idx].embedding;
        });
        all.push(...chunks);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vectorStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loadChunks"])(all);
    ready = true;
}
}),
"[project]/lib/transcriptStore.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appendTranscript",
    ()=>appendTranscript,
    "getTranscript",
    ()=>getTranscript
]);
const memory = {};
function appendTranscript(sessionId, messages) {
    if (!memory[sessionId]) memory[sessionId] = [];
    memory[sessionId].push(...messages);
}
function getTranscript(sessionId) {
    return memory[sessionId] ?? [];
}
}),
"[project]/app/api/chat/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$model$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/model.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ingest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/ingest.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vectorStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/vectorStore.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$transcriptStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/transcriptStore.ts [app-route] (ecmascript)");
;
;
;
;
const runtime = "nodejs";
async function POST(req) {
    if (!process.env.OPENAI_API_KEY) {
        return new Response("Missing OPENAI_API_KEY", {
            status: 500
        });
    }
    const body = await req.json();
    const question = body?.question ?? "";
    const sessionId = body?.sessionId ?? "demo";
    const studentContext = body?.studentContext ?? {};
    if (!question.trim()) {
        return new Response("Missing question", {
            status: 400
        });
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ingest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureIngested"])();
    const qEmbedding = (await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$model$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["openai"].embeddings.create({
        model: "text-embedding-3-small",
        input: question
    })).data[0].embedding;
    const hits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vectorStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["search"])(qEmbedding, 6);
    const context = hits.map((h)=>`Source: ${h.source}\n${h.text}`).join("\n\n");
    const messages = [
        {
            role: "system",
            content: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$model$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SYSTEM_PROMPT"]
        },
        {
            role: "user",
            content: `Context:\n${context}\n\nStudent data: ${JSON.stringify(studentContext)}\n\nQuestion: ${question}`
        }
    ];
    const completion = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$model$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["openai"].chat.completions.create({
        model: "gpt-4o-mini",
        messages,
        stream: true
    });
    const encoder = new TextEncoder();
    let fullText = "";
    const stream = new ReadableStream({
        async start (controller) {
            for await (const part of completion){
                const delta = part.choices[0]?.delta?.content ?? "";
                if (delta) {
                    fullText += delta;
                    controller.enqueue(encoder.encode(delta));
                }
            }
            controller.close();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$transcriptStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendTranscript"])(sessionId, buildTranscript(question, fullText));
        }
    });
    return new Response(stream, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "no-cache"
        }
    });
}
function buildTranscript(question, answer) {
    const now = new Date().toISOString();
    return [
        {
            role: "user",
            content: question,
            timestamp: now
        },
        {
            role: "assistant",
            content: answer,
            timestamp: now
        }
    ];
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ee22cfca._.js.map