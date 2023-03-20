import { join } from "path";
import { readFileSync } from "fs";

export const schemaFile = join(__dirname, "../schema.graphql");
export const typeDefs: string = readFileSync(schemaFile, "utf-8");
