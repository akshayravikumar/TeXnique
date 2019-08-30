/* Regex rules to apply to an inputted latex formula to correct for minor
   rendering differences. In order to qualify, a normalization must:
    - produce a nearly visually identical result
    - be equivalently "correct" in some sense
      - replacing \binom with \begin{pmatrix} doesn't qualify, for example
*/

let normalizations = [
  {
    "rule": /\\not\s*\\in/,
    "replacement": String.raw`\notin`
  },
  {
    "rule": /\\not\s*=/,
    "replacement": String.raw`\neq`
  }
];
