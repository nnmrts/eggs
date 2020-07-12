import { existsSync } from "../../deps.ts";

export function homedir(): string {
  return Deno.env.get("HOME") || Deno.env.get("HOMEPATH") ||
    Deno.env.get("USERPROFILE") || "/";
}

//if we add a README location field to the egg config, this needs to be updated
export function readmeExists(): boolean {
  return existsSync("README.md");
}
