import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { apiVersion, dataset, projectId, studioTitle } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  basePath: "/studio",
  name: "default",
  title: studioTitle,
  projectId,
  dataset,
  apiVersion,
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});
