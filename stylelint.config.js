module.exports = {
  extends: ["stylelint-config-standard"],
  rules: {
    "no-empty-source": null,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
    "no-empty-source": null,
    "declaration-empty-line-before": null,
    "length-zero-no-unit": null,
    "rule-empty-line-before": null,
    "at-rule-no-unknown": null,
    //"scss/at-rule-no-unknown": true,
  },
};
