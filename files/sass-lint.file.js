return `options:
formatter: stylish
files:
include: '**/*.s+(a|c)ss'
ignore:
   - './node_modules/**/*.s+(a|c)ss'
   - './_combinedfiles/**/*.s+(a|c)ss'
rules:
# Extends
extends-before-mixins: 0
extends-before-declarations: 0
placeholder-in-extend: 0

# Mixins
mixins-before-declarations: 0

# Line Spacing
one-declaration-per-line: 2
empty-line-between-blocks: 0
single-line-per-selector: 0

# Disallows
no-attribute-selectors: 0
no-color-hex: 0
no-color-keywords: 2
no-color-literals: 0
no-combinators: 0
no-css-comments: 0
no-debug: 2
no-disallowed-properties: 0
no-duplicate-properties: 2
no-empty-rulesets: 2
no-extends: 0
no-ids: 0
no-important: 0
no-invalid-hex: 2
no-mergeable-selectors: 0
no-misspelled-properties:
   - 2
   - 'extra-properties':
      # iOS specific properties
      - 'overflow-scrolling'
      - 'touch-callout'
      # Old IE hacks
      - '*display'
      - '*overflow'
      - '*zoom'
no-qualifying-elements: 0
no-trailing-whitespace: 2
no-trailing-zero: 2
no-transition-all: 2
no-universal-selectors: 0
no-url-protocols: 2
no-vendor-prefixes: 0
no-warn: 0
property-units: 0

# Nesting
declarations-before-nesting: 0
force-attribute-nesting: 0
force-element-nesting: 0
force-pseudo-nesting: 0

# Name Formats
class-name-format: 0
function-name-format: 0
id-name-format: 0
mixin-name-format: 0
placeholder-name-format: 0
variable-name-format: 0

# Style Guide
attribute-quotes: 2
bem-depth: 0
border-zero: 2 # Forces border: 0
brace-style: 2
clean-import-paths: 0
empty-args: 0
hex-length:
   - 2
   - style: long
hex-notation: 2
indentation:
   - 2
   - size: 4
leading-zero:
   - 0
   - include: true
nesting-depth:
   - 2
   - max-depth: 5
property-sort-order: 0
pseudo-element: 0
quotes: 0
shorthand-values: 0
url-quotes: 0
variable-for-property: 0
zero-unit: 2

# Inner Spacing
space-after-comma: 2
space-before-colon:
   - 2
   - include: false
space-after-colon: 2
space-before-brace: 2
space-before-bang: 2
space-after-bang: 2
space-between-parens: 2
space-around-operator: 2

# Final Items
trailing-semicolon: 2
final-newline: 0`;