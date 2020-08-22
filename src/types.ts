import { IFlagArgument, IFlagOptions, semver } from "../deps.ts";

export const releases = [
  "patch",
  "minor",
  "major",
  "pre",
  "prepatch",
  "preminor",
  "premajor",
  "prerelease",
];

export function validateRelease(value: string): boolean {
  return releases.includes(value)
}

export function releaseType(
  option: IFlagOptions,
  arg: IFlagArgument,
  value: string,
): string {
  if (!validateRelease(value)) {
    throw new Error(
      `Option --${option.name} must be a valid release type but got: ${value}.\nAccepted values are ${
        releases.join(", ")
      }.`,
    );
  }
  return value;
}

export function validateVersion(value: string): boolean {
  return !!semver.valid(value);
}

export function versionType(
  option: IFlagOptions,
  arg: IFlagArgument,
  value: string,
): string {
  if (!validateVersion(value)) {
    throw new Error(
      `Option --${option.name} must be a valid version but got: ${value}.\nVersion must follow Semantic Versioning 2.0.0.`,
    );
  }
  return value;
}

export function validateURL(value: string): boolean {
  const urlRegex =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/;
  return value === "" || !!value.match(urlRegex);
}

export function urlType(
  option: IFlagOptions,
  arg: IFlagArgument,
  value: string,
): string {
  if (!validateURL(value)) {
    throw new Error(
      `Option --${option.name} must be a valid url but got: ${value}.`,
    );
  }
  return value;
}
