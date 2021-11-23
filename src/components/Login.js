import OktaSignIn from "@okta/okta-signin-widget";
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";
import React from "react";

const config = {
  baseUrl: "dev-7870713.okta.com",
  clientId: "0oa2nzngmeZR8P5QY5d7",
  logo: "//logo.clearbit.com/gatsbyjs.org",
  redirectUri:
    typeof window !== "undefined" && window.location.origin + "/account",
  el: "#signIn",
  authParams: {
    issuer: "<okta-org-url>/oauth2/default",
    scopes: ["openid", "email", "profile"],
  },
};

export const signIn = typeof window !== "undefined" && new OktaSignIn(config);

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: false,
    };

    this.signIn = signIn;
  }

  async componentDidMount() {
    const authClient = this.signIn.authClient
    const session = await authClient.session.get()
    console.log('session.status, session.status')
    if (session.status === 'ACTIVE'){
        window.location.hash = ''
        this.setState( state: {user: session.login})
        localStorage.setItem('isAuthenticated','true')
        authClient.token.getWithoutPrompt({
            scopes:['openid','email','profile'],
        }).then((tokens)=>{
            tokens.forEach(token => {
            if (token.idToken){
                authClient.tokenManager.add('idToken',token)
            }
            if (token.accessToken){
                authClient.tokenManager.add('accessToken',token)
            }
        })
            
            
        authClient.tokenManager.get('idToken').then(idToken =>{
            console.log(`Hello, ${idToken.claims.name} (${idToken.claims.email})`)
            window.location.reload()
        })
    }).catch(error=>console.error(error))
return 
}else {
        this.signIn.remove()
    }
    this.signIn.renderEL({el:'#singIn'})
  }

  render() {
    return <div id="signIn" />;
  }
}

export default Login;
