// Source: script.js CONFIG and CARDS. Names and text generalized.
// Numeric values below are public catalog examples, not private commercial records.
// Keep settlement placeholders and QR disabled under the current privacy rule.
const CONFIG = {
  shopName: '[SHOP_NAME]',
  contactUrl: '[CONTACT_URL]',
  facebook: '[CONTACT_URL]',
  instagram: '[CONTACT_URL]',
  siteUrl: '',
  socialImage: '',
  payment: { momo: '[ACCOUNT_NUMBER]', vcb: '[ACCOUNT_NUMBER]', holder: '[RECIPIENT_NAME]' },
  sepay: { enabled:false, bank:'[BANK_NAME]', account:'[ACCOUNT_NUMBER]', threshold:100000, prefix:'SHOP' },
  orderMessageTemplate: '[GREETING]\n{lines}\n[TOTAL]: {total}\n[SAVED]: {saved}\n[METHOD]: {method}',
  maxQuantity: 99,
  copyrightYear: 2026,
  storageKey: 'storefront-order-v1',
  introKey: 'storefront-intro-v1',
  motionKey: 'storefront-motion-v1',
  methods: { momo: 'MoMo', vcb: 'Vietcombank' },
  copy: {
    heroEyebrow: '[HEROEYEBROW]',
    heroLine1: '[HEROLINE1]', heroLine2: '[HEROLINE2]',
    heroTagline: '[HEROTAGLINE]',
    heroDescription: '[HERODESCRIPTION]',
    heroProof: '[HEROPROOF]',
    pricingIntro: '[PRICINGINTRO]',
    pricingFootnote: '[PRICINGFOOTNOTE]',
    whyIntro: '[WHYINTRO]',
    howIntro: '[HOWINTRO]',
    paymentBanner: '[PAYMENTBANNER]',
    paymentSafety: '[PAYMENTSAFETY]',
    closingText: '[CLOSINGTEXT]'
  },
  benefits: [
    ['tag', '[BENEFITS_TITLE]', '[BENEFITS_TEXT]'],
    ['bolt', '[BENEFITS_TITLE]', '[BENEFITS_TEXT]'],
    ['shield', '[BENEFITS_TITLE]', '[BENEFITS_TEXT]'],
    ['chat', '[BENEFITS_TITLE]', '[BENEFITS_TEXT]']
  ],
  reasons: [
    ['[REASONS_TITLE]', '[REASONS_TEXT]'],
    ['[REASONS_TITLE]', '[REASONS_TEXT]'],
    ['[REASONS_TITLE]', '[REASONS_TEXT]'],
    ['[REASONS_TITLE]', '[REASONS_TEXT]'],
    ['[REASONS_TITLE]', '[REASONS_TEXT]']
  ],
  steps: [
    ['[STEPS_TITLE]', '[STEPS_TEXT]'],
    ['[STEPS_TITLE]', '[STEPS_TEXT]'],
    ['[STEPS_TITLE]', '[STEPS_TEXT]']
  ],
  faq: [
    ['[FAQ_TEXT]', '[FAQ_TEXT]'],
    ['[FAQ_TEXT]', '[FAQ_TEXT]'],
    ['[FAQ_TEXT]', '[FAQ_TEXT]'],
    ['[FAQ_TEXT]', '[FAQ_TEXT]'],
    ['[FAQ_TEXT]', '[FAQ_TEXT]']
  ]
};
const CARDS = [
  { id: 'alpha', name: '[PRODUCT_ALPHA]', accent: '--brand-primary', items: [[5000,5000],[10000,10000],[20000,19000],[50000,49000],[100000,97000],[200000,195000],[500000,485000]] },
  { id: 'beta', name: '[PRODUCT_BETA]', accent: '--brand-secondary', items: [[20000,20000],[50000,49000],[100000,99000],[200000,197000],[500000,490000],[1000000,975000]] },
  { id: 'gamma', name: '[PRODUCT_GAMMA]', accent: '--brand-tertiary', items: [[20000,20000],[50000,48000],[100000,96000],[200000,192000],[300000,288000],[500000,480000],[1000000,960000]] }
];

