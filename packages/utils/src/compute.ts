import { syllable } from "syllable";

import { StudyParticipantReponse, StudyQuestion } from "@studyfind/types";

interface FleshScore {
  numWords: number;
  numSentences: number;
  numSyllables: number;
}

const fleschScore = ({ numWords, numSentences, numSyllables }: FleshScore): number => {
  const sentenceWeight = 1.015;
  const wordWeight = 84.6;
  const base = 206.835;

  if (!numSentences || !numWords) {
    return NaN;
  }

  return base - sentenceWeight * (numWords / numSentences) - wordWeight * (numSyllables / numWords);
};

const readabilityIndex = (text: string): number => {
  // https://en.wikipedia.org/wiki/Automated_readability_index
  // https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests#Flesch%E2%80%93Kincaid_grade_level

  if (!text) {
    return NaN;
  }

  const wordList = text
    .toLowerCase()
    .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, " ") // removes all punctuation
    .split(/\s/) // splits text at newlines and spaces
    .map((word) => word.trim()) // removes whitespace from each word
    .filter((word) => word); // removes empty strings

  const syllablesList = wordList.map((word) => syllable(word));

  const numSentences = text.split(".").length;
  const numWords = wordList.length;
  const numSyllables = numWords ? syllablesList.reduce((a, b) => a + b) : 0;

  const BIAS = 20;

  let score =
    BIAS +
    fleschScore({
      numSentences,
      numWords,
      numSyllables,
    });

  score = Math.min(score, 100);
  score = Math.max(score, 0);

  return Math.round(score);
};

const eligibilityScore = (questions: StudyQuestion[], responses: StudyParticipantReponse[]) => {
  /*
      RETURNS:
        a score between 0 and 100

      TO CALCULATE THE RAW SCORE:
        each mismatch = -1
        each don't know = 0
        each match = +1

      THEREFORE:
        worst score = -n / n
        best score = n / n

      TO CONVERT RAW SCORE TO PERCENTILE:
        - add n to both the numerator and denominator
        - multiply the fraction by 100

      EXAMPLES:
        If the user's responses match all questions:
          - they will receive a raw score of n / n
          - this will be converted to ((n + n) / (n + n)) * 100 = 100
          - this is the highest percentile

        If the user responds "don't know" to all questions:
          - they will receive a raw score of 0 / n
          - this will be converted to ((0 + n) / (n + n)) * 100 = 50
          - this is the median percentile

        If the user's responses mismatch all questions:
          - they will receive a raw score of -n / n
          - this will be converted to ((-n + n) / (n + n)) * 100 = 0
          - this is the lowest percentile
    */

  const length = questions.length;

  if (!length) return NaN;

  let score = 0;

  for (let i = 0; i < length; i++) {
    const question = questions[i];
    const response = responses[i];

    if (response === "Yes") {
      if (question.type === "Inclusion") {
        score += 1;
      } else {
        score -= 1;
      }
    }

    if (response === "No") {
      if (question.type === "Exclusion") {
        score += 1;
      } else {
        score -= 1;
      }
    }
  }

  return Math.round(((score + length) / (2 * length)) * 100);
};

export default { readabilityIndex, eligibilityScore };
