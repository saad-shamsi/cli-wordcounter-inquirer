import { AsyncPromptConfig } from "@inquirer/prompts";

export type InputConfig = AsyncPromptConfig & {
  default?: string;
  transformer?: (value: string, { isFinal }: { isFinal: boolean }) => string;
};

export type ConfirmConfig = AsyncPromptConfig & {
  message: string;
  default?: boolean;
  transformer?: (value: boolean) => string;
};
