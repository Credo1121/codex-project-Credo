import { defineConfig, globalIgnores } from 'eslint/config';
import next from 'eslint-config-next/core-web-vitals';
import ts from 'eslint-config-next/typescript';
export default defineConfig([...next,...ts,globalIgnores(['**/.next/**','pages-preview/out/**','pages-preview/next-env.d.ts','docs/**','next-env.d.ts'])]);
