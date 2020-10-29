const dev = {
  STRIPE_KEY: "sk_test_51HeaQyBbsavKS9iZr3yMt5Ih2RTXKYXi5kwKrFMKKyhPHeft4CMtI49XrqLJT2EcFWZUeXRrtvzEawTn1ynJoCTF00mURMZCyr",
  s3: {
    REGION: "ap-northeast-2",
    BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-8faddvf87o6x"
  },
  apiGateway: {
    REGION: "ap-northeast-2",
    URL: "https://w40nmlig33.execute-api.ap-northeast-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "ap-northeast-2",
    USER_POOL_ID: "ap-northeast-2_GvfxDyzcE",
    APP_CLIENT_ID: "29c3v27pe3feueo03vt6hn09hb",
    IDENTITY_POOL_ID: "ap-northeast-2:70774f41-561f-4036-8e87-ea49f8d5edcb"
  }
};

const prod = {
  STRIPE_KEY: "sk_test_51HeaQyBbsavKS9iZr3yMt5Ih2RTXKYXi5kwKrFMKKyhPHeft4CMtI49XrqLJT2EcFWZUeXRrtvzEawTn1ynJoCTF00mURMZCyr",
  s3: {
    REGION: "ap-northeast-2",
    BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-18aaqhe346cx7"
  },
  apiGateway: {
    REGION: "ap-northeast-2",
    URL: "https://s906f9fqfb.execute-api.ap-northeast-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-northeast-2",
    USER_POOL_ID: "ap-northeast-2_dgbiFsVm8",
    APP_CLIENT_ID: "f6uefuih4j5udbsfdvcoi8r5s",
    IDENTITY_POOL_ID: "ap-northeast-2:79af1a52-65c7-4901-af05-8fba30701fdb"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'dev'
  ? prod
  : dev;

  export default {
    STRIPE_KEY: "pk_test_51HeaQyBbsavKS9iZJUFJixEOdini7BwE26ydXBSYYhMundqSF9Id4l9IW4Iz8u7sJArE4JP7KyE4dXgu76rbmnvS00zK2bF9AX",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "ap-northeast-2",
      BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-8faddvf87o6x"
    },
    apiGateway: {
      REGION: "ap-northeast-2",
      URL: "https://w40nmlig33.execute-api.ap-northeast-2.amazonaws.com/dev"
    },
    cognito: {
      REGION: "ap-northeast-2",
      USER_POOL_ID: "ap-northeast-2_GvfxDyzcE",
      APP_CLIENT_ID: "29c3v27pe3feueo03vt6hn09hb",
      IDENTITY_POOL_ID: "ap-northeast-2:70774f41-561f-4036-8e87-ea49f8d5edcb"
    }
  };
