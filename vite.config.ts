import { configDefaults, defineConfig } from 'vitest/config';
import { PluginOption, splitVendorChunkPlugin } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // This is used by vite, but not VSCode or Webstorm.
  // To inform them about the paths, we add `baseUrl` and `paths`
  // to tsconfig.json
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },

  plugins: [],

  test: {
    coverage: {
      // Check all src files, not just the ones that are currently tested.
      all: true,
      // Generate cobertura for Gitlab to show test coverage in diff.
      // Generate html to view it locally (open coverage/index.html)
      // Generate text to output it to the command line, so that Gitlab can parse it and display it in MR overview and repo badge.
      reporter: ['cobertura', 'html', 'text'],
      src: ['src'],
    },
  },
});
