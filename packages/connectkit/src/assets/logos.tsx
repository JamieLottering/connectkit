export const Injected = ({ ...props }) => (
  <svg
    {...props}
    aria-hidden="true"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.6505 3.64041C15.6501 3.64062 15.6497 3.64083 15.6493 3.64103L6.05165 8.43985L16.2501 13.5391L26.4484 8.43987L16.8508 3.64103C16.8504 3.64083 16.85 3.64063 16.8496 3.64043C16.6632 3.54806 16.458 3.5 16.25 3.5C16.042 3.5 15.8369 3.54806 15.6505 3.64041ZM28 10.4592L17.5001 15.7091L17.5 28.5205L27.248 23.6465L27.2508 23.6452C27.4757 23.5334 27.665 23.3611 27.7973 23.1477C27.9297 22.9342 27.9999 22.6881 28 22.4369V10.4592ZM15 28.527L15.0001 15.7091L4.50006 10.4591V22.4333C4.49831 22.6849 4.56687 22.9319 4.69807 23.1466C4.82896 23.3608 5.01696 23.5342 5.24095 23.6475C5.24148 23.6477 5.242 23.648 5.24253 23.6483L15 28.527ZM14.5207 31.0824L4.12104 25.8826L4.11759 25.8809C3.47681 25.558 2.93902 25.0625 2.56486 24.4502C2.19154 23.8394 1.99597 23.1365 2.00006 22.4207V10.0486C2.00044 9.33234 2.20062 8.62972 2.5781 8.021C2.95529 7.41274 3.49457 6.92167 4.13537 6.60291C4.13585 6.60267 4.13633 6.60243 4.13681 6.60219L14.534 1.40359L14.5368 1.40221C15.0692 1.13767 15.6556 1 16.25 1C16.8445 1 17.4309 1.13767 17.9633 1.40221L17.966 1.40358L28.3633 6.60219C28.3638 6.60245 28.3643 6.6027 28.3648 6.60295C29.0055 6.92171 29.5448 7.41276 29.922 8.021C30.2994 8.62973 30.4996 9.33168 30.5 10.0479V22.4376C30.4996 23.1538 30.2994 23.8565 29.922 24.4652C29.5448 25.0734 29.0056 25.5644 28.365 25.8831C28.3644 25.8834 28.3638 25.8837 28.3633 25.884L17.9664 31.0824C17.9663 31.0825 17.9665 31.0824 17.9664 31.0824C17.4316 31.3499 16.8415 31.4894 16.2435 31.4894C15.6455 31.4894 15.0554 31.3499 14.5207 31.0824C14.5205 31.0824 14.5208 31.0825 14.5207 31.0824Z"
      fill="#CCCCCC"
    />
  </svg>
);
export const WalletConnect = ({ background = false, ...props }) => (
  <svg
    {...props}
    aria-hidden="true"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={
      background ? { background: 'var(--ck-brand-walletConnect)' } : undefined
    }
  >
    <path
      d="M9.58818 11.8556C13.1293 8.31442 18.8706 8.31442 22.4117 11.8556L22.8379 12.2818C23.015 12.4588 23.015 12.7459 22.8379 12.9229L21.3801 14.3808C21.2915 14.4693 21.148 14.4693 21.0595 14.3808L20.473 13.7943C18.0026 11.3239 13.9973 11.3239 11.5269 13.7943L10.8989 14.4223C10.8104 14.5109 10.6668 14.5109 10.5783 14.4223L9.12041 12.9645C8.94336 12.7875 8.94336 12.5004 9.12041 12.3234L9.58818 11.8556ZM25.4268 14.8706L26.7243 16.1682C26.9013 16.3452 26.9013 16.6323 26.7243 16.8093L20.8737 22.6599C20.6966 22.8371 20.4096 22.8371 20.2325 22.6599L16.0802 18.5076C16.0359 18.4634 15.9641 18.4634 15.9199 18.5076L11.7675 22.6599C11.5905 22.8371 11.3034 22.8371 11.1264 22.66C11.1264 22.66 11.1264 22.6599 11.1264 22.6599L5.27561 16.8092C5.09856 16.6322 5.09856 16.3451 5.27561 16.168L6.57313 14.8706C6.75019 14.6934 7.03726 14.6934 7.21431 14.8706L11.3668 19.023C11.411 19.0672 11.4828 19.0672 11.5271 19.023L15.6793 14.8706C15.8563 14.6934 16.1434 14.6934 16.3205 14.8706L20.473 19.023C20.5172 19.0672 20.589 19.0672 20.6332 19.023L24.7856 14.8706C24.9627 14.6935 25.2498 14.6935 25.4268 14.8706Z"
      fill={background ? 'white' : 'var(--ck-brand-walletConnect)'}
    />
  </svg>
);

export const WalletConnectLegacy = ({ background = false, ...props }) =>
  WalletConnect({ background, ...props });

export const MetaMask = ({ background = false, ...props }) => (
  <svg
    {...props}
    aria-hidden="true"
    style={
      background
        ? {
            background:
              'linear-gradient(0deg, var(--ck-brand-metamask-12), var(--ck-brand-metamask-11))',
            borderRadius: '27.5%',
          }
        : undefined
    }
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/**
    <defs>
      <linearGradient
        id="paint0_linear_967_843"
        x1="16"
        y1="0"
        x2="16"
        y2="32"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.130682" stopColor="var(--ck-brand-metamask-11)" />
        <stop offset="1" stopColor="var(--ck-brand-metamask-12)" />
      </linearGradient>
    </defs>
    <rect width="32" height="32" fill="url(#paint0_linear_967_843)" />
     */}
    <path
      d="M27.2684 4.03027L17.5018 11.2841L19.3079 7.00442L27.2684 4.03027Z"
      fill="var(--ck-brand-metamask-02)"
      stroke="var(--ck-brand-metamask-02)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.7218 4.03027L14.4099 11.3528L12.6921 7.00442L4.7218 4.03027Z"
      fill="var(--ck-brand-metamask-08)"
      stroke="var(--ck-brand-metamask-08)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23.7544 20.8438L21.1532 24.8289L26.7187 26.3602L28.3187 20.9321L23.7544 20.8438Z"
      fill="var(--ck-brand-metamask-08)"
      stroke="var(--ck-brand-metamask-08)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.69104 20.9321L5.28117 26.3602L10.8467 24.8289L8.24551 20.8438L3.69104 20.9321Z"
      fill="var(--ck-brand-metamask-08)"
      stroke="var(--ck-brand-metamask-08)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5327 14.1108L8.98181 16.4568L14.5081 16.7022L14.3117 10.7637L10.5327 14.1108Z"
      fill="var(--ck-brand-metamask-08)"
      stroke="var(--ck-brand-metamask-08)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.4576 14.1111L17.6295 10.6953L17.5018 16.7025L23.0182 16.4571L21.4576 14.1111Z"
      fill="var(--ck-brand-metamask-08)"
      stroke="var(--ck-brand-metamask-08)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.8469 24.8292L14.1647 23.2096L11.2984 20.9717L10.8469 24.8292Z"
      fill="var(--ck-brand-metamask-08)"
      stroke="var(--ck-brand-metamask-08)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.8257 23.2096L21.1531 24.8292L20.6918 20.9717L17.8257 23.2096Z"
      fill="var(--ck-brand-metamask-08)"
      stroke="var(--ck-brand-metamask-08)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.1531 24.8296L17.8257 23.21L18.0906 25.3793L18.0612 26.2921L21.1531 24.8296Z"
      fill="var(--ck-brand-metamask-06)"
      stroke="var(--ck-brand-metamask-06)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.8469 24.8296L13.9388 26.2921L13.9192 25.3793L14.1647 23.21L10.8469 24.8296Z"
      fill="var(--ck-brand-metamask-06)"
      stroke="var(--ck-brand-metamask-06)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.9877 19.5389L11.2196 18.7242L13.1729 17.8311L13.9877 19.5389Z"
      fill="var(--ck-brand-metamask-09)"
      stroke="var(--ck-brand-metamask-09)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.0023 19.5389L18.8171 17.8311L20.7802 18.7242L18.0023 19.5389Z"
      fill="var(--ck-brand-metamask-09)"
      stroke="var(--ck-brand-metamask-09)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.8468 24.8289L11.3179 20.8438L8.24561 20.9321L10.8468 24.8289Z"
      fill="var(--ck-brand-metamask-03)"
      stroke="var(--ck-brand-metamask-03)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.6821 20.8438L21.1532 24.8289L23.7544 20.9321L20.6821 20.8438Z"
      fill="var(--ck-brand-metamask-03)"
      stroke="var(--ck-brand-metamask-03)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23.0182 16.4565L17.5018 16.7019L18.0122 19.5387L18.827 17.8308L20.7902 18.7239L23.0182 16.4565Z"
      fill="var(--ck-brand-metamask-03)"
      stroke="var(--ck-brand-metamask-03)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.2198 18.7239L13.1829 17.8308L13.9878 19.5387L14.5081 16.7019L8.98181 16.4565L11.2198 18.7239Z"
      fill="var(--ck-brand-metamask-03)"
      stroke="var(--ck-brand-metamask-03)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.98181 16.4565L11.2983 20.9718L11.2198 18.7239L8.98181 16.4565Z"
      fill="var(--ck-brand-metamask-10)"
      stroke="var(--ck-brand-metamask-10)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.7901 18.7239L20.6919 20.9718L23.0181 16.4565L20.7901 18.7239Z"
      fill="var(--ck-brand-metamask-10)"
      stroke="var(--ck-brand-metamask-10)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.508 16.7021L13.9878 19.5389L14.6356 22.886L14.7828 18.4788L14.508 16.7021Z"
      fill="var(--ck-brand-metamask-10)"
      stroke="var(--ck-brand-metamask-10)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5017 16.7021L17.2367 18.4689L17.3545 22.886L18.0121 19.5389L17.5017 16.7021Z"
      fill="var(--ck-brand-metamask-10)"
      stroke="var(--ck-brand-metamask-10)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.0121 19.5388L17.3545 22.886L17.8257 23.2099L20.6918 20.972L20.79 18.7241L18.0121 19.5388Z"
      fill="var(--ck-brand-metamask-01)"
      stroke="var(--ck-brand-metamask-01)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.2196 18.7241L11.2981 20.972L14.1644 23.2099L14.6355 22.886L13.9877 19.5388L11.2196 18.7241Z"
      fill="var(--ck-brand-metamask-01)"
      stroke="var(--ck-brand-metamask-01)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.0615 26.2917L18.0908 25.3788L17.8455 25.1628H14.145L13.9192 25.3788L13.9388 26.2917L10.8469 24.8291L11.9267 25.7126L14.1155 27.234H17.875L20.0736 25.7126L21.1533 24.8291L18.0615 26.2917Z"
      fill="var(--ck-brand-metamask-07)"
      stroke="var(--ck-brand-metamask-07)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.8258 23.2096L17.3546 22.8857H14.6357L14.1646 23.2096L13.9191 25.379L14.1449 25.163H17.8454L18.0907 25.379L17.8258 23.2096Z"
      fill="var(--ck-brand-metamask-04)"
      stroke="var(--ck-brand-metamask-04)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27.6806 11.7552L28.5149 7.75041L27.2683 4.03027L17.8257 11.0387L21.4575 14.1109L26.591 15.6128L27.7296 14.2876L27.2389 13.9342L28.0241 13.2178L27.4156 12.7465L28.2007 12.1478L27.6806 11.7552Z"
      fill="var(--ck-brand-metamask-05)"
      stroke="var(--ck-brand-metamask-05)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.48486 7.75041L4.3192 11.7552L3.78916 12.1478L4.57441 12.7465L3.97566 13.2178L4.7609 13.9342L4.27012 14.2876L5.39892 15.6128L10.5325 14.1109L14.1644 11.0387L4.72164 4.03027L3.48486 7.75041Z"
      fill="var(--ck-brand-metamask-05)"
      stroke="var(--ck-brand-metamask-05)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26.591 15.6122L21.4575 14.1104L23.0181 16.4564L20.6919 20.9716L23.7544 20.9323H28.3186L26.591 15.6122Z"
      fill="var(--ck-brand-metamask-01)"
      stroke="var(--ck-brand-metamask-01)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5326 14.1104L5.39897 15.6122L3.69104 20.9323H8.24551L11.2982 20.9716L8.98168 16.4564L10.5326 14.1104Z"
      fill="var(--ck-brand-metamask-01)"
      stroke="var(--ck-brand-metamask-01)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5018 16.7018L17.8258 11.0381L19.3177 7.00391H12.6921L14.1645 11.0381L14.5081 16.7018L14.6258 18.4883L14.6356 22.8856H17.3546L17.3742 18.4883L17.5018 16.7018Z"
      fill="var(--ck-brand-metamask-01)"
      stroke="var(--ck-brand-metamask-01)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Coinbase = ({ background = false, ...props }) => (
  <svg
    {...props}
    aria-hidden="true"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="10" fill="var(--ck-brand-coinbaseWallet)" />
    {background && (
      <rect
        rx="27%"
        width="20"
        height="20"
        fill="var(--ck-brand-coinbaseWallet)"
      />
    )}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.0001 17C13.8661 17 17.0001 13.866 17.0001 10C17.0001 6.13401 13.8661 3 10.0001 3C6.13413 3 3.00012 6.13401 3.00012 10C3.00012 13.866 6.13413 17 10.0001 17ZM8.25012 7.71429C7.95427 7.71429 7.71441 7.95414 7.71441 8.25V11.75C7.71441 12.0459 7.95427 12.2857 8.25012 12.2857H11.7501C12.046 12.2857 12.2858 12.0459 12.2858 11.75V8.25C12.2858 7.95414 12.046 7.71429 11.7501 7.71429H8.25012Z"
      fill="white"
    />
  </svg>
);

export const Family = ({ ...props }) => {
  const img =
    'data:image/png;base64,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';

  return (
    <svg
      {...props}
      aria-hidden="true"
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        backgroundSize: '100% 100%',
        backgroundImage: `url("${img}")`,
      }}
    />
  );
};

export const Trust = ({ theme = 'light', ...props }) => (
  <svg
    {...props}
    aria-hidden="true"
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width="44"
      height="44"
      fill={
        theme === 'light'
          ? 'var(--ck-brand-trust-02)'
          : 'var(--ck-brand-trust-02b)'
      }
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33.0246 11.8662C33.4096 11.8662 33.774 12.0243 34.0421 12.2925C34.3102 12.5675 34.4615 12.9387 34.4546 13.3168C34.3859 17.4143 34.2277 20.5493 33.9321 23.0312C33.6433 25.5131 33.2102 27.3556 32.5571 28.8475C32.1171 29.8443 31.574 30.6693 30.9346 31.3706C30.0752 32.2987 29.0921 32.9725 28.0196 33.6119C27.561 33.8861 27.0843 34.1568 26.5842 34.4408C25.5172 35.0468 24.3441 35.713 23.0146 36.6025C22.5333 36.9256 21.9077 36.9256 21.4265 36.6025C20.0766 35.7026 18.8879 35.0281 17.8112 34.4173C17.5718 34.2815 17.3379 34.1488 17.109 34.0175C15.8509 33.2887 14.7165 32.5943 13.7265 31.5906C13.0665 30.9306 12.4959 30.1262 12.0421 29.1706C11.4234 27.8918 11.004 26.345 10.6946 24.3443C10.2821 21.67 10.0759 18.1706 10.0002 13.3168C9.99336 12.9387 10.1377 12.5675 10.4059 12.2925C10.674 12.0243 11.0452 11.8662 11.4302 11.8662H12.0215C13.8433 11.8731 17.8652 11.6943 21.344 8.98559C21.8596 8.58683 22.5815 8.58683 23.0971 8.98559C26.5759 11.6943 30.5977 11.8731 32.4265 11.8662H33.0246ZM29.8277 27.9331C30.2746 27.0118 30.6459 25.74 30.9277 23.9112C31.2646 21.725 31.4709 18.755 31.5671 14.7125C29.4221 14.6506 25.7371 14.2381 22.224 11.8731C18.7109 14.2312 15.0259 14.6437 12.8877 14.7125C12.9633 18.0537 13.1146 20.6525 13.3552 22.6943C13.6302 25.0181 14.0221 26.5925 14.5102 27.6993C14.8333 28.435 15.1909 28.9643 15.6171 29.4318C16.1877 30.0575 16.9096 30.5731 17.8927 31.1643C18.3005 31.409 18.7502 31.6635 19.2396 31.9406C20.1116 32.4341 21.1099 32.9991 22.224 33.7081C23.3175 33.0107 24.3014 32.4515 25.1633 31.9616C25.4231 31.8139 25.6717 31.6725 25.909 31.5356C27.119 30.8412 28.0127 30.2637 28.6796 29.59C29.1265 29.1293 29.4909 28.6275 29.8277 27.9331Z"
      fill={
        theme === 'light'
          ? 'var(--ck-brand-trust-01)'
          : 'var(--ck-brand-trust-01b)'
      }
    />
  </svg>
);

export const Argent = ({ ...props }) => (
  <svg
    {...props}
    aria-hidden="true"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" fill="white" />
    <path
      d="M18.3242 7.63647H13.6516C13.4955 7.63647 13.3704 7.76611 13.367 7.92726C13.2726 12.4568 10.9768 16.7559 7.02532 19.8009C6.89986 19.8976 6.87128 20.0792 6.963 20.21L9.69685 24.112C9.78986 24.2448 9.97107 24.2747 10.0986 24.1772C12.5694 22.2856 14.5567 20.0038 15.9879 17.4746C17.4191 20.0038 19.4065 22.2856 21.8773 24.1772C22.0047 24.2747 22.186 24.2448 22.2791 24.112L25.013 20.21C25.1045 20.0792 25.0759 19.8976 24.9506 19.8009C20.999 16.7559 18.7033 12.4568 18.609 7.92726C18.6056 7.76611 18.4803 7.63647 18.3242 7.63647Z"
      fill="var(--ck-brand-argent)"
    />
  </svg>
);

export const ImToken = ({ ...props }) => (
  <svg
    {...props}
    aria-hidden="true"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      background: `linear-gradient(
      180deg,
      var(--ck-brand-imtoken-01) 0%,
      var(--ck-brand-imtoken-02) 100%
    )`,
    }}
  >
    <path
      d="M26.8543 9.96509C27.5498 19.3857 21.4942 23.8384 16.0655 24.3132C11.0184 24.7546 6.26765 21.6534 5.85087 16.8885C5.50707 12.952 7.94004 11.2761 9.8516 11.109C11.8177 10.9367 13.4698 12.2925 13.6132 13.9342C13.7512 15.5125 12.7664 16.2308 12.0815 16.2906C11.5398 16.3381 10.8584 16.0093 10.7968 15.3032C10.7441 14.6965 10.9744 14.6138 10.9182 13.9693C10.8179 12.8219 9.81731 12.6882 9.26951 12.7357C8.60654 12.7937 7.40368 13.5675 7.5725 15.4949C7.7422 17.439 9.60628 18.9751 12.0498 18.7614C14.6868 18.531 16.5227 16.4779 16.6608 13.5983C16.6595 13.4458 16.6916 13.2948 16.7548 13.156L16.7557 13.1525C16.7841 13.0922 16.8174 13.0342 16.8551 12.9793C16.9113 12.8949 16.9835 12.8016 17.0767 12.6997C17.0775 12.697 17.0775 12.697 17.0793 12.697C17.147 12.6205 17.2288 12.5379 17.3211 12.4491C18.473 11.3623 22.6214 8.79916 26.5448 9.61074C26.6277 9.62851 26.7026 9.67262 26.7584 9.73649C26.8142 9.80035 26.8478 9.88054 26.8543 9.96509"
      fill="white"
    />
  </svg>
);

export const Frame = ({ ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    width="32"
    height="32"
    viewBox="0 0 153.4 152.9"
  >
    <path
      fill="rgb(0, 210, 190)"
      d="M145.1,75.6v-58c0-5.1-4.2-9.3-9.3-9.3h0H77.7c-0.6,0-1.1-0.2-1.6-0.6l-7-7c-0.4-0.4-1-0.7-1.6-0.7H9.3 C4.2,0,0,4.1,0,9.3c0,0,0,0,0,0l0,0v58c0,0.6,0.2,1.1,0.6,1.6l7,7c0.4,0.4,0.7,1,0.7,1.6v58c0,5.1,4.2,9.3,9.3,9.3c0,0,0,0,0,0h58.2 c0.6,0,1.1,0.2,1.6,0.6l7,7c0.4,0.4,1,0.6,1.6,0.6h58.2c5.1,0,9.3-4.1,9.3-9.3c0,0,0,0,0,0l0,0v-58c0-0.6-0.2-1.1-0.6-1.6l-7-7 C145.4,76.7,145.1,76.2,145.1,75.6z M105.6,106.6H47.9c-0.7,0-1.3-0.6-1.3-1.3V47.7c0-0.7,0.6-1.3,1.3-1.3h57.7 c0.7,0,1.3,0.6,1.3,1.3v57.6C107,106,106.4,106.6,105.6,106.6z"
    />
  </svg>
);

export const Rainbow = ({ ...props }) => {
  // Here we're using a base64 of an svg because the gradients in this logo do not play nicely on mobile devices
  /*
  const withoutBackground = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxtYXNrIGlkPSJtYXNrMF8xXzIwIiBzdHlsZT0ibWFzay10eXBlOmFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIyMCIgeT0iMjAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCI+CjxwYXRoIGQ9Ik0yMCA2MlYyNkMyMCAyMi42ODYzIDIyLjY4NjMgMjAgMjYgMjBDNjYuODY5MSAyMCAxMDAgNTMuMTMwOSAxMDAgOTRDMTAwIDk3LjMxMzcgOTcuMzEzNyAxMDAgOTQgMTAwSDU4QzU0LjY4NjMgMTAwIDUyIDk3LjMxMzcgNTIgOTRDNTIgNzkuNjQwNiA0MC4zNTk0IDY4IDI2IDY4QzIyLjY4NjMgNjggMjAgNjUuMzEzNyAyMCA2MloiIGZpbGw9IiNDNEM0QzQiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzFfMjApIj4KPG1hc2sgaWQ9Im1hc2sxXzFfMjAiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjIwIiB5PSIyMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIj4KPHBhdGggZD0iTTIwLjAwMDEgMzhWMjBIMTAwVjEwMEg4Mi4wMDAxVjk0QzgyLjAwMDEgNjMuMDcyMSA1Ni45MjggMzggMjYuMDAwMSAzOEgyMC4wMDAxWiIgZmlsbD0iI0M0QzRDNCIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazFfMV8yMCkiPgo8cGF0aCBkPSJNMCAwSDEyMFYxMjBIMFYwWiIgZmlsbD0iIzY3NTlGRiIvPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9mXzFfMjApIj4KPHBhdGggZD0iTTAgMjZIMjZDNjMuNTU1NCAyNiA5NCA1Ni40NDQ2IDk0IDk0VjEyMEgwVjI2WiIgZmlsbD0iI0ZGNDAwMCIvPgo8L2c+CjwvZz4KPG1hc2sgaWQ9Im1hc2syXzFfMjAiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjIwIiB5PSIzNiIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij4KPHBhdGggZD0iTTIwIDU0VjM2SDI2QzU4LjAzMjUgMzYgODQgNjEuOTY3NSA4NCA5NFYxMDBINjZWOTRDNjYgNzEuOTA4NiA0OC4wOTE0IDU0IDI2IDU0SDIwWiIgZmlsbD0iI0M0QzRDNCIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazJfMV8yMCkiPgo8cGF0aCBkPSJNMCAzNkg4NFYxMjBIMFYzNloiIGZpbGw9IiNGRjdGMDAiLz4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjFfZl8xXzIwKSI+CjxwYXRoIGQ9Ik0wIDQySDI2QzU0LjcxODggNDIgNzggNjUuMjgxMiA3OCA5NFYxMjBIMFY0MloiIGZpbGw9IiNGRkZGMDAiLz4KPC9nPgo8L2c+CjxtYXNrIGlkPSJtYXNrM18xXzIwIiBzdHlsZT0ibWFzay10eXBlOmFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIyMCIgeT0iNTIiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCI+CjxwYXRoIGQ9Ik0yMCA2MlY1MkgyNkM0OS4xOTYgNTIgNjggNzAuODA0IDY4IDk0VjEwMEg1OEM1NC42ODYzIDEwMCA1MiA5Ny4zMTM3IDUyIDk0QzUyIDc5LjY0MDYgNDAuMzU5NCA2OCAyNiA2OEMyMi42ODYzIDY4IDIwIDY1LjMxMzcgMjAgNjJaIiBmaWxsPSIjQzRDNEM0Ii8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrM18xXzIwKSI+CjxwYXRoIGQ9Ik0wIDUySDI2QzQ5LjE5NiA1MiA2OCA3MC44MDQgNjggOTRWMTIwSDBWNTJaIiBmaWxsPSIjMDBFNTEzIi8+CjwvZz4KPG1hc2sgaWQ9Im1hc2s0XzFfMjAiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjIwIiB5PSI1MiIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4Ij4KPHBhdGggZD0iTTIwIDEwMFY1MkgyNkM0OS4xOTYgNTIgNjggNzAuODA0IDY4IDk0VjEwMEgyMFoiIGZpbGw9IiNDNEM0QzQiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2s0XzFfMjApIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjJfZl8xXzIwKSI+CjxwYXRoIGQ9Ik0wIDU4SDI2QzQ1Ljg4MjIgNTggNjIgNzQuMTE3NyA2MiA5NFYxMjBIMFY1OFoiIGZpbGw9IiMwMEFBRkYiLz4KPC9nPgo8L2c+CjwvZz4KPGRlZnM+CjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZl8xXzIwIiB4PSItMTgiIHk9IjgiIHdpZHRoPSIxMzAiIGhlaWdodD0iMTMwIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjkiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8xXzIwIi8+CjwvZmlsdGVyPgo8ZmlsdGVyIGlkPSJmaWx0ZXIxX2ZfMV8yMCIgeD0iLTE4IiB5PSIyNCIgd2lkdGg9IjExNCIgaGVpZ2h0PSIxMTQiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iOSIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzFfMjAiLz4KPC9maWx0ZXI+CjxmaWx0ZXIgaWQ9ImZpbHRlcjJfZl8xXzIwIiB4PSItMTgiIHk9IjQwIiB3aWR0aD0iOTgiIGhlaWdodD0iOTgiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iOSIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzFfMjAiLz4KPC9maWx0ZXI+CjwvZGVmcz4KPC9zdmc+Cg==';
  */
  const withBackground =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNjJfMzI5KSIvPgo8cGF0aCBkPSJNMjAgMzhIMjZDNTYuOTI3OSAzOCA4MiA2My4wNzIxIDgyIDk0VjEwMEg5NEM5Ny4zMTM3IDEwMCAxMDAgOTcuMzEzNyAxMDAgOTRDMTAwIDUzLjEzMDkgNjYuODY5MSAyMCAyNiAyMEMyMi42ODYzIDIwIDIwIDIyLjY4NjMgMjAgMjZWMzhaIiBmaWxsPSJ1cmwoI3BhaW50MV9yYWRpYWxfNjJfMzI5KSIvPgo8cGF0aCBkPSJNODQgOTRIMTAwQzEwMCA5Ny4zMTM3IDk3LjMxMzcgMTAwIDk0IDEwMEg4NFY5NFoiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl82Ml8zMjkpIi8+CjxwYXRoIGQ9Ik0yNiAyMEwyNiAzNkgyMEwyMCAyNkMyMCAyMi42ODYzIDIyLjY4NjMgMjAgMjYgMjBaIiBmaWxsPSJ1cmwoI3BhaW50M19saW5lYXJfNjJfMzI5KSIvPgo8cGF0aCBkPSJNMjAgMzZIMjZDNTguMDMyNSAzNiA4NCA2MS45Njc1IDg0IDk0VjEwMEg2NlY5NEM2NiA3MS45MDg2IDQ4LjA5MTQgNTQgMjYgNTRIMjBWMzZaIiBmaWxsPSJ1cmwoI3BhaW50NF9yYWRpYWxfNjJfMzI5KSIvPgo8cGF0aCBkPSJNNjggOTRIODRWMTAwSDY4Vjk0WiIgZmlsbD0idXJsKCNwYWludDVfbGluZWFyXzYyXzMyOSkiLz4KPHBhdGggZD0iTTIwIDUyTDIwIDM2TDI2IDM2TDI2IDUySDIwWiIgZmlsbD0idXJsKCNwYWludDZfbGluZWFyXzYyXzMyOSkiLz4KPHBhdGggZD0iTTIwIDYyQzIwIDY1LjMxMzcgMjIuNjg2MyA2OCAyNiA2OEM0MC4zNTk0IDY4IDUyIDc5LjY0MDYgNTIgOTRDNTIgOTcuMzEzNyA1NC42ODYzIDEwMCA1OCAxMDBINjhWOTRDNjggNzAuODA0IDQ5LjE5NiA1MiAyNiA1MkgyMFY2MloiIGZpbGw9InVybCgjcGFpbnQ3X3JhZGlhbF82Ml8zMjkpIi8+CjxwYXRoIGQ9Ik01MiA5NEg2OFYxMDBINThDNTQuNjg2MyAxMDAgNTIgOTcuMzEzNyA1MiA5NFoiIGZpbGw9InVybCgjcGFpbnQ4X3JhZGlhbF82Ml8zMjkpIi8+CjxwYXRoIGQ9Ik0yNiA2OEMyMi42ODYzIDY4IDIwIDY1LjMxMzcgMjAgNjJMMjAgNTJMMjYgNTJMMjYgNjhaIiBmaWxsPSJ1cmwoI3BhaW50OV9yYWRpYWxfNjJfMzI5KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzYyXzMyOSIgeDE9IjYwIiB5MT0iMCIgeDI9IjYwIiB5Mj0iMTIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMxNzQyOTkiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDAxRTU5Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQxX3JhZGlhbF82Ml8zMjkiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjYgOTQpIHJvdGF0ZSgtOTApIHNjYWxlKDc0KSI+CjxzdG9wIG9mZnNldD0iMC43NzAyNzciIHN0b3AtY29sb3I9IiNGRjQwMDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjODc1NEM5Ii8+CjwvcmFkaWFsR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhcl82Ml8zMjkiIHgxPSI4MyIgeTE9Ijk3IiB4Mj0iMTAwIiB5Mj0iOTciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGNDAwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4NzU0QzkiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyXzYyXzMyOSIgeDE9IjIzIiB5MT0iMjAiIHgyPSIyMyIgeTI9IjM3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM4NzU0QzkiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY0MDAwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQ0X3JhZGlhbF82Ml8zMjkiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjYgOTQpIHJvdGF0ZSgtOTApIHNjYWxlKDU4KSI+CjxzdG9wIG9mZnNldD0iMC43MjM5MjkiIHN0b3AtY29sb3I9IiNGRkY3MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY5OTAxIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ1X2xpbmVhcl82Ml8zMjkiIHgxPSI2OCIgeTE9Ijk3IiB4Mj0iODQiIHkyPSI5NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZGNzAwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGOTkwMSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Nl9saW5lYXJfNjJfMzI5IiB4MT0iMjMiIHkxPSI1MiIgeDI9IjIzIiB5Mj0iMzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjcwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjk5MDEiLz4KPC9saW5lYXJHcmFkaWVudD4KPHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDdfcmFkaWFsXzYyXzMyOSIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgyNiA5NCkgcm90YXRlKC05MCkgc2NhbGUoNDIpIj4KPHN0b3Agb2Zmc2V0PSIwLjU5NTEzIiBzdG9wLWNvbG9yPSIjMDBBQUZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAxREE0MCIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50OF9yYWRpYWxfNjJfMzI5IiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDUxIDk3KSBzY2FsZSgxNyA0NS4zMzMzKSI+CjxzdG9wIHN0b3AtY29sb3I9IiMwMEFBRkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDFEQTQwIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQ5X3JhZGlhbF82Ml8zMjkiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjMgNjkpIHJvdGF0ZSgtOTApIHNjYWxlKDE3IDMyMi4zNykiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDBBQUZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAxREE0MCIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=';
  return (
    <svg
      {...props}
      aria-hidden="true"
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        backgroundSize: '100% 100%',
        backgroundImage: `url("${withBackground}")`,
      }}
    />
  );
};
export const Brave = ({ ...props }) => (
  <svg
    {...props}
    aria-hidden="true"
    width="88"
    height="88"
    viewBox="0 0 88 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect rx="27%" width="88" height="88" fill="white"></rect>
    <path
      d="M69.0892 28.2123L70.5781 24.5643L66.3594 20.1967C64.0763 17.9136 59.2123 19.2537 59.2123 19.2537L53.7031 13H34.2721L28.7381 19.2785C28.7381 19.2785 23.8741 17.9632 21.591 20.1967L17.3722 24.5395L18.8612 28.1875L17 33.5974L23.204 57.2472C24.4945 62.3097 25.3631 64.2702 29.011 66.8511L40.352 74.5441C41.4439 75.2142 42.784 76.3805 44 76.3805C45.216 76.3805 46.5561 75.2142 47.648 74.5441L58.989 66.8511C62.6369 64.2702 63.5055 62.3097 64.796 57.2472L71 33.5974L69.0892 28.2123Z"
      fill="url(#paint0_linear_2183_5890)"
    />
    <path
      d="M57.6737 23.2739C57.6737 23.2739 64.796 31.8851 64.796 33.6967C64.796 35.5579 63.9026 36.0294 63.0092 36.9972L57.6737 42.705C57.1774 43.2013 56.1103 44.045 56.7307 45.5092C57.3511 46.9982 58.2197 48.8346 57.227 50.7206C56.2344 52.6314 54.4972 53.8971 53.3805 53.6985C51.7195 53.1594 50.1348 52.4088 48.6654 51.4651C47.7224 50.8447 44.6949 48.3382 44.6949 47.3704C44.6949 46.4026 47.8217 44.6406 48.4173 44.2932C48.9881 43.8961 51.6434 42.3575 51.693 41.7619C51.7427 41.1664 51.7427 41.0175 50.9485 39.5285C50.1544 38.0395 48.7647 36.0542 48.9632 34.7638C49.2114 33.4733 51.4449 32.7785 53.1075 32.1581L58.2445 30.2224C58.6415 30.0239 58.5423 29.8502 57.3511 29.7261C56.1599 29.6268 52.8097 29.1801 51.296 29.602C49.7822 30.0239 47.2509 30.6691 47.0028 31.0165C46.8042 31.364 46.6057 31.364 46.829 32.5551L48.2684 40.3722C48.3677 41.3649 48.5662 42.0349 47.5239 42.2831C46.432 42.5313 44.6204 42.9531 44 42.9531C43.3796 42.9531 41.5432 42.5313 40.4761 42.2831C39.409 42.0349 39.6075 41.3649 39.7316 40.3722C39.8309 39.3796 40.9228 33.7215 41.1461 32.5551C41.3943 31.364 41.171 31.364 40.9724 31.0165C40.7243 30.6691 38.1682 30.0239 36.6544 29.602C35.1654 29.1801 31.7904 29.6268 30.5993 29.7509C29.4081 29.8502 29.3088 29.9991 29.7059 30.2472L34.8428 32.1581C36.4807 32.7785 38.7638 33.4733 38.9871 34.7638C39.2353 36.079 37.8208 38.0395 37.0018 39.5285C36.1829 41.0175 36.2077 41.1664 36.2574 41.7619C36.307 42.3575 38.9871 43.8961 39.5331 44.2932C40.1287 44.6654 43.2555 46.4026 43.2555 47.3704C43.2555 48.3382 40.3024 50.8447 39.3097 51.4651C37.8404 52.4088 36.2557 53.1594 34.5947 53.6985C33.4779 53.8971 31.7408 52.6314 30.7233 50.7206C29.7307 48.8346 30.6241 46.9982 31.2197 45.5092C31.8401 44.0202 30.7978 43.2261 30.2767 42.705L24.9412 36.9972C24.0726 36.079 23.1792 35.5827 23.1792 33.7463C23.1792 31.9099 30.3015 23.3235 30.3015 23.3235L37.0763 24.4154C37.8704 24.4154 39.6324 23.7454 41.2454 23.1746C42.8585 22.6783 43.9752 22.6287 43.9752 22.6287C43.9752 22.6287 45.0671 22.6287 46.705 23.1746C48.3428 23.7206 50.08 24.4154 50.8741 24.4154C51.693 24.4154 57.6985 23.2491 57.6985 23.2491L57.6737 23.2739ZM52.3382 56.2298C52.7849 56.4779 52.512 57.0239 52.0901 57.3217L45.7868 62.2353C45.2904 62.7316 44.4963 63.4761 43.9752 63.4761C43.454 63.4761 42.6847 62.7316 42.1636 62.2353C40.0743 60.5717 37.9648 58.9337 35.8355 57.3217C35.4384 57.0239 35.1654 56.5028 35.5873 56.2298L39.3097 54.2445C40.7894 53.4618 42.3551 52.8539 43.9752 52.4329C44.3474 52.4329 46.705 53.2767 48.6158 54.2445L52.3382 56.2298Z"
      fill="white"
    />
    <path
      d="M59.262 19.2785L53.7032 13H34.2721L28.7381 19.2785C28.7381 19.2785 23.8741 17.9632 21.591 20.1967C21.591 20.1967 28.0432 19.6259 30.2767 23.2491L37.126 24.4154C37.9201 24.4154 39.682 23.7454 41.2951 23.1746C42.9081 22.6783 44.0249 22.6287 44.0249 22.6287C44.0249 22.6287 45.1168 22.6287 46.7546 23.1746C48.3925 23.7206 50.1296 24.4154 50.9238 24.4154C51.7427 24.4154 57.7482 23.2491 57.7482 23.2491C59.9817 19.6259 66.4339 20.1967 66.4339 20.1967C64.1508 17.9136 59.2868 19.2537 59.2868 19.2537"
      fill="url(#paint1_linear_2183_5890)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2183_5890"
        x1="17"
        y1="45.3241"
        x2="71"
        y2="45.3241"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.4" stopColor="#FF5500" />
        <stop offset="0.6" stopColor="#FF2000" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2183_5890"
        x1="22.4879"
        y1="18.8219"
        x2="66.4339"
        y2="18.8219"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF452A" />
        <stop offset="1" stopColor="#FF2000" />
      </linearGradient>
    </defs>
  </svg>
);
export const Crypto = ({ ...props }) => (
  <svg
    {...props}
    aria-hidden="true"
    width="88"
    height="88"
    viewBox="0 0 88 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ background: 'white' }}
  >
    <mask
      id="mask0_2091_4394"
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x="13"
      y="9"
      width="62"
      height="71"
    >
      <path
        d="M44 9L13 26.75V62.25L44 80L75 62.25V26.75L44 9ZM31.7577 24.3492H56.1513L59.0935 36.684H28.9307L31.7577 24.3492ZM41.5613 61.2993L36.2955 66.161H31.8427L20.6924 46.9369L28.8701 40.9079L36.0953 45.4627V53.6578L41.5552 58.8504V61.2993H41.5613ZM37.9759 53.1584L38.7888 45.4326L36.1256 38.5432H51.9229L49.3204 45.4326L50.0787 53.1283L44 53.1584H37.9759ZM56.2059 66.1069H51.8076L46.5419 61.2993V58.8564L52.0018 53.6638V45.4627L59.1421 40.8537L67.2955 46.9369L56.2059 66.1069Z"
        fill="#002D74"
      />
    </mask>
    <g mask="url(#mask0_2091_4394)">
      <rect y="8" width="44" height="72" fill="url(#paint0_linear_2091_4394)" />
      <rect
        x="88"
        y="80"
        width="44"
        height="72"
        transform="rotate(-180 88 80)"
        fill="url(#paint1_linear_2091_4394)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_2091_4394"
        x1="22"
        y1="8"
        x2="22"
        y2="80"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#010935" />
        <stop offset="1" stopColor="#142C70" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2091_4394"
        x1="110"
        y1="80"
        x2="110"
        y2="152"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#010935" />
        <stop offset="1" stopColor="#142C70" />
      </linearGradient>
    </defs>
  </svg>
);

export const Ledger = ({ ...props }) => (
  <svg
    {...props}
    aria-hidden="true"
    width="88"
    height="88"
    viewBox="0 0 88 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ background: 'black' }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M37.2106 16H16V29.4577H19.2182V19.2182L37.2106 19.1011V16ZM37.3568 33.4073V54.6179H50.8146V51.3997H40.575L40.458 33.4073H37.3568ZM16 72.1714H37.2106V69.0703L19.2182 68.9533V58.7137H16V72.1714ZM50.9609 16H72.1714V29.4577H68.9533V19.2182L50.9609 19.1011V16ZM72.1714 72.1714H50.9609V69.0703L68.9533 68.9533V58.7137H72.1714V72.1714Z"
      fill="white"
    />
  </svg>
);

export const Steak = ({ ...props }) => (
  <svg
    {...props}
    aria-hidden="true"
    width="600"
    height="600"
    viewBox="0 0 600 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ background: 'black' }}
  >
    <path
      d="M470.747 209.191C462.305 192.354 448.646 178.695 431.808 170.253C413.337 161 389.233 161 341.006 161C331.236 161 307.916 161 300 161C292.084 161 268.728 161 258.994 161C210.856 161 186.662 161 168.191 170.253C151.354 178.69 137.7 192.35 129.27 209.191C119.999 227.662 120 251.767 120 299.976C120 348.185 119.999 372.308 129.27 390.778C137.7 407.619 151.354 421.279 168.191 429.716C186.662 438.97 210.784 438.97 258.994 438.97C268.764 438.97 292.084 438.97 300 438.97C307.916 438.97 331.272 438.97 341.006 438.97C389.144 438.97 413.337 438.97 431.808 429.716C448.646 421.274 462.305 407.616 470.747 390.778C480 372.308 480 348.203 480 299.976C480 251.749 480 227.662 470.747 209.191Z"
      fill="#FFCEAA"
    />
    <path
      d="M218.557 350.342C216.323 345.957 212.922 342.274 208.729 339.698C204.536 337.121 199.713 335.752 194.791 335.741H166.747C163.876 335.755 161.041 336.37 158.422 337.548C155.804 338.725 153.462 340.439 151.547 342.577C149.632 344.716 148.186 347.232 147.303 349.964C146.42 352.696 146.12 355.582 146.422 358.437C147.385 367.476 148.954 374.34 151.575 379.564C157.629 391.573 167.378 401.323 179.388 407.377C188.195 411.798 201.674 413.26 222.444 413.742C225.415 413.812 228.353 413.109 230.97 411.702C233.587 410.295 235.793 408.232 237.373 405.715C238.953 403.199 239.852 400.315 239.982 397.346C240.113 394.378 239.47 391.427 238.116 388.781L218.557 350.342Z"
      fill="#FF3B9A"
    />
    <path
      d="M180.618 312.563C189.852 312.562 198.95 310.335 207.14 306.071C215.33 301.806 222.371 295.63 227.668 288.066L254.856 249.253C259.761 242.25 262.839 234.134 263.81 225.64C264.782 217.146 263.616 208.545 260.419 200.616V200.384C258.913 196.555 256.409 193.2 253.167 190.666C249.925 188.133 246.064 186.514 241.985 185.978C209.732 186.085 190.726 186.887 179.405 192.575C167.37 198.586 157.611 208.339 151.592 220.37C146.725 230.247 145.227 258.007 144.87 280.507C144.797 284.698 145.56 288.862 147.114 292.754C148.668 296.647 150.983 300.191 153.923 303.179C156.863 306.167 160.369 308.539 164.236 310.156C168.103 311.774 172.254 312.604 176.445 312.599L180.618 312.563Z"
      fill="#FF3B9A"
    />
    <path
      d="M449.702 220.356C443.655 208.365 433.909 198.639 421.906 192.614C409.89 186.588 389.262 186.053 353.337 186C304.664 186 289.528 242 279.134 256.834L248.556 300.497C243.645 307.51 240.729 315.725 240.12 324.266C239.511 332.806 241.231 341.352 245.098 348.991L267.758 393.813C270.842 399.931 275.578 405.063 281.43 408.627C287.282 412.191 294.016 414.045 300.867 413.978H301.49C309.495 413.978 334.171 413.978 342.283 413.978C385.072 413.978 408.713 413.977 421.906 407.381C433.914 401.331 443.66 391.58 449.702 379.568C456.317 366.374 456.316 342.787 456.316 299.944C456.316 257.101 456.317 233.621 449.702 220.356Z"
      fill="#FF3B9A"
    />
  </svg>
);

export const Unstoppable = ({ ...props }) => (
  <svg
    {...props}
    aria-hidden="true"
    width="88"
    height="88"
    viewBox="0 0 88 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ background: 'linear-gradient(180deg, #FED812 0%, #FFAF00 100%)' }}
  >
    <path
      d="M47.4 43.7163C47.4 45.6251 45.8781 47.1714 44.0001 47.1714C42.1219 47.1714 40.6 45.6251 40.6 43.7163L40.6 -7H27L27 43.7163C27 53.2612 34.6106 61 44.0001 61C53.3882 61 61 53.2612 61 43.7163V-7H47.4V43.7163Z"
      fill="#1F2129"
    />
  </svg>
);

export const ONTO = ({ ...props }) => (
  <svg
    {...props}
    aria-hidden="true"
    width="88"
    height="88"
    viewBox="0 0 88 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ background: 'white' }}
  >
    <path
      d="M20 16L28.675 24.677C32.1885 21.8644 36.4154 20.0873 40.8816 19.545C45.348 19.0026 49.8769 19.7164 53.9604 21.6063C58.0438 23.4963 61.5207 26.4876 64.0005 30.2447C66.4804 34.0019 67.8653 38.3763 68 42.8772V43.5854V72L59.3367 63.3231C55.8263 66.1389 51.6014 67.9196 47.1361 68.4655C42.6708 69.0112 38.1419 68.3007 34.0577 66.4135C29.9734 64.5262 26.4956 61.537 24.0144 57.7813C21.5333 54.0255 20.1472 49.6521 20.0115 45.1515V44.4433L20 16ZM25.931 30.3311V44.4146C25.9323 47.7294 26.8335 50.9817 28.5384 53.8236C30.2432 56.6655 32.6875 58.9902 35.6101 60.5497C38.5328 62.1089 41.8238 62.8439 45.1313 62.6764C48.439 62.5087 51.639 61.4445 54.3894 59.5978L54.8611 59.2754L27.0873 31.4884L25.931 30.3311ZM33.6223 28.4022L33.1505 28.7304L60.9186 56.5117L62.069 57.6632V43.5854C62.0683 40.2717 61.1679 37.0204 59.464 34.179C57.7603 31.3377 55.3171 29.0132 52.3957 27.4539C49.4742 25.8946 46.1844 25.1592 42.8777 25.3262C39.5712 25.4933 36.372 26.5565 33.6223 28.4022Z"
      fill="#23262F"
    />
  </svg>
);
export const Slope = ({ ...props }) => (
  <svg
    {...props}
    aria-hidden="true"
    width="88"
    height="88"
    viewBox="0 0 88 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ background: '#6C67F1' }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M50.6667 24.3696L34.8872 40.1864L24.0001 37.7402L37.3334 24.3696L48.4438 13.3798C49.268 12.5646 50.6667 13.1484 50.6667 14.3077V24.3696ZM37.3339 51.0358L50.6672 37.74V24.3694L35.2001 39.8737L37.3339 51.0358Z"
      fill="url(#paint0_linear_2593_6077)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M37.3337 64.2947V50.9617L50.667 37.6284L55.7849 45.8435L55.9822 45.6463L64 50.9616L39.5582 75.2343C38.7347 76.0521 37.3336 75.4687 37.3336 74.3082V64.2949L37.3337 64.2947Z"
      fill="url(#paint1_linear_2593_6077)"
    />
    <path
      d="M24 37.7405H32.573C35.202 37.7405 37.3333 39.8718 37.3333 42.5009V51.0359H28.7602C26.1313 51.0359 24 48.9046 24 46.2757V37.7405Z"
      fill="#F1F0FF"
    />
    <path
      d="M50.6667 37.7405H59.2398C61.8688 37.7405 64 39.8718 64 42.5009V51.0359H55.4271C52.798 51.0359 50.6667 48.9046 50.6667 46.2757V37.7405Z"
      fill="#F1F0FF"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2593_6077"
        x1="37.3336"
        y1="13"
        x2="37.3336"
        y2="51.0358"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A8ADFF" />
        <stop offset="0.648556" stopColor="white" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2593_6077"
        x1="50.6668"
        y1="37.6284"
        x2="50.6668"
        y2="75.616"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.260784" stopColor="#B6BAFF" />
        <stop offset="1" stopColor="#E4E2FF" />
      </linearGradient>
    </defs>
  </svg>
);
export const GnosisSafe = ({ background = false, ...props }) => (
  <svg
    {...props}
    aria-hidden="true"
    width="88"
    height="88"
    viewBox="0 0 88 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={
      background ? { background: 'var(--ck-brand-gnosisSafe)' } : undefined
    }
  >
    <path
      d="M68.7186 44H62.6472C60.8339 44 59.3646 45.4686 59.3646 47.281V56.0888C59.3646 57.9012 57.8952 59.3697 56.0819 59.3697H31.9278C30.1145 59.3697 28.6452 60.8383 28.6452 62.6507V68.719C28.6452 70.5314 30.1145 72 31.9278 72H57.48C59.2933 72 60.7417 70.5314 60.7417 68.719V63.8504C60.7417 62.038 62.2111 60.7524 64.0244 60.7524H68.7174C70.5307 60.7524 72 59.2838 72 57.4714V47.2429C72 45.4305 70.5307 44 68.7174 44H68.7186Z"
      fill="#121312"
    />
    <path
      d="M28.6406 31.9308C28.6406 30.1162 30.1104 28.6458 31.9243 28.6458H56.0712C57.8851 28.6458 59.3548 27.1754 59.3548 25.3608V19.285C59.3548 17.4704 57.8851 16 56.0712 16H30.5245C28.7107 16 27.2409 17.4704 27.2409 19.285V23.9666C27.2409 25.7813 25.7711 27.2516 23.9572 27.2516H19.2837C17.4698 27.2516 16 28.722 16 30.5366V40.7888C16 42.6034 17.4759 44 19.2898 44H25.3631C27.177 44 28.6468 42.5296 28.6468 40.715L28.6406 31.932V31.9308Z"
      fill="#121312"
    />
    <path
      d="M41.1004 37.6774H46.8995C48.7894 37.6774 50.3226 39.2117 50.3226 41.1004V46.8995C50.3226 48.7894 48.7882 50.3225 46.8995 50.3225H41.1004C39.2106 50.3225 37.6774 48.7882 37.6774 46.8995V41.1004C37.6774 39.2105 39.2118 37.6774 41.1004 37.6774V37.6774Z"
      fill="#121312"
    />
  </svg>
);

export const Frontier = ({ ...props }) => (
  <svg
    {...props}
    aria-hidden="true"
    width="88"
    height="88"
    viewBox="0 0 88 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ background: '#CC703C' }}
  >
    <path
      d="M63.6429 20L63.3645 20.7254L62.4521 23.0445L61.8461 24.5395C57.2427 35.7491 53.6629 41.0688 49.8557 41.0688C48.8938 41.0936 47.9371 40.9212 47.0465 40.5625C46.156 40.2038 45.3512 39.6667 44.6834 38.9852L44.1979 38.5518C42.9885 37.4538 42.4799 37.1831 41.3154 37.1832C40.7094 37.1832 39.6238 37.9435 38.2521 39.7303C36.4147 42.2912 34.8522 45.0327 33.59 47.9106L33.4353 48.2482L49.7645 48.2483L47.7312 52.4075H32.4845L32.4843 69.44L28 69.44L28.0001 20L63.6429 20ZM57.2889 24.1518L32.4843 24.1518L32.4843 40.6262C35.4564 35.5545 38.2816 33.0086 41.32 33.0086C42.3421 32.9765 43.3595 33.1534 44.3082 33.5284C45.2569 33.9034 46.1159 34.468 46.8311 35.1865L47.3323 35.6335C48.4611 36.6585 48.8956 36.8941 49.8604 36.8941C50.9211 36.8957 53.7433 32.4855 57.2889 24.1518Z"
      fill="white"
    />
  </svg>
);

export const Zerion = ({ ...props }) => (
  <svg
    {...props}
    aria-hidden="true"
    width="88"
    height="88"
    viewBox="0 0 88 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      background: 'linear-gradient(120.22deg, #2962EF 0%, #255CE5 100%)',
    }}
  >
    <path
      d="M19.0864 22C17.5783 22 16.9973 23.8648 18.2628 24.6438L49.9199 43.732C50.709 44.2178 51.7614 44.0258 52.3048 43.2969L66.2236 25.024C67.17 23.7545 66.2138 22 64.5757 22H19.0864Z"
      fill="white"
    />
    <path
      d="M68.8425 66C70.3503 66 70.9466 64.1252 69.6814 63.3464L38.015 44.2605C37.2259 43.7748 36.1989 43.991 35.6558 44.7198L21.7099 62.9891C20.7639 64.2582 21.7499 66 23.3877 66H68.8425Z"
      fill="white"
    />
  </svg>
);

export const Phantom = () => (
  <svg
    width="128"
    height="128"
    viewBox="0 0 128 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_51_1414)">
      <circle cx="64" cy="64" r="64" fill="url(#paint0_linear_51_1414)" />
      <g filter="url(#filter0_d_51_1414)">
        <path
          d="M110.584 64.9142H99.1422C99.1422 41.7651 80.1732 23 56.7725 23C33.6614 23 14.8718 41.3057 14.412 64.0583C13.9362 87.577 36.2412 108 60.0188 108H63.0096C83.9725 108 112.069 91.7667 116.459 71.9874C117.27 68.3413 114.359 64.9142 110.584 64.9142ZM39.769 65.9454C39.769 69.0411 37.2097 71.5729 34.0804 71.5729C30.9511 71.5729 28.3917 69.0399 28.3917 65.9454V56.8414C28.3917 53.7457 30.9511 51.2139 34.0804 51.2139C37.2097 51.2139 39.769 53.7457 39.769 56.8414V65.9454ZM59.5226 65.9454C59.5226 69.0411 56.9633 71.5729 53.834 71.5729C50.7046 71.5729 48.1453 69.0399 48.1453 65.9454V56.8414C48.1453 53.7457 50.7058 51.2139 53.834 51.2139C56.9633 51.2139 59.5226 53.7457 59.5226 56.8414V65.9454Z"
          fill="url(#paint1_linear_51_1414)"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_51_1414"
        x="6.76403"
        y="15.3596"
        width="117.472"
        height="100.281"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="3.82022" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_51_1414"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_51_1414"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_51_1414"
        x1="64"
        y1="0"
        x2="64"
        y2="128"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#534BB1" />
        <stop offset="1" stop-color="#551BF9" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_51_1414"
        x1="65.5"
        y1="23"
        x2="65.5"
        y2="108"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0.82" />
      </linearGradient>
      <clipPath id="clip0_51_1414">
        <rect width="128" height="128" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export const PlaceHolder = () => {
  return <div style={{ width: 80, height: 80, background: '#555' }}></div>;
};

export const Dawn = ({ ...props }) => (
  <svg
    {...props}
    width="88px"
    height="88px"
    viewBox="0 0 192 192"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
        <stop stop-color="#151515" offset="0%"></stop>
        <stop stop-color="#232323" offset="100%"></stop>
      </linearGradient>
      <rect rx="27%" id="path-2" x="0" y="0" width="192" height="192"></rect>
      <linearGradient
        x1="50%"
        y1="0%"
        x2="50%"
        y2="99.7051532%"
        id="linearGradient-3"
      >
        <stop stop-color="#F3DC83" offset="0%"></stop>
        <stop stop-color="#F9EEC8" offset="100%"></stop>
      </linearGradient>
    </defs>
    <g
      id="Icons---Pixel-Fitted"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="Group">
        <g id="Rectangle">
          <use fill="#232323" xlinkHref="#path-2"></use>
          <use fill="url(#linearGradient-1)" xlinkHref="#path-2"></use>
        </g>
        <path
          d="M123.748399,157.001808 C115.293464,160.853955 105.89735,163 96,163 C86.1026503,163 76.7065363,160.853955 68.2516012,157.001808 Z M146.526595,140.002206 C144.677242,142.123986 142.696426,144.128189 140.59684,146.002121 L51.4031598,146.002121 C49.3035743,144.128189 47.3227581,142.123986 45.4734054,140.002206 Z M157.337411,122.999613 C155.955969,126.133404 154.34141,129.141319 152.515704,132.001388 L39.484296,132.001388 C37.6585895,129.141319 36.0440306,126.133404 34.662589,122.999613 Z M96,29 C133.003078,29 163,58.9969218 163,96 C163,103.706309 161.69895,111.108742 159.304524,117.999626 L32.6954763,117.999626 C30.3010496,111.108742 29,103.706309 29,96 C29,58.9969218 58.9969218,29 96,29 Z"
          id="Combined-Shape"
          fill="url(#linearGradient-3)"
        ></path>
      </g>
    </g>
  </svg>
);

export const OtherWallets = ({ ...props }) => {
  const column: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  };
  const row: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    gap: 2,
  };
  const cell: React.CSSProperties = {
    width: '50%',
    overflow: 'hidden',
    borderRadius: '27.5%',
  };
  return (
    <div style={column} {...props}>
      <div style={row}>
        <div style={cell}>
          <WalletConnect background />
        </div>
        <div style={cell}>
          <Zerion />
        </div>
      </div>
      <div style={row}>
        <div style={cell}>
          <Rainbow />
        </div>
        <div style={cell}>
          <ImToken />
        </div>
      </div>
    </div>
  );
};

export default {
  Injected,
  OtherWallets,
  WalletConnect,
  WalletConnectLegacy,
  MetaMask,
  Coinbase,
  Family,
  Trust,
  Argent,
  ImToken,
  Rainbow,
  Crypto,
  Ledger,
  Brave,
  Steak,
  Unstoppable,
  ONTO,
  Slope,
  GnosisSafe,
  Frontier,
  Zerion,
  Phantom,
  PlaceHolder,
  Frame,
  Dawn,
};