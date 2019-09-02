/* Regex rules to apply to an inputted latex formula to correct for minor
   rendering differences. In order to qualify, a normalization must:
    - produce a nearly visually identical result
      - for example: \not \exists and \nexists don't look very similar, so this
        wouldn't count
    - be equivalently "correct" in some sense
      - for example: replacing \binom with \begin{pmatrix} doesn't qualify

  These calls are inherently subjective. For example, arguably \mid is more
  correct in some contexts than | but the symbols are so similar, and the
  correct practice so little known, that we'll count them all as the same.

  As a rule of thumb, if the only difference between two commands is the spacing
  they produce, we'll allow a rule to replace them.
*/

let normalizations = [
  {
    "rule": /\\not\s*\\in(?!\w)/g,
    "replacement": String.raw`\notin`
  },
  {
    "rule": /\\not\s*=/g,
    "replacement": String.raw`\neq`
  },
  {
    "rule": /\\mid(?!\w)/g,
    "replacement": String.raw`|`
  },
  {
    "rule": /\\Longleftrightarrow(?!\w)/g,
    "replacement": String.raw`\iff `
  },
  {
    "rule": /\\Longrightarrow(?!\w)/g,
    "replacement": String.raw`\implies`
  }
];

try {
  let space_rule = new RegExp("(?<!\\\\)\\\\ ", "g");
  normalizations.push({
    "rule": space_rule,
    "replacement": " "
  })
}
catch(error) {
  console.log(error);
}
